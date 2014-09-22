Ext.define('studentlist.view.Header.HeaderViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'studentlist.model.Group'
    ],
    alias: 'viewmodel.header',

    stores: {
        groups: {
            autoLoad: true,
            storeId: 'groups',
            model: 'studentlist.model.Group'
        }
    }
});