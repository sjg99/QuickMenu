using QuickMenu.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuickMenu.Controllers
{
    public class OrderController : Controller
    {
        // GET: Order
        private ViewModels.OrdersLoading ordersLoading(string rname)
        {
            ViewModels.OrdersLoading ml = new ViewModels.OrdersLoading(rname);
            return ml;
        }
        public ActionResult Index()
        {
            string rname = (string)Session["rname"];
            if (rname != null)
            {
                return View(ordersLoading(rname));
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }

        }
        public ActionResult GetOrders()
        {
            string rname = (string)Session["rname"];
            return PartialView("Index", ordersLoading(rname));
        }
        
        
        public ActionResult EditOrd(order ordermodel)
        {
            return PartialView("_OrdEdit", ordermodel);
        }
        
        public ActionResult DetOrd(order ordermodel)
        {
            return PartialView("_OrdDet", LoadOrdDet(ordermodel.idorder));
        }
        public ActionResult UpdateOrd(order ordermodel)
        {
            Conn conn = new Conn();
            string rname = (string)Session["rname"];
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                if (ModelState.IsValid)
                {
                    db.Entry(ordermodel).State = EntityState.Modified;
                    db.SaveChanges();
                    return RedirectToAction("GetOrders");
                }
                else
                {
                    ordermodel.AddOError = "Couldn't edit Order";
                    return PartialView("_OrdEdit", ordermodel);
                }
            }
        }
        public ActionResult OrderDetails(int id)
        {
            return PartialView("_Details", LoadOrdDet(id));
        }
        private ViewModels.DetailsLoading LoadOrdDet(int id)
        {
            string rname = (string)Session["rname"];
            ViewModels.DetailsLoading dl = new ViewModels.DetailsLoading(rname,id);
            return dl;
        }
        public ActionResult LogOut(string id)
        {
            Session.Abandon();
            return Redirect("/Template/Index/" + id);
        }
    }
}