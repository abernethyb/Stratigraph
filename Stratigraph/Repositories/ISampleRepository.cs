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
        List<Sample> GetSampleByStratigraphyId(int stratigraphyId);
        List<Sample> GetSampleByStructureId(int structureId);
        void LinkStratigraphy(int sampleId, int stratigraphyId);
        List<Sample> SearchSampleByRoomNumberViaReport(int reportId, int roomNumber);
        void UnLinkStratigraphy(int sampleId);
        void Update(Sample sample);
    }
}