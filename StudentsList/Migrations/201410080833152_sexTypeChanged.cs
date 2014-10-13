namespace StudentsList.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sexTypeChanged : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Students", "sex", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Students", "sex", c => c.Boolean(nullable: false));
        }
    }
}
