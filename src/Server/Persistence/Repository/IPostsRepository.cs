namespace Server.Persistence.Repository;

internal interface IPostsRepository
{
    Task<List<Post>> AllPostsAsync();
}