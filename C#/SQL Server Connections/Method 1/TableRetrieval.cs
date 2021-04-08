using System.Collections.Generic;
using System.Data;
using Dapper;
using System.Linq;
using System.Configuration;

namespace DatabaseRetrieval {
    class TableRetrieval<Model> {
        public static List<Model> DatabaseRetrieval(string ConnectionStringName, string Table, string Columns, string WhereStatement, string OrderByStatment){
            using (IDbConnection connection = new Microsoft.Data.SqlClient.SqlConnection(ConfigurationManager.ConnectionStrings[ConnectionStringName].ConnectionString)) {
                return connection.Query<Model>($"select "+Columns+" from "+Table+(WhereStatement.Length==0?"":" where "+WhereStatement)+(OrderByStatment.Length==0?"":" order by "+OrderByStatment)).ToList();
            };
        }
        public static List<Model> DatabaseRetrieval(string ConnectionStringName, string Table, string Columns, string WhereStatement) {
            return DatabaseRetrieval(ConnectionStringName, Table, Columns, WhereStatement, "");
        }
        public static List<Model> DatabaseRetrieval(string ConnectionStringName, string Table, string Columns) {
            return DatabaseRetrieval(ConnectionStringName, Table, Columns, "", "");
        }
        public static List<Model> DatabaseRetrieval(string ConnectionStringName, string Table) {
            return DatabaseRetrieval(ConnectionStringName, Table, "*", "", "");
        }
    }
}
