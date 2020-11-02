using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

/*
 * [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(255) NOT NULL,
  [UserProfileId] integer NOT NULL,
  [StratigraphyId] integer,
  [StructureId] integer NOT NULL,
  [DateTaken] datetime,
  [Image] nvarchar(255) NOT NULL,
  [LocationDescription] nvarchar(255),
  [RoomNumber] integer NOT NULL
 */

namespace Stratigraph.Models
{
    public class Sample
    {
        public int Id { get; set; }

        [MaxLength(255)]
        [Required]
        public string Name { get; set; }

        [Required]
        public int UserProfileId { get; set; }
        public int? StratigraphyId { get; set; }

        [Required]
        public int StructureId { get; set; }
        public DateTime DateTaken { get; set; }

        [Required]
        [MaxLength(4000)]
        public string Image { get; set; }

        [MaxLength(255)]
        public string LocationDescription { get; set; }

        [Required]
        public int RoomNumber { get; set; }

        public string StructureName { get; set; }

        public int StructureReportId { get; set; }

    }
}
