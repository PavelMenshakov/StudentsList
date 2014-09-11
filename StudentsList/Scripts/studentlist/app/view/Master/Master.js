Ext.define('studentlist.view.Master.Master', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentlist-Master',
    requires: [
         'studentlist.view.Master.MasterViewModel',
         'studentlist.view.Master.MasterViewController'
    ],

    viewModel: {
        type: 'master'
    },
    controller: 'master',
    layout: 'border',
    height: 600,
    width: 1024,
    items: [{
        region: 'center',
        xtype: 'studentlist-Students',
        width: 1024
    }, {
        region: 'east',
        xtype: 'studentlist-Detail'
    }, {
        region: 'north',
        xtype: 'studentlist-Header',
        height: 100
    }]
});

