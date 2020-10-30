using Stratigraph.Models;
using System.Collections.Generic;

namespace Stratigraph.Repositories
{
    public interface ILayerRepository
    {
        void Add(Layer layer);
        void DeleteLayer(int id);
        Layer GetLayerById(int Id);
        List<Layer> GetLayerByStratigraphyId(int stratigraphyId);
        void Update(Layer layer);
    }
}