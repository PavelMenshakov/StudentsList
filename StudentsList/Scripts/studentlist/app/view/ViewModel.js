Ext.define('studentlist.view.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.master',
    data: {
        studentInfo: {
            group: null,
            student: null,
            visits: null,
            subjects: null,
            isAdded: null,
            isModifed: null
        },
        student: {
            Sex: false
        }
    }
});