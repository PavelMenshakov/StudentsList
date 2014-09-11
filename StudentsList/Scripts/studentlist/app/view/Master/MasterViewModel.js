Ext.define('studentlist.view.Master.MasterViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.master',

    stores: {
        Students: 'Students',
        Groups: 'Groups'
    }
});