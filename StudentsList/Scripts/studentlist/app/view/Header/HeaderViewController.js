Ext.define('studentlist.view.Header.HeaderViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',

    onGroupChange: function (field, newValue, oldValue, eOpts) {
        this.getViewModel().set('studentInfo.group', newValue);
        this.resetStudent();
    },

    resetStudent: function() {
        var student = Ext.create('studentlist.model.Student', null);
        this.getViewModel().set('studentInfo.student', student);
    },
});