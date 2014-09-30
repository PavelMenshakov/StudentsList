Ext.define('studentlist.view.Header.Header', {
    extend: 'Ext.panel.Panel',
    requires: [
         'studentlist.view.Header.HeaderViewModel',
         'studentlist.view.Header.HeaderViewController'
    ],

    viewModel: {
        type: 'header'
    },
    controller: 'header',
    xtype: 'studentlist-Header',
    
    reference: 'Header',
    items: [{
        padding: '5 5 5 5',
        xtype: 'combobox',
        fieldLabel: 'Список групп',
        bind:{
            store: '{groups}'
        },
        displayField: 'name',
        valueField: 'id',
        listeners: {
            change: 'onGroupChange'
        },
        reference: 'GroupBox',

    }]
});
