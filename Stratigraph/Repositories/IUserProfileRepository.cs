using Stratigraph.Models;

namespace Stratigraph.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseId(string FirebaseId);
    }
}