using Server.Models.External;

namespace Server.Models.Mappings;

internal static class PostMappings
{
    public static Post AsPost(this PostToCreate post) =>
        new()
        {
            Id = 0,
            Title = post.Title,
            Content = post.Content
        };

    public static PostToRead AsPostToRead(this Post post) =>
        new()
        {
            Id = post.Id,
            Title = post.Title,
            Content = post.Content
        };
}