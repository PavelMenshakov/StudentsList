Ext.define('studentlist.view.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.master',
    data: {
        studentInfo: {
            group: null,
            student: null,
            visits: null,
            subjects: null,
            theSubject: null,
            isAdded: null,
            isModifed: null,
            reloadStore: true

        }
    }
});