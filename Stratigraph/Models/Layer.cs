using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

/*
 * [Id] integer PRIMARY KEY IDENTITY,
  [StratigraphyId] integer NOT NULL,
  [FinishPeriod] nvarchar(50),
  [BeginDate] datetime,
  [EndDate] datetime,
  [Pigments] nvarchar(255),
  [Colors] nvarchar(255),
  [Medium] nvarchar(50),
  [Gloss] nvarchar(50),
  [Notes] nvarchar(555)
 */

namespace Stratigraph.Models
{
    public class Layer
    {
        public int Id { get; set; }

        [Required]
        public int StratigraphyId { get; set; }

        [MaxLength(50)]
        public string FinishPeriod { get; set; }
        public DateTime? BeginDate { get; set; }
        public DateTime? EndDate { get; set; }

        [MaxLength(255)]
        public string Pigments { get; set; }

        [MaxLength(255)]
        public string Colors { get; set; }

        [MaxLength(50)]
        public string Medium { get; set; }

        [MaxLength(50)]
        public string Gloss { get; set; }

        [MaxLength(555)]
        public string Notes { get; set; }

        public int StratigraphyReportId { get; set; }

    }
}
