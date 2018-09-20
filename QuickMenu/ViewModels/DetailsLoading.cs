using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickMenu.Models;

namespace QuickMenu.ViewModels
{
    public class DetailsLoading
    {
        public string rname;
        public List<orderdetail> orderdetails = new List<orderdetail>();
        public List<product> pnames = new List<product>();
        public order order = new order();
        public DetailsLoading(string name, int id)
        {   
            
            rname = name;
            Conn conn = new Conn();
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {
                order = db.order.Find(id);
            }
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {                
                var GetOD = db.orderdetail.Where(x => x.idorder == id);
                foreach (var r in GetOD)
                {
                    product Getpname;
                    using (quickmenusubEntities dbp = new quickmenusubEntities(conn.ConfConn(rname)))
                    {
                        Getpname = dbp.product.Where(x => x.idproduct == r.idproduct).First();
                    }
                    pnames.Add(Getpname);
                    orderdetails.Add(r);
                }
                
            }
        }        
    }
}