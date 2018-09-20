using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace QuickMenu.Controllers
{
    public class EditorController : Controller
    {
        // GET: Editor
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Edit()
        {
            return PartialView("Index", "");
        }

        public ActionResult LogOut(string id)
        {
            Session.Abandon();
            return Redirect("/Template/Index/" + id);
        }
    }
}