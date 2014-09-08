Ext.define('studentlist.view.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'studentlist-DetailView',

    requires: [
         'studentlist.view.DetailViewModel',
         'studentlist.controller.DetailViewController'
    ],

    
    controller: 'detail',
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
            bind: '{rec.FirstName}',
            fieldLabel: 'Имя'
        },
		{
		    xtype: 'textfield',
		    bind: '{rec.LastName}',
		    fieldLabel: 'Фамилия'
		},
        {
            xtype: 'textfield',
            bind: '{rec.SecondName}',
            fieldLabel: 'Отчество'
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: '{rec.BirthDate}',
            fieldLabel: 'Дата рождения'
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: '{rec.IncomDate}',
            fieldLabel: 'Дата поступления'
        },
        {
            xtype: 'hiddenfield',
            bind: '{rec.id}'
        },
        {
            xtype: 'button',
            text: 'Save',
            itemId: 'SaveRecord',
            listeners: {
                click: 'onSaveChanges'
            }
        }
    ]
});
