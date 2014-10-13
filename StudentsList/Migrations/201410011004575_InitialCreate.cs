namespace StudentsList.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Groups",
                c => new
                    {
                        id = c.Long(nullable: false, identity: true),
                        name = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        id = c.Long(nullable: false, identity: true),
                        firstName = c.String(),
                        lastName = c.String(),
                        secondName = c.String(),
                        sex = c.Boolean(nullable: false),
                        birthDate = c.DateTime(nullable: false),
                        incomDate = c.DateTime(nullable: false),
                        Group_id = c.Long(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Groups", t => t.Group_id)
                .Index(t => t.Group_id);
            
            CreateTable(
                "dbo.Subjects",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        hours = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.Visits",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        date = c.DateTime(nullable: false),
                        isAbson = c.Boolean(nullable: false),
                        Subject_id = c.Int(),
                        Student_id = c.Long(),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Subjects", t => t.Subject_id)
                .ForeignKey("dbo.Students", t => t.Student_id)
                .Index(t => t.Subject_id)
                .Index(t => t.Student_id);
            
            CreateTable(
                "dbo.SubjectStudents",
                c => new
                    {
                        Subject_id = c.Int(nullable: false),
                        Student_id = c.Long(nullable: false),
                    })
                .PrimaryKey(t => new { t.Subject_id, t.Student_id })
                .ForeignKey("dbo.Subjects", t => t.Subject_id, cascadeDelete: true)
                .ForeignKey("dbo.Students", t => t.Student_id, cascadeDelete: true)
                .Index(t => t.Subject_id)
                .Index(t => t.Student_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Students", "Group_id", "dbo.Groups");
            DropForeignKey("dbo.Visits", "Student_id", "dbo.Students");
            DropForeignKey("dbo.Visits", "Subject_id", "dbo.Subjects");
            DropForeignKey("dbo.SubjectStudents", "Student_id", "dbo.Students");
            DropForeignKey("dbo.SubjectStudents", "Subject_id", "dbo.Subjects");
            DropIndex("dbo.SubjectStudents", new[] { "Student_id" });
            DropIndex("dbo.SubjectStudents", new[] { "Subject_id" });
            DropIndex("dbo.Visits", new[] { "Student_id" });
            DropIndex("dbo.Visits", new[] { "Subject_id" });
            DropIndex("dbo.Students", new[] { "Group_id" });
            DropTable("dbo.SubjectStudents");
            DropTable("dbo.Visits");
            DropTable("dbo.Subjects");
            DropTable("dbo.Students");
            DropTable("dbo.Groups");
        }
    }
}
