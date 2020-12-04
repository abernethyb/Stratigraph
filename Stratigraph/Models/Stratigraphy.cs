using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
/*
 * [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer NOT NULL,
  [ReportId] integer NOT NULL,
  [CreateDate] datetime NOT NULL,
  [Notes] nvarchar(500)
 */
namespace Stratigraph.Models
{
    public class Stratigraphy
    {
        public int Id { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        [Required]
        public int ReportId { get; set; }
        
        [Required]
        public DateTime CreateDate { get; set; }

        [MaxLength(4000)]
        public string Notes { get; set; }

        public int InitialSampleId { get; set; }
    }
}
