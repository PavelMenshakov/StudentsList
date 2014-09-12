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
        xtype: 'combobox',
        fieldLabel: 'Choose group',
        bind:{
            store: '{groups}'
        },
        displayField: 'Name',
        valueField: 'Id',
        listeners: {
            change: 'onGroupChange'
        },
        reference: 'GroupBox',

    }]
});
