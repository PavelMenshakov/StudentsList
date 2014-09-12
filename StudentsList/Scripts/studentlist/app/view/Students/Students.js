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
        store: '{students}'
    },
    tbar: [{
        text: 'Add',
        reference: 'add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        text: 'Delete',
        reference: 'delete',
        hidden: true,
        listeners: {
            click: 'onDeleteClick'
        }
    }],
    columns: [
    {
        text: 'Имя',
        dataIndex: 'FirstName'
    },
    {
        text: 'Фамилия',
        dataIndex: 'LastName',
    },
    {
        text: 'Отчество',
        dataIndex: 'SecondName'
    }
    ],
    listeners: {
        itemclick: 'onGridSelect',
        containerclick: 'onContainerClick'
    },
    reference: 'StudentsView',
});