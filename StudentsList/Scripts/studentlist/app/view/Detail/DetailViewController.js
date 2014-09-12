Ext.define('studentlist.view.Detail.DetailViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail',

    onSaveChanges: function (saveButton, e, eOpts) {
        this.getViewModel().getData().rec.save();
    },
    onAddRecord: function (saveButton, e, eOpts) {
        var masterView = this.getViewModel().getParent().getView(),
            groupBox = masterView.lookupReference('Header').lookupReference('GroupBox'),
            store = groupBox.getStore(),
            record = this.getViewModel().getData().rec,
            student = Ext.create('studentlist.model.Student', { FirstName: record.FirstName, LastName: record.LastName, SecondName : record.SecondName,BirthDate: record.BirthDate, IncomDate: record.IncomDate});
        store.getById(groupBox.value).Students.add(student);
        store.getById(groupBox.value).save();
    }
});