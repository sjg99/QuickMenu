using QuickMenu.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;


namespace QuickMenu.Controllers
{
    public class ControlController : Controller
    {
        private List<restaurant> LoadRestaurants()
        {
            List<restaurant> restaurants = new List<restaurant>();
            using (quickmenumainEntities db = new quickmenumainEntities())
            {
                string email = (string)Session["email"];
                var GetRestaurant = db.restaurant.Where(x => x.user_email == email);
                foreach (var r in GetRestaurant)
                {
                    restaurant res = new restaurant();
                    res.name = r.name;                    
                    restaurants.Add(res);
                }
            }

            return restaurants;
        }
        // GET: Control
        public ActionResult Index()
        {           
           return View(LoadRestaurants());
        }
        [HttpPost]
        public ActionResult AddRes(restaurant restaurantmodel)
        {
            using (quickmenumainEntities db = new quickmenumainEntities())
            {
                try
                {
                    var RestaurantCreation = db.Set<restaurant>();
                    RestaurantCreation.Add(new restaurant { name = restaurantmodel.name, user_email = (string)Session["email"] });
                    db.Database.ExecuteSqlCommand("CREATE SCHEMA IF NOT EXISTS `" + restaurantmodel.name + "` DEFAULT CHARACTER SET utf8;USE `" + restaurantmodel.name + "` ;CREATE TABLE IF NOT EXISTS `" + restaurantmodel.name + "`.`order` ( `idorder` INT NOT NULL,  `totalprice` DOUBLE NOT NULL,  `table` INT NOT NULL,  `paymentmethod` VARCHAR(45) NOT NULL,  `status` VARCHAR(45) NOT NULL,  `date` DATETIME NOT NULL,  PRIMARY KEY(`idorder`))ENGINE = InnoDB;CREATE TABLE IF NOT EXISTS `" + restaurantmodel.name + "`.`employee` (  `email` VARCHAR(45) NOT NULL,  `password` VARCHAR(45) NOT NULL,  `name` VARCHAR(45) NOT NULL,  `position` VARCHAR(45) NOT NULL,  PRIMARY KEY(`email`))ENGINE = InnoDB; CREATE TABLE IF NOT EXISTS `" + restaurantmodel.name + "`.`product` (  `idproduct` INT NOT NULL,  `name` VARCHAR(45) NOT NULL,  `price` DOUBLE NOT NULL,  `details` LONGTEXT NOT NULL,  PRIMARY KEY(`idproduct`))ENGINE = InnoDB; CREATE TABLE IF NOT EXISTS `" + restaurantmodel.name + "`.`orderdetail` (  `idproduct` INT NOT NULL,  `quantity` INT NOT NULL,  `totalprice` DOUBLE NOT NULL,  `idorder` INT NOT NULL,  INDEX `fk_OrderDetails_Order_idx` (`idorder` ASC),  INDEX `fk_OrderDetails_Product1_idx` (`idproduct` ASC),  CONSTRAINT `fk_OrderDetails_Order`    FOREIGN KEY(`idorder`)    REFERENCES `" + restaurantmodel.name + "`.`order` (`idorder`)    ON DELETE NO ACTION    ON UPDATE NO ACTION,  CONSTRAINT `fk_OrderDetails_Product1`    FOREIGN KEY(`idproduct`)    REFERENCES `" + restaurantmodel.name + "`.`product` (`idproduct`)    ON DELETE NO ACTION    ON UPDATE NO ACTION)ENGINE = InnoDB; CREATE TABLE IF NOT EXISTS `" + restaurantmodel.name + "`.`pagestyle` (  `restaurantname` VARCHAR(45) NOT NULL,  `details` LONGTEXT NOT NULL)ENGINE = InnoDB;");
                    db.SaveChanges();
                    db.Database.ExecuteSqlCommand("USE `" + restaurantmodel.name + "`;INSERT INTO pagestyle VALUES('" + restaurantmodel.name + "','');insert into employee values('" + Session["email"]+"','"+Session["password"]+ "','" + Session["name"] + "','Gerente');");
                    db.SaveChanges();
                    return RedirectToAction("Index", "Control");
                }
                catch(Exception ex)
                {
                    restaurantmodel.AddRError = "Couldn't create new Restaurant"+ex;                    
                    return PartialView("_AddRes", restaurantmodel);
                }
            }            
        }
        [HttpPost]
        public ActionResult DelRes(string name)
        {            
            using (quickmenumainEntities db = new quickmenumainEntities())
            {                
                restaurant RestaurantDeletion = db.restaurant.Where(x => x.name == name).FirstOrDefault();
                db.restaurant.Remove(RestaurantDeletion);
                db.Database.ExecuteSqlCommand("DROP DATABASE `" + name+"`");
                db.SaveChanges();
                return RedirectToAction("Index", "Control");
            }           

        }
        [HttpPost]
        public ActionResult ToRes(string name)
        {                       
            return Redirect("/Template/Index/"+name);
        }        
    }
}