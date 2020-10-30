using Microsoft.Extensions.Configuration;
using Stratigraph.Models;
using Stratigraph.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Stratigraph.Repositories
{
    public class LayerRepository : BaseRepository, ILayerRepository
    {
        public LayerRepository(IConfiguration configuration) : base(configuration) { }

        public List<Layer> GetLayerByStratigraphyId(int stratigraphyId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, StratigraphyId, FinishPeriod, 
                                        BeginDate, EndDate, Pigments, Colors, 
                                        Medium, Gloss, Notes 
                                        FROM Layer
                                        WHERE StratigraphyId = @stratigraphyId;";

                    DbUtils.AddParameter(cmd, "@stratigraphyId", stratigraphyId);

                    var reader = cmd.ExecuteReader();

                    var layers = new List<Layer>();
                    while (reader.Read())
                    {
                        layers.Add(new Layer()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StratigraphyId = DbUtils.GetInt(reader, "StratigraphyId"),
                            FinishPeriod = DbUtils.GetString(reader, "FinishPeriod"),
                            BeginDate = DbUtils.GetNullableDateTime(reader, "BeginDate"),
                            EndDate = DbUtils.GetNullableDateTime(reader, "EndDate"),
                            Pigments = DbUtils.GetString(reader, "Pigments"),
                            Colors = DbUtils.GetString(reader, "Colors"),
                            Medium = DbUtils.GetString(reader, "Medium"),
                            Gloss = DbUtils.GetString(reader, "Gloss"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        });
                    }

                    reader.Close();

                    return layers;
                }
            }
        }



        public Layer GetLayerById(int Id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, StratigraphyId, FinishPeriod, 
                                        BeginDate, EndDate, Pigments, Colors, 
                                        Medium, Gloss, Notes 
                                        FROM Layer
                                        WHERE Id = @Id;";

                    DbUtils.AddParameter(cmd, "@Id", Id);

                    var reader = cmd.ExecuteReader();


                    Layer layer = null;
                    if (reader.Read())
                    {
                        layer = new Layer()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StratigraphyId = DbUtils.GetInt(reader, "StratigraphyId"),
                            FinishPeriod = DbUtils.GetString(reader, "FinishPeriod"),
                            BeginDate = DbUtils.GetNullableDateTime(reader, "BeginDate"),
                            EndDate = DbUtils.GetNullableDateTime(reader, "EndDate"),
                            Pigments = DbUtils.GetString(reader, "Pigments"),
                            Colors = DbUtils.GetString(reader, "Colors"),
                            Medium = DbUtils.GetString(reader, "Medium"),
                            Gloss = DbUtils.GetString(reader, "Gloss"),
                            Notes = DbUtils.GetString(reader, "Notes")
                        };
                    }

                    reader.Close();

                    return layer;
                }
            }
        }
        public void Add(Layer layer)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Layer (StratigraphyId, FinishPeriod, BeginDate, EndDate, Pigments, Colors, Medium, Gloss, Notes)
                        OUTPUT INSERTED.ID
                        VALUES (@StratigraphyId, @FinishPeriod, @BeginDate, @EndDate, @Pigments, @Colors, @Medium, @Gloss, @Notes)";

                    DbUtils.AddParameter(cmd, "@StratigraphyId", layer.StratigraphyId);
                    DbUtils.AddParameter(cmd, "@FinishPeriod", layer.FinishPeriod);
                    DbUtils.AddParameter(cmd, "@BeginDate", layer.BeginDate);
                    DbUtils.AddParameter(cmd, "@EndDate", layer.EndDate);
                    DbUtils.AddParameter(cmd, "@Pigments", layer.Pigments);
                    DbUtils.AddParameter(cmd, "@Colors", layer.Colors);
                    DbUtils.AddParameter(cmd, "@Medium", layer.Medium);
                    DbUtils.AddParameter(cmd, "@Gloss", layer.Gloss);
                    DbUtils.AddParameter(cmd, "@Notes", layer.Notes);

                    layer.Id = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void Update(Layer layer)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Layer
                        SET FinishPeriod = @FinishPeriod,
                            BeginDate = @BeginDate,
                            EndDate = @EndDate,
                            Pigments = @Pigments,
                            Colors = @Colors,
                            Medium = @Medium,
                            Gloss = @Gloss,
                            Notes = @Notes
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@FinishPeriod", layer.FinishPeriod);
                    DbUtils.AddParameter(cmd, "@BeginDate", layer.BeginDate);
                    DbUtils.AddParameter(cmd, "@EndDate", layer.EndDate);
                    DbUtils.AddParameter(cmd, "@Pigments", layer.Pigments);
                    DbUtils.AddParameter(cmd, "@Colors", layer.Colors);
                    DbUtils.AddParameter(cmd, "@Medium", layer.Medium);
                    DbUtils.AddParameter(cmd, "@Gloss", layer.Gloss);
                    DbUtils.AddParameter(cmd, "@Notes", layer.Notes);
                    DbUtils.AddParameter(cmd, "@Id", layer.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteLayer(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM Layer
                                        WHERE Id = @id;";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
