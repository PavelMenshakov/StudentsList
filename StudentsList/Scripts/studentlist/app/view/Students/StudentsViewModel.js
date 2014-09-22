Ext.define('studentlist.view.Students.StudentsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.students',
    requires: [
        'studentlist.model.Student',
        'studentlist.model.Subject'
    ],
    stores: {
        group: {
            storeId: 'group',
            model: 'studentlist.model.Student',
            autoLoad: '{studentInfo.group}',
            proxy: {
                type: 'rest',
                url: 'api/Groups/{studentInfo.group}',
                reader: {
                    type: 'json'
                }
            }
        },
        student: {
            storeId: 'student',
            autoSync: true,
            autoLoad: true,
            model: 'studentlist.model.Student',
            proxy: {
                type: 'rest',
                url: 'api/Students/',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});