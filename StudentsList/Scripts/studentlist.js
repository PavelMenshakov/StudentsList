Ext.application({
    name: 'studentlist',
    appFolder: '../Scripts/studentlist/app',
    views: [
        'Master.Master',
        'Detail.Detail',
        'Students.Students',
        'Header.Header'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            title: 'Student List',
            items: [
               {
                   xtype: 'studentlist-Master',
               }
            ]

        });
    }
});
