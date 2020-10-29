using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface IStructureRepository
    {
        void Add(Structure structure);
        Structure GetStructureById(int Id);
        List<Structure> GetStructureByReportId(int ReportId);
        void Update(Structure structure);
    }
}