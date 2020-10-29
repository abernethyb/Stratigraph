using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface ISampleRepository
    {
        void Add(Sample sample);
        void DeleteSample(int id);
        Sample GetSampleById(int Id);
        List<Sample> GetSampleByReportId(int reportId);
        List<Sample> GetSampleByStructureId(int structureId);
        void Update(Sample sample);
    }
}