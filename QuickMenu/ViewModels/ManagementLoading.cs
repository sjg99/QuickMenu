using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickMenu.Models;

namespace QuickMenu.ViewModels
{
    public class ManagementLoading
    {
        public string rname;
        public List<product> products = new List<product>();
        public List<employee> employees = new List<employee>();
        public ManagementLoading(string name)
        {
            rname = name;
            Conn conn = new Conn();
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                var GetProducts = db.product.Where(x => x.idproduct > 0);
                var GetEmployees = db.employee.Where(x => x.email != null);
                foreach (var r in GetProducts)
                {
                    products.Add(r);
                }
                foreach (var r in GetEmployees)
                {
                    employees.Add(r);
                }
            }
        }
    }
}