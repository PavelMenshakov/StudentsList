Ext.define('studentlist.view.Detail.DetailViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'studentlist.model.Subject'
    ],
    alias: 'viewmodel.detail',

    formulas: {
        sex:{
            bind: {
                bindTo: '{studentInfo.student}',
                //deep:true
            },
            get: function (student) {
                var val = student && student.isModel ? student.get('sex') : null;
                return val ? { sex: val } : null;
            },

            set: function (value) {
                var val = Ext.isObject(value) ? value.sex : value;
                this.get('studentInfo.student').set('sex', val);
            }
        }
    },
    stores: {
        studentChanges: {
            model: 'studentlist.model.Student'
        }
    }
});