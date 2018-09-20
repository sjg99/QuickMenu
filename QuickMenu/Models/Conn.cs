using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace QuickMenu.Models
{
    public class Conn
    {        
        public string ConfConn(string name)
        {
            Configuration conf = WebConfigurationManager.OpenWebConfiguration("~");
            ConnectionStringsSection confsetting = (ConnectionStringsSection)conf.GetSection("connectionStrings");
            confsetting.ConnectionStrings["quickmenusubEntities"].ConnectionString = confsetting.ConnectionStrings["quickmenusubEntities"].ConnectionString.ToString().Replace("quickmenusub", name.ToLower());
            return confsetting.ConnectionStrings["quickmenusubEntities"].ConnectionString;
        }      
    }
}