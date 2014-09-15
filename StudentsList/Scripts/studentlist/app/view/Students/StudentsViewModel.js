Ext.define('studentlist.view.Students.StudentsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.students',
    requires: [
        'studentlist.model.Student'
    ],
    stores: {
        students: {
            storeId: 'students',
            model: 'studentlist.model.Student'
        }
    }
});