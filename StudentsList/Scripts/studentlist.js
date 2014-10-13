Ext.application({
    name: 'studentlist',
    locale: 'ru',
    appFolder: '../Scripts/studentlist/app',
    views: [
        'View',
        'Detail.Detail',
        'Detail.Visits.Visits',
        'Students.Students',
        'Header.Header'
    ],

    launch: function () {
        
        var session = new Ext.data.Session();

        Ext.create('Ext.container.Viewport', {
            title: 'Student List',
            session: session,
            items: [
               {  
                   xtype: 'studentlist-View'
               }
            ]

        });
    }
});
