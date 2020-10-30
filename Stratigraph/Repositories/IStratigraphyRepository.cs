using Stratigraph.Models;

namespace Stratigraph.Repositories
{
    public interface IStratigraphyRepository
    {
        void Add(Stratigraphy stratigraphy);
        Stratigraphy GetStratigraphyById(int Id);
        void Update(Stratigraphy stratigraphy);
    }
}