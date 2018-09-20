using QuickMenu.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;



namespace QuickMenu.Controllers
{
    public class LoginController : Controller
    {


        [HttpPost]
        public ActionResult FormSender(ViewModels.MailSender model)
        {
            MailMessage Smail = new MailMessage(model.To, "quick.menu.master@gmail.com");
            Smail.Subject = model.Subject;

            Smail.Body = Smail.Body + "<h1 style='color: #B1B1B1; font-size:18px; padding-bottom: 2em; max-width: 559px; background-color: #f3f3f3; text-align: center; margin: auto;'><br><br><strong style='color: #B1B1B1;'>YOU HAVE A NEW MESSAGE!</strong></h1>";
            Smail.Body = Smail.Body + "<h3 style='color: #484848; font-size: 14px; max-width: 559px; background-color: #f3f3f3; text-align: center; margin: auto; text-align: center;'>";
            Smail.Body = Smail.Body + "<br> Hey, we got something new for you! </body>";
            Smail.Body = Smail.Body + "<br> Someone sent you a message </body>";
            Smail.Body = Smail.Body + "<br> This is the message: <label style = 'color: #77BE53'>" + model.Body+ "</label></body>";
            Smail.Body = Smail.Body + "<br> If you want to send a message for this person, this is the email: <label style = 'color: #77BE53'>" + model.To + "</label></body>";
            Smail.Body = Smail.Body + "<br><br><span  style = 'padding-bottom: 2em;' ><SUP>©</SUP> QuickMenu 2018</span>";
            Smail.BodyEncoding = System.Text.Encoding.UTF8;
            Smail.IsBodyHtml = true;

            //conexion con servidor SMTP
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;

            NetworkCredential Ncre = new NetworkCredential("quick.menu.master@gmail.com", "Quickmenu0315");
            smtp.UseDefaultCredentials = true;
            smtp.Credentials = Ncre;
            smtp.Send(Smail);
            ViewBag.Message = "Email enviado con exito!";
            return RedirectToAction("Index","Login");
        }
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Confirm(user usermodel)
        {
            using(quickmenumainEntities db = new quickmenumainEntities())
            {
                var UserConfirmation = db.user.Where(x => x.email == usermodel.email && x.password == usermodel.password).FirstOrDefault();
                if (UserConfirmation == null)
                {
                    usermodel.LoginError = "Wrong Email or Password";                    
                    usermodel.password = null;
                    return View("Index", usermodel);
                }
                else
                {
                    Session["email"] = UserConfirmation.email;
                    Session["name"] = UserConfirmation.name;
                    Session["password"] = UserConfirmation.password;
                    return RedirectToAction("Index", "Control");
                }                
            }            
        }
        [HttpPost]
        public ActionResult Create(user usermodel)
        {
            using (quickmenumainEntities db = new quickmenumainEntities())
            {
                try
                {
                    var UserCreation = db.Set<user>();
                    UserCreation.Add(new user { email = usermodel.email, name = usermodel.name, password = usermodel.password });
                    db.SaveChanges();
                    Session["email"] = usermodel.email;
                    Session["name"] = usermodel.name;
                    Session["password"] = usermodel.password;
                    return RedirectToAction("Index", "Control");
                }
                catch
                {
                    usermodel.SingUpError = "Couldn't create new user";
                    usermodel.password = null;                    
                    return View("Index", usermodel);
                }
            }
        }
        public ActionResult LogOut()
        {
            Session.Abandon();
            return RedirectToAction("Index", "Login");
        }
    }
}