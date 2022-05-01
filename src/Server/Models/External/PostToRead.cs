namespace Server.Models.External;

internal sealed class PostToRead
{
    public int Id { get; init; }

    public string Title { get; init; } = string.Empty;

    public string Content { get; init; } = string.Empty;
}