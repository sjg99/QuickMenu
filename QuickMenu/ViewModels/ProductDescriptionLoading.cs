using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QuickMenu.Models;

namespace QuickMenu.ViewModels
{
    public class ProductDescriptionLoading
    {
        public string rname;
        public List<orderdetail> orddet= new List<orderdetail>();
        public product product;       
        public ProductDescriptionLoading(product p,string name)
        {
            rname = name;
            orderdetail od = new orderdetail();
            orddet.Add(od);
            product = p;
        }
    }
}