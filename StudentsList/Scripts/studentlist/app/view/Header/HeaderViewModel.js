Ext.define('studentlist.view.Header.HeaderViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'studentlist.model.Group',
        'studentlist.model.Student'
    ],
    alias: 'viewmodel.header',

    stores: {
        groups: {

            autoLoad: true,
            storeId: 'groups',
            model: 'studentlist.model.Group'
        },
        students: {

            storeId: 'students',
            model: 'studentlist.model.Student'
        }
    }
});