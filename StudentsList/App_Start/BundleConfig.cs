using System.Web.Optimization;

namespace StudentsList.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
    //        bundles.Add(new StyleBundle("~/Content/Style").Include(
    //            "~/Content/ext-theme-crisp-all-debug.css",
    //            "~/Content/ext-theme-crisp-all-debug_01.css",
     //           "~/Content/ext-theme-crisp-all-debug_02.css"));
     //       bundles.Add(new StyleBundle("~/Content/Style").IncludeDirectory("~/Content/images","*.*"));
         
            // Bundles Extjs
            bundles.Add(new ScriptBundle("~/bundles/extjs").Include(
                "~/Scripts/studentlist.js",
                "~/Scripts/ext-all-debug.js",
                "~/Scripts/sencha-charts-debug.js",
                "~/Scripts/ext-locale-ru-debug.js"));

        }
    }
}