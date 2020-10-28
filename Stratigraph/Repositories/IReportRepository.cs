using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface IReportRepository
    {
        void Add(Report report);
        List<Report> GetReportsByUserId(int userId);
        void MarkAsComplete(Report report);
        void Update(Report report);
    }
}