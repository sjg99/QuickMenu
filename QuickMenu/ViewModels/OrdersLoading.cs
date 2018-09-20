using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickMenu.Models;

namespace QuickMenu.ViewModels
{
    public class OrdersLoading
    {
        public string rname;
        public List<order> orders = new List<order>();        
        public OrdersLoading(string name)
        {
            rname = name;
            Conn conn = new Conn();
            using (quickmenusubEntities db = new quickmenusubEntities(conn.ConfConn(rname)))
            {                
                var GetOrders = db.order.Where(x => x.idorder >0);
                foreach (var r in GetOrders)
                {
                    orders.Add(r);
                }
                
            }
        }        
    }
}