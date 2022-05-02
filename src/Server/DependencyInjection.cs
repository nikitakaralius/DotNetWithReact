using Server.Extensions;

namespace Server;

internal static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("FrontendPolicy", builder =>
            {
                builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .WithOrigins("http://localhost:3000");
            });
        });
        
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddDbContext<ApplicationDbContext>(
            o => o.UseSqlServer(configuration.DatabaseConnection()));
        services.AddScoped<IPostsRepository, PostsRepository>();
        return services;
    }
}