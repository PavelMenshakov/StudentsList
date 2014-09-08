Ext.define('studentlist.controller.DetailViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail',

    onSaveChanges: function (saveButton, e, eOpts) {
        this.getViewModel().getData().rec.commit();
        this.getViewModel().getData().rec.save();
    }

});