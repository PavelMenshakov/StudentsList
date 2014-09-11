Ext.define('studentlist.view.Detail.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'studentlist-Detail',

    requires: [
         'studentlist.view.Detail.DetailViewModel',
         'studentlist.view.Detail.DetailViewController'
    ],

    viewModel: {
        type: 'detailform'
    },
    controller: 'detail',
    title: 'Edit Students',
    frame: true,
    padding: 10,
    reference: 'DetailView',

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
