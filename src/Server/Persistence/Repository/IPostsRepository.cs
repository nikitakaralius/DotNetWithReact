namespace Server.Persistence.Repository;

internal interface IPostsRepository
{
    Task<List<Post>> AllPostsAsync();

    Task<Post?> PostByIdAsync(int id);

    Task CreatePostAsync(Post post);

    void UpdatePost(Post post);

    Task DeletePostByIdAsync(int id);

    Task SaveChangesAsync();
}