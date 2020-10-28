using Microsoft.Extensions.Configuration;
using Stratigraph.Models;
using Stratigraph.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Repositories
{
    public class ReportRepository : BaseRepository, IReportRepository
    {
        public ReportRepository(IConfiguration configuration) : base(configuration) { }

        public List<Report> GetReportsByUserId(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT r.Id, r.Name, r.CreateDate, r.CompleteDate FROM UserProfileReport ur
                                        LEFT JOIN Report r on ur.ReportId = r.Id
                                        WHERE ur.UserProfileId = @userId;";

                    DbUtils.AddParameter(cmd, "@userId", userId);

                    var reader = cmd.ExecuteReader();

                    var reports = new List<Report>();
                    while (reader.Read())
                    {
                        reports.Add(new Report()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                            CompleteDate = DbUtils.GetNullableDateTime(reader, "CompleteDate")
                        });
                    }

                    reader.Close();

                    return reports;
                }
            }
        }

        public void Add(Report report)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Report (Name, CreateDate, CompleteDate)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, GETDATE(), NULL)";

                    DbUtils.AddParameter(cmd, "@Title", report.Name);

                    report.Id = (int)cmd.ExecuteScalar();

                    cmd.CommandText = @"
                        INSERT INTO UserProfileReport (UserProfileId, ReportId)
                        OUTPUT INSERTED.ID
                        VALUES (@UserProfileId, @ReportId)";

                    DbUtils.AddParameter(cmd, "@UserProfileId", report.CreatingUserProfileId);
                    DbUtils.AddParameter(cmd, "@ReportId", report.Id);
                }
            }
        }

        public void Update(Report report)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Report
                        SET Name = '@Name'
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Name", report.Name);
                    DbUtils.AddParameter(cmd, "@Id", report.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void MarkAsComplete(Report report)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Report
                        SET CompleteDate = GETDATE()
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", report.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
