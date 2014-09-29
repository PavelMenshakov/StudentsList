Ext.define('studentlist.view.Detail.DetailViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'studentlist.model.Subject'
    ],
    alias: 'viewmodel.detail',
    stores: {
        subjects: {
            model: 'studentlist.model.Subject',
            autoLoad: '{studentInfo.student.Id}',
            proxy: {
                type: 'rest',
                url: 'api/Subjects',
                extraParams: { id: '{studentInfo.student.Id}' },
                reader: {
                    type: 'json'
                }
            }
        }
    }
});