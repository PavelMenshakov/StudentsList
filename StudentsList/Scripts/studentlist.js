Ext.application({
    name: 'studentlist',
    appFolder: '../Scripts/studentlist/app',
    views: [
        'Master',
        'Detail',
        'StudentsView'
    ],

    stores: [
        'Students'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            title: 'Student List',
            items: [
               {
                   xtype: 'studentlist-MasterView',
               }
            ]

        });
    }
});
