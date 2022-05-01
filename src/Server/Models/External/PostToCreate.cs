namespace Server.Models.External;

internal sealed class PostToCreate
{
    public string Title { get; init; } = string.Empty;

    public string Content { get; init; } = string.Empty;
}