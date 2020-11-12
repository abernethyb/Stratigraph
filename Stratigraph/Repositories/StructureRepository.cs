using Microsoft.Extensions.Configuration;
using Stratigraph.Models;
using Stratigraph.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Repositories
{
    public class StructureRepository : BaseRepository, IStructureRepository
    {
        public StructureRepository(IConfiguration configuration) : base(configuration) { }

        public List<Structure> GetStructureByReportId(int ReportId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, ReportId, Name, Image, Location, YearCunstructed FROM Structure
                                        WHERE ReportId = @ReportId;";

                    DbUtils.AddParameter(cmd, "@ReportId", ReportId);

                    var reader = cmd.ExecuteReader();

                    var structures = new List<Structure>();
                    while (reader.Read())
                    {
                        structures.Add(new Structure()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ReportId = DbUtils.GetInt(reader, "ReportId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Image = DbUtils.GetString(reader, "Image"),
                            Location = DbUtils.GetString(reader, "Location"),
                            YearCunstructed = DbUtils.GetNullableInt(reader, "YearCunstructed")
                        });
                    }

                    reader.Close();

                    return structures;
                }
            }
        }

        public Structure GetStructureById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, ReportId, Name, Image, Location, YearCunstructed FROM Structure
                                        WHERE Id = @Id;";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    var reader = cmd.ExecuteReader();


                    Structure structure = null;
                    if (reader.Read())
                    {
                        structure = new Structure()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ReportId = DbUtils.GetInt(reader, "ReportId"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Image = DbUtils.GetString(reader, "Image"),
                            Location = DbUtils.GetString(reader, "Location"),
                            YearCunstructed = DbUtils.GetNullableInt(reader, "YearCunstructed")
                        };
                    }

                    reader.Close();

                    return structure;
                }
            }
        }
        public void Add(Structure structure)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Structure (ReportId, Name, Image, Location, YearCunstructed)
                        OUTPUT INSERTED.ID
                        VALUES (@ReportId, @Name, @Image, @Location, @YearCunstructed)";

                    DbUtils.AddParameter(cmd, "@ReportId", structure.ReportId);
                    DbUtils.AddParameter(cmd, "@Name", structure.Name);
                    DbUtils.AddParameter(cmd, "@Image", structure.Image);
                    DbUtils.AddParameter(cmd, "@Location", structure.Location);
                    DbUtils.AddParameter(cmd, "@YearCunstructed", structure.YearCunstructed);

                    structure.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void Update(Structure structure)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Structure
                        SET ReportId = @ReportId,
                            Name = @Name,
                            Image = @Image,
                            Location = @Location,
                            YearCunstructed = @YearCunstructed
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@ReportId", structure.ReportId);
                    DbUtils.AddParameter(cmd, "@Name", structure.Name);
                    DbUtils.AddParameter(cmd, "@Image", structure.Image);
                    DbUtils.AddParameter(cmd, "@Location", structure.Location);
                    DbUtils.AddParameter(cmd, "@YearCunstructed", structure.YearCunstructed);
                    DbUtils.AddParameter(cmd, "@Id", structure.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteStructure(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Sample
                                        SET StructureId = NULL
                                        WHERE StructureId = @id
                                        DELETE FROM Structure 
                                        WHERE Id = @id;";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
