namespace Server.Extensions;

internal static class ConfigurationExtensions
{
    public static string DatabaseConnection(this IConfiguration configuration) => configuration["ConnectionString"];
}