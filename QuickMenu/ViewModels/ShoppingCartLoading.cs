using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using QuickMenu.Models;

namespace QuickMenu.ViewModels
{
    public class ShoppingCartLoading
    {
        public string rname;
        public List<orderdetail> orderdetails = new List<orderdetail>();
        public List<product> pnames = new List<product>();        
        public ShoppingCartLoading(List<orderdetail> od, string name)
        {               
            rname = name;
            orderdetails = od;
            Conn conn = new Conn();         
            
                foreach (var r in orderdetails)
                {
                    
                    using (quickmenusubEntities dbp = new quickmenusubEntities(conn.ConfConn(rname)))
                    {                    
                       var Getpname = dbp.product.Where(x => x.idproduct == r.idproduct).First();
                    pnames.Add(Getpname);
                    }
                                       
                }                
            
        }        
    }
}