Ext.define('studentlist.view.Master', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentlist-MasterView',
    requires: [
        'studentlist.controller.MasterViewController'
    ],
    controller: 'master',
    layout: 'border',
    height: 500,
    width: 1024,
    items: [{
        region: 'center',
        xtype: 'studentlist-StudentsView',
    }, {
        region: 'east',
        xtype: 'studentlist-DetailView',
    }]
});

