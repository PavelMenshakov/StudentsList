Ext.define('studentlist.view.Detail.Detail', {
    extend: 'Ext.form.Panel',
    xtype: 'studentlist-Detail',

    requires: [
         'studentlist.view.Detail.DetailViewModel',
         'studentlist.view.Detail.DetailViewController'
    ],

    viewModel: {
        type: 'detail'
    },
    controller: 'detail',
    title: 'Edit Students',
    frame: true,
    padding: 10,
    reference: 'DetailView',

    items: [
        {
            xtype: 'textfield',
            bind: '{studentInfo.student.FirstName}',
            fieldLabel: 'Имя'
        },
		{
		    xtype: 'textfield',
		    bind: '{studentInfo.student.LastName}',
		    fieldLabel: 'Фамилия'
		},
        {
            xtype: 'textfield',
            bind: '{studentInfo.student.SecondName}',
            fieldLabel: 'Отчество'
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: '{studentInfo.student.BirthDate}',
            fieldLabel: 'Дата рождения'
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            bind: '{studentInfo.student.IncomDate}',
            fieldLabel: 'Дата поступления'
        },
        {
            xtype: 'hiddenfield',
            bind: '{studentInfo.student.id}'
        },
        {
            xtype: 'button',
            text: 'Save',
            bind: {
                hidden: '{!studentInfo.isModified}'
            },
            reference: 'save',
            margin: 10,
            itemId: 'SaveRecord',
            listeners: {
                click: 'onSaveChanges'
            }
        },
        {
            xtype: 'button',
            text: 'Add',
            reference: 'add',
            margin: 10,
            hidden: '{!studentInfo.isAdded}',
            itemId: 'AddRecord',
            listeners: {
                click: 'onAddRecord'
            }
        }
    ]
});
