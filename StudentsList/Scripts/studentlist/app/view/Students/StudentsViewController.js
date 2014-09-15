Ext.define('studentlist.view.Students.StudentsViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.students',

    onRowSelect: function (view, record, tr, rowIndex, e, eOpts) {
        this.getViewModel().set('studentInfo.student', record);
    },

    onAddClick: function () {
        var masterView = this.getViewModel().getParent().getView(),
            detailView = masterView.lookupReference('DetailView');
        detailView.lookupReference('add').setVisible(true);
        detailView.lookupReference('save').setVisible(false);
        detailView.reset();
    },

    onDeleteClick: function () {
        var view = this.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getStore(),
            masterView = this.getViewModel().getParent().getView(),
            detailView = masterView.lookupReference('DetailView');
        store.getById(selected.id).erase();
        this.lookupReference('delete').setVisible(false);
        detailView.reset();
    },

    onContainerClick: function () {
        var view = this.getView(),
            masterView = this.getViewModel().getParent().getView(),
            detailView = masterView.lookupReference('DetailView');
        view.lookupReference('delete').setVisible(false);
        detailView.lookupReference('save').setVisible(false);
        detailView.lookupReference('add').setVisible(false);
        detailView.getViewModel().set('rec', null);
        detailView.reset();
    }

});