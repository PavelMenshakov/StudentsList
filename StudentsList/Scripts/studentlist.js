Ext.application({
    name: 'studentlist',
    appFolder: '../Scripts/studentlist/app',
    views: [
        'Master',
    ],

    stores: [
        'Students'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            title: 'Student List',
            xtype: 'studentlist-MasterView'
        });

    }
});
