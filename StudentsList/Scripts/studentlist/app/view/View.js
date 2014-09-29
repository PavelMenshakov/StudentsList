Ext.define('studentlist.view.View', {
    extend: 'Ext.panel.Panel',
    xtype: 'studentlist-View',
    requires: [
         'studentlist.view.ViewModel',
         'studentlist.view.ViewController'
    ],

    viewModel: {
        type: 'master'
    },
    controller: 'master',
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
    },
    height: 650,
    width: '100%',
    items: [{
        title: 'Список студентов',
        region: 'west',
        xtype: 'studentlist-Students',
        floatable: false,
        width: 302,
        minWidth: 300,
        maxWidth: 500
    }, {
        title: 'Подробная информация',
        collapsible: false,
        region: 'center',
        xtype: 'studentlist-Detail',
        margin: '5 0 0 0'
    }, {
        title: 'Выберите группу',
        region: 'north',
        minHeight: 75,
        maxHeight: 150,
        xtype: 'studentlist-Header',
        height: 100,
        margin: '5 0 0 0'
    }]

});

