﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Server.Persistence;

#nullable disable

namespace Server.Persistence.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220430191138_InitialMigration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Server.Models.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Posts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Content = "This is post 1 and it has a lot of useful content.",
                            Title = "Post 1"
                        },
                        new
                        {
                            Id = 2,
                            Content = "This is post 2 and it has a lot of useful content.",
                            Title = "Post 2"
                        },
                        new
                        {
                            Id = 3,
                            Content = "This is post 3 and it has a lot of useful content.",
                            Title = "Post 3"
                        },
                        new
                        {
                            Id = 4,
                            Content = "This is post 4 and it has a lot of useful content.",
                            Title = "Post 4"
                        },
                        new
                        {
                            Id = 5,
                            Content = "This is post 5 and it has a lot of useful content.",
                            Title = "Post 5"
                        },
                        new
                        {
                            Id = 6,
                            Content = "This is post 6 and it has a lot of useful content.",
                            Title = "Post 6"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
