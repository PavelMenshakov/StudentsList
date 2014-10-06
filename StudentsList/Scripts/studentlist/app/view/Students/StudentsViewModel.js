Ext.define('studentlist.view.Students.StudentsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.students',
    requires: [
        'studentlist.model.Student',
        'studentlist.model.Subject'
    ],
    stores: {
        group: {
            model: 'studentlist.model.Student',
            autoLoad: '{studentInfo.group}',
            proxy: {
                type: 'rest',
                url: 'api/Groups',
                extraParams: { Id: '{studentInfo.group}' },
                reader: {
                    type: 'json',
                    rootProperty:'students'
                }
            }
        }
    }
});