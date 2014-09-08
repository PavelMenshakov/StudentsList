Ext.define('studentlist.view.StudentsView', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist-StudentsView',
    store: 'Students',
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
    }
});