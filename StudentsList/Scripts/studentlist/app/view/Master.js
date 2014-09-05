Ext.define('studentlist.view.Master', {
    xtype: 'studentlist-MasterView',
    requires: [
        'studentlist.controller.MasterViewController',
        'studentlist.view.Detail'
    ],
    layout: 'border',
    controller: 'master',
    store: 'Students',
    items: [{
        region: 'center',
        extend: 'Ext.grid.Panel',
        title: 'Students List',
        minSize: 300,
        columns: [
        {
            text: 'Имя',
            dataIndex: 'FName'
        },
        {
            text: 'Фамилия',
            dataIndex: 'LName',
        },
        {
            text: 'Отчество',
            dataIndex: 'SName'
        }
        ],

        listeners: {
            itemclick: 'onGridSelect'
        }
    }, {
        region: 'east',
        split: true,
        collapsible: true,
        title: 'Main information',
        xtype: 'studentlist-DetailView'

    }]
});