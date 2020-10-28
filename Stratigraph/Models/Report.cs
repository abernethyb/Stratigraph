using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

//Id, Name, CreateDate, CompleteDate

namespace Stratigraph.Models
{
    public class Report
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        [Required]
        public DateTime CreateDate { get; set; }

        public DateTime CompleteDate { get; set; }

        [Required]
        public int CreatingUserProfileId { get; set; }
    }
}
