namespace NewsAPI.Services
{
    public interface ICollectionService<Announcement>       
    {
        Task<List<Announcement>> GetAll();

        Task<Announcement> Get(Guid id);

        Task<bool> Create(Announcement model);

        Task<bool> Update(Guid id, Announcement model);

        Task<bool> Delete(Guid id);

    }
}
