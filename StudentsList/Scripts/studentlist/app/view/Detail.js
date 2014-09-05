Ext.define('studentlist.view.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'studentlist-DetailView',

    requires: [
         'studentlist.view.DetailViewModel'
    ],

    title: 'Edit Students',
    frame: true,
    padding: 10,
    reference: 'DetailView',
    viewModel: {
        type: 'detailform'
    },
    items: [
        {
            xtype: 'textfield',
            bind: '{rec.FName}',
            fieldLabel: 'Имя'
        },
		{
		    xtype: 'textfield',
		    bind: '{rec.LName}',
		    fieldLabel: 'Фамилия'
		},
        {
            xtype: 'textfield',
            bind: '{rec.SName}',
            fieldLabel: 'Отчество'
        },
        {
            xtype: 'hiddenfield',
            bind: '{rec.id}'
        },
        {
            xtype: 'button',
            text: 'Save',
            itemId: 'SaveRecord'
        }
    ]
});
