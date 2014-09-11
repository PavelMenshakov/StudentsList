Ext.define('studentlist.view.Detail.DetailViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail',

    onSaveChanges: function (saveButton, e, eOpts) {
        this.getViewModel().getData().rec.save();
    }

});