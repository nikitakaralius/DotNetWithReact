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
   .WithName("postById")
   .Produces(200)
   .Produces(404);

app.MapPost("/posts", async (IPostsRepository repository, PostToCreate postToCreate) =>
   {
       var post = postToCreate.AsPost();
       await repository.CreatePostAsync(post);
       await repository.SaveChangesAsync();
       var postToRead = post.AsPostToRead();
       return CreatedAtRoute("postById", new {id = postToRead.Id}, postToRead);
   })
   .Produces(201)
   .Produces(400);

app.MapPut("/posts", async (IPostsRepository postsRepository, PostToRead postToRead) =>
   {
       postsRepository.UpdatePost(postToRead.AsPost());
       await postsRepository.SaveChangesAsync();
       return NoContent();
   })
   .Produces(204);

app.MapDelete("/posts/{id:int}", async (IPostsRepository repository, int id) =>
   {
       await repository.DeletePostByIdAsync(id);
       await repository.SaveChangesAsync();
       return NoContent();
   })
   .Produces(204);

app.Run();