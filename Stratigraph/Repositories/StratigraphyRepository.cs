using Microsoft.Extensions.Configuration;
using Stratigraph.Models;
using Stratigraph.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Repositories
{
    public class StratigraphyRepository : BaseRepository, IStratigraphyRepository
    {
        public StratigraphyRepository(IConfiguration configuration) : base(configuration) { }

        public Stratigraphy GetStratigraphyById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, UserProfileId, ReportId, CreateDate, Notes FROM Stratigraphy
                                        WHERE Id = @Id;";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    var reader = cmd.ExecuteReader();


                    Stratigraphy stratigraphy = null;
                    if (reader.Read())
                    {
                        stratigraphy = new Stratigraphy()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            ReportId = DbUtils.GetInt(reader, "ReportId"),
                            CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        };
                    }

                    reader.Close();

                    return stratigraphy;
                }
            }
        }
        public void AddStratigraphyAndAddToSample(Stratigraphy stratigraphy)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Stratigraphy (UserProfileId, ReportId, CreateDate, Notes)
                        OUTPUT INSERTED.ID
                        VALUES (@UserProfileId, @ReportId, @CreateDate, @Notes)";

                    DbUtils.AddParameter(cmd, "@UserProfileId", stratigraphy.UserProfileId);
                    DbUtils.AddParameter(cmd, "@ReportId", stratigraphy.ReportId);
                    DbUtils.AddParameter(cmd, "@CreateDate", stratigraphy.CreateDate);
                    DbUtils.AddParameter(cmd, "@Notes", stratigraphy.Notes);

                    stratigraphy.Id = (int)cmd.ExecuteScalar();

                    cmd.CommandText = @"
                                    UPDATE Sample
                                    SET StratigraphyId = @StratigraphyId
                                    WHERE Id = @Id;
                                            ";
                    DbUtils.AddParameter(cmd, "@StratigraphyId", stratigraphy.Id);
                    DbUtils.AddParameter(cmd, "@Id", stratigraphy.InitialSampleId);
                    cmd.ExecuteScalar();

                }
            }
        }


        public void Update(Stratigraphy stratigraphy)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Stratigraphy
                        SET UserProfileId = @UserProfileId,
                            ReportId = @ReportId,
                            CreateDate = @CreateDate,
                            Notes = @Notes
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@UserProfileId", stratigraphy.UserProfileId);
                    DbUtils.AddParameter(cmd, "@ReportId", stratigraphy.ReportId);
                    DbUtils.AddParameter(cmd, "@CreateDate", stratigraphy.CreateDate);
                    DbUtils.AddParameter(cmd, "@Notes", stratigraphy.Notes);
                    DbUtils.AddParameter(cmd, "@Id", stratigraphy.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
