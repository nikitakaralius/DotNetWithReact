namespace Server.Persistence;

internal sealed class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options) { }
    
    public DbSet<Post> Posts { get; init; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Entity<Post>()
            .Property(post => post.Title)
            .HasMaxLength(100);

        modelBuilder
            .Entity<Post>()
            .Property(post => post.Content)
            .HasMaxLength(1000);

        modelBuilder
            .Entity<Post>()
            .HasData(PostsToSeed());
    }
    
    private static Post[] PostsToSeed()
    {
        var posts = new Post[6];
        for (int i = 0; i < posts.Length; i++)
        {
            posts[i] = new Post
            {
                Id = i + 1,
                Title = $"Post {i + 1}",
                Content = $"This is post {i + 1} and it has a lot of useful content."
            };
        }

        return posts;
    }
}