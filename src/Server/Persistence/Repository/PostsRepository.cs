namespace Server.Persistence.Repository;

internal sealed class PostsRepository : IPostsRepository
{
    private readonly ApplicationDbContext _db;

    public PostsRepository(ApplicationDbContext db) => _db = db;

    public async Task<List<Post>> AllPostsAsync() => await _db.Posts.ToListAsync();

    public async Task<Post?> PostByIdAsync(int id) => await _db.Posts.FirstOrDefaultAsync(p => p.Id == id);

    public async Task CreatePostAsync(Post post) => await _db.Posts.AddAsync(post);

    public async Task DeletePostByIdAsync(int id)
    {
        var post = await _db.Posts.FirstOrDefaultAsync(p => p.Id == id);
        if (post is null)
            return;
        _db.Posts.Remove(post);
    }

    public async Task SaveChangesAsync() => await _db.SaveChangesAsync();
}