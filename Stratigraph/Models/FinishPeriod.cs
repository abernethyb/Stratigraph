using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


/*
 [Id] integer PRIMARY KEY IDENTITY,
  [UserProfileId] integer NOT NULL,
  [StructureId] integer,
  [Name] nvarchar(255),
  [StartYear] integer,
  [EndYear] integer,
  [OwnerName] nvarchar(255),
  [Notes] nvarchar(MAX)
 */


namespace Stratigraph.Models
{
    public class FinishPeriod
    {
        public int Id { get; set; }

        public int UserProfileId { get; set; }

        public int StructureId { get; set; }

        public string Name { get; set; }

        public int StartYear { get; set; }

        public int EndYear { get; set; }

        public string OwnerName { get; set; }

        public string Notes { get; set; }

    }
}
