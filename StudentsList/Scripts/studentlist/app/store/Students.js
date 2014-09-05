Ext.define('studentlist.store.Students', {
    extend: 'Ext.data.JsonStore',
    requires: [
        'studentlist.model.Student'
    ],
    autoLoad:true,
    storeId: 'Students',
    model: 'studentlist.model.Student',
    proxy: {                    
        type: 'ajax',           
        url: 'api/students',         
        reader: {
            type: 'json'
        }
    }
});