using System.Configuration;

namespace WinFormsApp1.Model {
    public static class Helper {
        public static string CnnVal(string name) {
            return ConfigurationManager.ConnectionStrings[name].ConnectionString;
        }
    }
}
