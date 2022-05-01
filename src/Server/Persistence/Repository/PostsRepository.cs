namespace Server.Persistence.Repository;

internal sealed class PostsRepository : IPostsRepository
{
    private readonly ApplicationDbContext _db;

    public PostsRepository(ApplicationDbContext db) => _db = db;

    public Task<List<Post>> AllPostsAsync() => _db.Posts.ToListAsync();
}