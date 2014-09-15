﻿Ext.define('studentlist.view.View', {
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
    height: 600,
    width: '100%',
    items: [{
        title: 'Список студентов',
        region: 'west',
        xtype: 'studentlist-Students',
        title: 'Navigation',
        floatable: false,
        width: 300,
        minWidth: 300,
        maxWidth: 500,
    }, {        
        collapsible: false,
        region: 'center',
        xtype: 'studentlist-Detail',
        margin: '5 0 0 0'
    }, {
        region: 'north',
        minHeight: 75,
        maxHeight: 150,
        xtype: 'studentlist-Header',
        height: 100
    }]

});
