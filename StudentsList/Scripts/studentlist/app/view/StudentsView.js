Ext.define('studentlist.view.StudentsView', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist-StudentsView',
    store: 'Students',
    columns: [
    {
        text: 'Имя',
        dataIndex: 'FName'
    },
    {
        text: 'Фамилия',
        dataIndex: 'LName',
    },
    {
        text: 'Отчество',
        dataIndex: 'SName'
    }
    ],
    listeners: {
        itemclick: 'onGridSelect'
    }
});