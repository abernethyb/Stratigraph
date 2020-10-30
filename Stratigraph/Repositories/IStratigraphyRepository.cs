using Stratigraph.Models;

namespace Stratigraph.Repositories
{
    public interface IStratigraphyRepository
    {
        void AddStratigraphyAndAddToSample(Stratigraphy stratigraphy, int sampleId);
        Stratigraphy GetStratigraphyById(int Id);
        void Update(Stratigraphy stratigraphy);
    }
}