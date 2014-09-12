Ext.define('studentlist.view.Header.HeaderViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',

    onGroupChange: function (field, newValue, oldValue, eOpts) {
        var masterView = this.getViewModel().getParent().getView(),
            studentsView = masterView.lookupReference('StudentsView'),
            store = studentsView.getViewModel().getStore('students'),
            detailView = masterView.lookupReference('DetailView');
        studentsView.lookupReference('delete').setVisible(false);
        detailView.lookupReference('save').setVisible(false);
        detailView.lookupReference('add').setVisible(false);
        detailView.reset();
        store.load({
            params: { Id: newValue }
        });
    }
});