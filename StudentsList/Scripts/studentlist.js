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
        


        Ext.create('Ext.container.Viewport', {
            title: 'Student List',
            items: [
               {  
                   xtype: 'studentlist-View'
               }
            ]

        });
    }
});
