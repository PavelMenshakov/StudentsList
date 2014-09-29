Ext.define('studentlist.view.Header.HeaderViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'studentlist.model.Group'
    ],
    alias: 'viewmodel.header',
    stores: {
        groups: {
            autoLoad: true,
            model: 'studentlist.model.Group'
        }
    }
});