using static Microsoft.AspNetCore.Http.Results;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplication(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/posts", async (IPostsRepository repository) =>
{
    var posts = await repository.AllPostsAsync();
    return posts.Select(p => p.AsPostToRead());
});

app.MapGet("/posts/{id:int}", async (IPostsRepository repository, int id) =>
   {
       var post = await repository.PostByIdAsync(id);
       return post is not null
           ? Ok(post.AsPostToRead())
           : NotFound();
   })
   .Produces(200)
   .Produces(404);

app.Run();