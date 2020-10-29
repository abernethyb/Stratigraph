﻿using Microsoft.Extensions.Configuration;
using Stratigraph.Models;
using Stratigraph.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Repositories
{
    public class SampleRepository : BaseRepository, ISampleRepository
    {
        public SampleRepository(IConfiguration configuration) : base(configuration) { }

        public List<Sample> GetSampleByStructureId(int structureId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber FROM Sample
                                        WHERE StructureId = @structureId;";

                    DbUtils.AddParameter(cmd, "@structureId", structureId);

                    var reader = cmd.ExecuteReader();

                    var samples = new List<Sample>();
                    while (reader.Read())
                    {
                        samples.Add(new Sample()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            StratigraphyId = DbUtils.GetNullableInt(reader, "StratigraphyId"),
                            StructureId = DbUtils.GetInt(reader, "StructureId"),
                            DateTaken = DbUtils.GetDateTime(reader, "DateTaken"),
                            Image = DbUtils.GetString(reader, "Image"),
                            LocationDescription = DbUtils.GetString(reader, "LocationDescription"),
                            RoomNumber = DbUtils.GetInt(reader, "RoomNumber")
                        });
                    }

                    reader.Close();

                    return samples;
                }
            }
        }

        public Sample GetSampleById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber FROM Sample
                                        WHERE Id = @Id;";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    var reader = cmd.ExecuteReader();


                    Sample sample = null;
                    if (reader.Read())
                    {
                        sample = new Sample()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            StratigraphyId = DbUtils.GetNullableInt(reader, "StratigraphyId"),
                            StructureId = DbUtils.GetInt(reader, "StructureId"),
                            DateTaken = DbUtils.GetDateTime(reader, "DateTaken"),
                            Image = DbUtils.GetString(reader, "Image"),
                            LocationDescription = DbUtils.GetString(reader, "LocationDescription"),
                            RoomNumber = DbUtils.GetInt(reader, "RoomNumber")
                        };
                    }

                    reader.Close();

                    return sample;
                }
            }
        }
        public void Add(Sample sample)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Sample (Name, UserProfileId, StratigraphyId, StructureId, DateTaken, Image, LocationDescription, RoomNumber)
                        OUTPUT INSERTED.ID
                        VALUES (@Name, @UserProfileId, @StratigraphyId, @StructureId, @DateTaken, @Image, @LocationDescription, @RoomNumber)";

                    DbUtils.AddParameter(cmd, "@Name", sample.Name);
                    DbUtils.AddParameter(cmd, "@UserProfileId", sample.UserProfileId);
                    DbUtils.AddParameter(cmd, "@StratigraphyId", sample.StratigraphyId);
                    DbUtils.AddParameter(cmd, "@StructureId", sample.StructureId);
                    DbUtils.AddParameter(cmd, "@DateTaken", sample.DateTaken);
                    DbUtils.AddParameter(cmd, "@Image", sample.Image);
                    DbUtils.AddParameter(cmd, "@LocationDescription", sample.LocationDescription);
                    DbUtils.AddParameter(cmd, "@RoomNumber", sample.RoomNumber);

                    sample.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void Update(Sample sample)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Structure
                        SET Name = @Name,
                            UserProfileId = @UserProfileId,
                            StratigraphyId = @StratigraphyId,
                            StructureId = @StructureId,
                            DateTaken = @DateTaken
                            Image = @Image
                            LocationDescription = @LocationDescription
                            RoomNumber = @RoomNumber
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Name", sample.Name);
                    DbUtils.AddParameter(cmd, "@UserProfileId", sample.UserProfileId);
                    DbUtils.AddParameter(cmd, "@StratigraphyId", sample.StratigraphyId);
                    DbUtils.AddParameter(cmd, "@StructureId", sample.StructureId);
                    DbUtils.AddParameter(cmd, "@DateTaken", sample.DateTaken);
                    DbUtils.AddParameter(cmd, "@Image", sample.Image);
                    DbUtils.AddParameter(cmd, "@LocationDescription", sample.LocationDescription);
                    DbUtils.AddParameter(cmd, "@RoomNumber", sample.RoomNumber);
                    DbUtils.AddParameter(cmd, "@Id", sample.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteSample(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM Sample
                                        WHERE Id = @id;";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
