Ext.define('studentlist.view.Header.HeaderViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',

    onGroupChange: function (field, newValue, oldValue, eOpts) {
        var viewModel = this.getViewModel();
        store.load({
            params: { Id: newValue }
        });
    }
});