using QuickMenu.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuickMenu.Controllers
{
    public class TemplateController : Controller
    {
        // GET: Template
        
       
        private ViewModels.TemplateLoading Loadpagestyle(string rname)
        {
            ViewModels.TemplateLoading tl = new ViewModels.TemplateLoading(rname);
            return tl;
        }
        private ViewModels.ProductDescriptionLoading Loadpd(product p,string rname)
        {
            ViewModels.ProductDescriptionLoading pd = new ViewModels.ProductDescriptionLoading(p,rname);
            return pd;
        }
        private ViewModels.ShoppingCartLoading LoadSC(List<orderdetail> od,string rname)
        {
            ViewModels.ShoppingCartLoading sc = new ViewModels.ShoppingCartLoading(od,rname);
            return sc;
        }
        public ActionResult Index(string id)
        {
            if (id == null)
            {
                return RedirectToAction("Index", "Login");
            }
            else
            {
                ViewModels.SHCList.list.Clear();
                return View(Loadpagestyle(id));
            }
        }
        [HttpPost]
        public ActionResult Confirm(employee employeemodel,string id)
        {
            Conn conn = new Conn();            
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(id)))
            {

                var UserConfirmation = db.employee.Where(x => x.email == employeemodel.email && x.password == employeemodel.password).FirstOrDefault();
                if (UserConfirmation == null)
                {                    
                    employeemodel.LoginError = "Wrong Email or Password";
                    employeemodel.password = null;
                    return View("_TemLog",employeemodel);
                }
                else
                {
                    Session["email"] = UserConfirmation.email;
                    Session["name"] = UserConfirmation.name;
                    Session["position"] = UserConfirmation.position;
                    Session["rname"] = id;
                    if (UserConfirmation.position == "Gerente")
                    {
                        return RedirectToAction("Index", "Management");
                    }
                    else if(UserConfirmation.position == "Camarero" || UserConfirmation.position == "Personal Cocina")
                    {
                        return RedirectToAction("Index", "Order");
                    }
                    else
                    {
                        return Redirect("/Template/Index/" + id);
                    }
                }
            }
        }
        public ActionResult DesPro(product productmodel,string id)
        {
            return PartialView("_ProDes", Loadpd(productmodel,id));
            
        }        
        public ActionResult AddShC(orderdetail orderdetailmodel, string id)
        {
            ViewModels.SHCList.list.Add(orderdetailmodel);            
            return PartialView("_ShCart",LoadSC(ViewModels.SHCList.list,id));            
        }
    }
}