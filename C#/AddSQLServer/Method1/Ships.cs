using System.ComponentModel.DataAnnotations;

namespace WinFormsApp1.Models {
    public class Ships {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ShipName { get; set; }
        public double Weight { get; set; }

        public int HardPoints { get; set; }

        public char Type { get; set; }

        public char Class { get; set; }

        public string AllInfo {
            get { return Id+":"+ ShipName+" " + Weight + " " + HardPoints + " " + Type + " " + Class; }
        }
    }
}
