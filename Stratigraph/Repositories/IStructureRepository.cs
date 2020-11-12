using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface IStructureRepository
    {
        void Add(Structure structure);
        void DeleteStructure(int id);
        Structure GetStructureById(int Id);
        List<Structure> GetStructureByReportId(int ReportId);
        void Update(Structure structure);
    }
}