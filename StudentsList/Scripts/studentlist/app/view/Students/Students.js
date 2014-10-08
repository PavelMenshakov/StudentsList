Ext.define('studentlist.view.Students.Students', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist-Students',
    requires: [
     'studentlist.view.Students.StudentsViewModel',
     'studentlist.view.Students.StudentsViewController'
    ],
    controller: 'students',
    viewModel: {
        type: 'students'
    },
    bind: {
        store: '{group}'
    },
    selModel: {  allowDeselect: true },
    tbar: [{
        text: 'Добавить',
        reference: 'add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        text: 'Удалить',
        reference: 'delete',
        bind: {
            disabled: '{!StudentsView.selection}'
        },
        listeners: {
            click: 'onDeleteClick'
        }
    }],
    columns: [
    {
        text: 'Имя',
        dataIndex: 'firstName'
    },
    {
        text: 'Фамилия',
        dataIndex: 'lastName',
    },
    {
        text: 'Отчество',
        dataIndex: 'secondName'
    }
    ],
    listeners: {
        itemclick: 'onRowSelect',
        containerclick: 'onContainerClick',
    },
    reference: 'StudentsView',
});