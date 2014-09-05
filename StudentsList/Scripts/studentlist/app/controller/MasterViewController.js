Ext.define('studentlist.controller.MasterViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.master',

    onGridSelect: function ( record, item, index, e, eOpts ) {
        debugger;
        var detailView = this.lookupReference('DetailView');
        detailView.getViewModel().setData({ rec: record });
    }

});