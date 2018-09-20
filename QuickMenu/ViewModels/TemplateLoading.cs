using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickMenu.Models;

namespace QuickMenu.ViewModels
{
    public class TemplateLoading
    {
        public string rname;
        public List<product> products=new List<product>();
        public pagestyle pagestyle;        
        public TemplateLoading(string name)
        {
            rname = name;
            Conn conn = new Conn();            
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                pagestyle = db.pagestyle.Where(x => x.restaurantname == rname).FirstOrDefault();
                var GetProducts = db.product.Where(x=>x.idproduct >0);
                foreach (var r in GetProducts)
                {
                    products.Add(r);
                }
            }            
        }
    }
}