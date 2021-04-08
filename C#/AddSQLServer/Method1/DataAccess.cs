using System.Collections.Generic;
using System.Data;
using WinFormsApp1.Model;
using WinFormsApp1.Models;
using Dapper;
using System.Linq;

namespace WinFormsApp1 {
    public class DataAccess {
        public List<Ships> GetShips() {
            using (IDbConnection connection = new Microsoft.Data.SqlClient.SqlConnection(Helper.CnnVal("ShipDB"))) {
                return connection.Query<Ships>($"select * from ShipDbs").ToList();
            }
        }
    }
}
