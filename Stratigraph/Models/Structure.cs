using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

/*
 * [Id] integer PRIMARY KEY IDENTITY,
  [ReportId] integer NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Image] nvarchar(255),
  [Location] nvarchar(255),
  [YearCunstructed] integer
 */

namespace Stratigraph.Models
{
    public class Structure
    {
        public int Id { get; set; }

        [Required]
        public int ReportId { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        [MaxLength(4000)]
        public string Image { get; set; }

        [MaxLength(255)]
        public string Location { get; set; }
        public int YearCunstructed { get; set; }
    }
}
