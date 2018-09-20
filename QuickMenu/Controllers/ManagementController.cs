using QuickMenu.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuickMenu.Controllers
{
    public class ManagementController : Controller
    {
        // GET: Management
        private ViewModels.ManagementLoading managementLoading(string rname)
        {
            ViewModels.ManagementLoading ml = new ViewModels.ManagementLoading(rname);
            return ml;
        }
        public ActionResult Index()
        {
            string rname = (string)Session["rname"];
            if (rname!=null)
            {
                return View(managementLoading(rname));
            }
            else
            {
                return RedirectToAction("Index","Login");
            }
            
        }
        public ActionResult IndexAlt()
        {
            string rname = (string)Session["rname"];
            if (rname != null)
            {
                return View(managementLoading(rname));
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }

        }
        public ActionResult GetProducts()
        {
            string rname = (string)Session["rname"];            
            return View("Index", managementLoading(rname));
        }
        public ActionResult GetEmployees()
        {
            string rname = (string)Session["rname"];                      
            return PartialView("IndexAlt", managementLoading(rname));
        }
        public ActionResult EditEmp(employee employeemodel)
        {
            return PartialView("_EmpEdit",employeemodel);
        }
        public ActionResult EditPro(product productmodel)
        {
            return PartialView("_ProEdit", productmodel);
        }        
        [HttpPost]
        public ActionResult AddEmp(employee employeemodel)
        {
            Conn conn = new Conn();
            string rname = (string)Session["rname"];
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                try
                {
                    var EmployeeCreation = db.Set<employee>();
                    EmployeeCreation.Add(new employee { email = employeemodel.email, password = employeemodel.password, name = employeemodel.name, position = employeemodel.position });                    
                    db.SaveChanges();
                    return RedirectToAction("Index", "Management");
                }
                catch (Exception ex)
                {
                    employeemodel.AddEError = "Couldn't create new Employee" + ex;
                    return PartialView("_EmpAdd", employeemodel);
                }
            }
        }
        [HttpPost]
        public ActionResult AddPro(product productmodel)
        {
            Conn conn = new Conn();
            string rname = (string)Session["rname"];
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                try
                {
                    int idp;
                    product LastProduct;
                    try
                    {
                        LastProduct = db.product.Where(x => x.idproduct > 0).OrderByDescending(x => x.idproduct).First();
                        idp = LastProduct.idproduct + 1;
                    }
                    catch
                    {
                        idp = 1;
                    }                   
                    var ProductCreation = db.Set<product>();
                    ProductCreation.Add(new product { idproduct = idp, name = productmodel.name, price = productmodel.price,details=productmodel.details });
                    db.SaveChanges();
                    return RedirectToAction("Index", "Management");
                }
                catch (Exception ex)
                {
                    productmodel.AddPError = "Couldn't create new Product" + ex;
                    return PartialView("_ProAdd", productmodel);
                }
            }
        }
        [HttpPost]
        public ActionResult UpdateEmp(employee employeemodel)
        {
            Conn conn = new Conn();
            string rname = (string)Session["rname"];
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                if (ModelState.IsValid)
                {
                    db.Entry(employeemodel).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("GetEmployees");
                }
                else
                {
                    employeemodel.AddEError = "Couldn't edit Employee";
                    return PartialView("_EmpEdit", employeemodel);
                }
            }
        }
        [HttpPost]
        public ActionResult UpdatePro(product productmodel)
        {
            Conn conn = new Conn();
            string rname = (string)Session["rname"];
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                if (ModelState.IsValid)
                {
                    db.Entry(productmodel).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("GetProducts");
                }
                else
                {
                    productmodel.AddPError = "Couldn't edit Product";
                    return PartialView("_ProEdit", productmodel);
                }
            }
        }
        public ActionResult LogOut(string id)
        {
            Session.Abandon();
            return Redirect("/Template/Index/"+id);
        }
    }
}