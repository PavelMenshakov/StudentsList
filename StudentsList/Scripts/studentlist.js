Ext.application({
    name: 'studentlist',
    appFolder: '../Scripts/studentlist/app',
    views: [
        'View',
        'Detail.Detail',
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
