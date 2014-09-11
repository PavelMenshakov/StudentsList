Ext.define('studentlist.view.Students.Students', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist-Students',
    requires: [
     'studentlist.view.Students.StudentsViewModel',
     'studentlist.view.Students.StudentsViewController'
    ],

    viewModel: {
        type: 'students'
    },
    tbar: [{
        text: 'Add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        text: 'Delete',
        reference: 'delete',
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
        itemclick: 'onGridSelect'
    },
    reference: 'StudentsView',
});