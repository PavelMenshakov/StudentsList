Ext.define('studentlist.store.Students', {
    extend: 'Ext.data.Store',
    requires: [
        'studentlist.model.Student'
    ],
    autoLoad:true,
    storeId: 'Students',
    model: 'studentlist.model.Student',
    proxy: {                    
        type: 'rest',           
        url: 'api/students',
        appendId: true
    }
});