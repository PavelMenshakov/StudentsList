Ext.define('studentlist.view.Students.StudentsViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.students',


    onRowSelect: function (view, record, tr, rowIndex, e, eOpts) {
        this.getViewModel().set('studentInfo.student', record);
        this.changeAction(false);
    },

    onAddClick: function () {
        this.resetStudent();
        this.changeAction(true);
    },

    onDeleteClick: function () {
        selection = this.getView().getSelectionModel().getSelection()[0];
        this.getViewModel().getStore('student').remove(selection);
        this.changeAction(null);
        this.resetStudent();
    },



    onContainerClick: function () {
        this.changeAction(null);
        this.resetStudent();
    },

    resetStudent: function() {
        var student = Ext.create('studentlist.model.Student', null);
        student.Subjects().setData(Ext.create('studentlist.model.Subject', null));
        this.getViewModel().set('studentInfo.student', student);
    },

    changeAction: function (action) {
        if (action == null) {
            this.getViewModel().set('studentInfo.isAdded', false);
            this.getViewModel().set('studentInfo.isModifed', false);
        } else if (action) {
            this.getViewModel().set('studentInfo.isAdded', true);
            this.getViewModel().set('studentInfo.isModifed', false);
        } else {
            this.getViewModel().set('studentInfo.isAdded', false);
            this.getViewModel().set('studentInfo.isModifed', true);
        }
    }
});