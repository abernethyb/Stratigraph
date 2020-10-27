using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
/*
 * [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer NOT NULL,
  [ReportId] integer NOT NULL
 */
namespace Stratigraph.Models
{
    public class UserProfileReport
    {
        public int Id { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        [Required]
        public int ReportId { get; set; }

    }
}
