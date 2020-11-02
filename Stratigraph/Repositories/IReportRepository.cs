using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface IReportRepository
    {
        void Add(Report report);
        Report GetReportsById(int Id);
        List<Report> GetReportsByUserId(int userId);
        UserProfileReport GetUserProfileReportById(int reportId, int userProfileId);
        void MarkAsComplete(int reportId);
        void Update(Report report);
    }
}