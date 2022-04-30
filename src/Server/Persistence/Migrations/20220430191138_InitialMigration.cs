using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Persistence.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Content = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "Id", "Content", "Title" },
                values: new object[,]
                {
                    { 1, "This is post 1 and it has a lot of useful content.", "Post 1" },
                    { 2, "This is post 2 and it has a lot of useful content.", "Post 2" },
                    { 3, "This is post 3 and it has a lot of useful content.", "Post 3" },
                    { 4, "This is post 4 and it has a lot of useful content.", "Post 4" },
                    { 5, "This is post 5 and it has a lot of useful content.", "Post 5" },
                    { 6, "This is post 6 and it has a lot of useful content.", "Post 6" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
