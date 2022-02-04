using Microsoft.Extensions.Configuration;
using Stratigraph.Models;
using Stratigraph.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Repositories
{
    public class FinishPeriodRepository : BaseRepository, IFinishPeriodRepository
    {
        public FinishPeriodRepository(IConfiguration configuration) : base(configuration) { }

        public List<FinishPeriod> GetFinishPeriodByStructureId(int structureId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, StructureId, Name, StartYear, EndYear, OwnerName, Notes, UserProfileId 
                                        FROM FinishPeriod
                                        WHERE StructureId = @structureId;";

                    DbUtils.AddParameter(cmd, "@structureId", structureId);

                    var reader = cmd.ExecuteReader();

                    var finishPeriods = new List<FinishPeriod>();
                    while (reader.Read())
                    {
                        finishPeriods.Add(new FinishPeriod()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StructureId = DbUtils.GetInt(reader, "StructureId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            StartYear = DbUtils.GetNullableInt(reader, "StartYear"),
                            EndYear = DbUtils.GetNullableInt(reader, "EndYear"),
                            OwnerName = DbUtils.GetString(reader, "OwnerName"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        });
                    }

                    reader.Close();

                    return finishPeriods;
                }
            }
        }



        public FinishPeriod GetFinishPeriodById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, StructureId, Name, StartYear, EndYear, OwnerName, Notes, UserProfileId 
                                        FROM FinishPeriod
                                        WHERE Id = @Id;";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    var reader = cmd.ExecuteReader();


                    FinishPeriod finishPeriod = null;
                    if (reader.Read())
                    {
                        finishPeriod = new FinishPeriod()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StructureId = DbUtils.GetInt(reader, "StructureId"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            StartYear = DbUtils.GetNullableInt(reader, "StartYear"),
                            EndYear = DbUtils.GetNullableInt(reader, "EndYear"),
                            OwnerName = DbUtils.GetString(reader, "OwnerName"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        };
                    }

                    reader.Close();

                    return finishPeriod;
                }
            }
        }
        public void Add(FinishPeriod finishPeriod)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO FinishPeriod (StructureId, Name, StartYear, EndYear, OwnerName, Notes, UserProfileId)
                        OUTPUT INSERTED.ID
                        VALUES (@StructureId, @Name, @StartYear, @EndYear, @OwnerName, @Notes, @UserProfileId)";

                    DbUtils.AddParameter(cmd, "@StructureId", finishPeriod.StructureId);
                    DbUtils.AddParameter(cmd, "@FinishPeriod", finishPeriod.Name);
                    DbUtils.AddParameter(cmd, "@BeginDate", finishPeriod.StartYear);
                    DbUtils.AddParameter(cmd, "@EndDate", finishPeriod.EndYear);
                    DbUtils.AddParameter(cmd, "@Pigments", finishPeriod.OwnerName);
                    DbUtils.AddParameter(cmd, "@Colors", finishPeriod.Notes);
                    DbUtils.AddParameter(cmd, "@Colors", finishPeriod.UserProfileId);

                    finishPeriod.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void Update(FinishPeriod finishPeriod)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE FinishPeriod
                        SET StructureId = @StructureId,
                            Name = @Name,
                            StartYear = @StartYear,
                            EndYear = @EndYear,
                            OwnerName = @OwnerName,
                            Notes = @Notes,
                            UserProfileId = @UserProfileId
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@FinishPeriod", finishPeriod.StructureId);
                    DbUtils.AddParameter(cmd, "@BeginDate", finishPeriod.Name);
                    DbUtils.AddParameter(cmd, "@EndDate", finishPeriod.StartYear);
                    DbUtils.AddParameter(cmd, "@Pigments", finishPeriod.EndYear);
                    DbUtils.AddParameter(cmd, "@Colors", finishPeriod.OwnerName);
                    DbUtils.AddParameter(cmd, "@Medium", finishPeriod.Notes);
                    DbUtils.AddParameter(cmd, "@Gloss", finishPeriod.UserProfileId);
                    //DbUtils.AddParameter(cmd, "@Id", finishPeriod.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteFinishPeriod(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM FinishPeriod
                                        WHERE Id = @id;";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
