namespace StudentsList.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class renameColumns : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.Students", new[] { "Group_Id" });
            DropIndex("dbo.Visits", new[] { "VisitSubject_Id" });
            DropIndex("dbo.Visits", new[] { "Student_Id" });
            DropIndex("dbo.SubjectStudents", new[] { "Subject_Id" });
            DropIndex("dbo.SubjectStudents", new[] { "Student_Id" });
            CreateIndex("dbo.Students", "Group_id");
            CreateIndex("dbo.Visits", "visitSubject_id");
            CreateIndex("dbo.Visits", "Student_id");
            CreateIndex("dbo.SubjectStudents", "Subject_id");
            CreateIndex("dbo.SubjectStudents", "Student_id");
        }
        
        public override void Down()
        {
            DropIndex("dbo.SubjectStudents", new[] { "Student_id" });
            DropIndex("dbo.SubjectStudents", new[] { "Subject_id" });
            DropIndex("dbo.Visits", new[] { "Student_id" });
            DropIndex("dbo.Visits", new[] { "visitSubject_id" });
            DropIndex("dbo.Students", new[] { "Group_id" });
            CreateIndex("dbo.SubjectStudents", "Student_Id");
            CreateIndex("dbo.SubjectStudents", "Subject_Id");
            CreateIndex("dbo.Visits", "Student_Id");
            CreateIndex("dbo.Visits", "VisitSubject_Id");
            CreateIndex("dbo.Students", "Group_Id");
        }
    }
}
