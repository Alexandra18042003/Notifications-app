using NewsAPI.Models;

namespace NewsAPI.Services
{
    public interface IAnnouncementCollectionService : ICollectionService<Announcement>
    {
        Task<List<Announcement>> GetAnnouncementsByCategoryId(string categoryId);
    }
}
