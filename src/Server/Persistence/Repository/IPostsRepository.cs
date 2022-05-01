namespace Server.Persistence.Repository;

internal interface IPostsRepository
{
    Task<List<Post>> AllPostsAsync();

    Task<Post?> PostByIdAsync(int id);
}