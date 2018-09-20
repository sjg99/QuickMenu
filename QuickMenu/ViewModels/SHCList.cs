using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickMenu.ViewModels
{
    public class SHCList
    {
        public static List<Models.orderdetail> list = new List<Models.orderdetail>();
        public void addi(Models.orderdetail od)
        {
            list.Add(od);
        }
    }
}