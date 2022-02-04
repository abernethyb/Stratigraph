using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface IFinishPeriodRepository
    {
        void Add(FinishPeriod finishPeriod);
        void DeleteFinishPeriod(int id);
        FinishPeriod GetFinishPeriodById(int Id);
        List<FinishPeriod> GetFinishPeriodByStructureId(int structureId);
        void Update(FinishPeriod finishPeriod);
    }
}