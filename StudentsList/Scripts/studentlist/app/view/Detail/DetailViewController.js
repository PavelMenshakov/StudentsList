Ext.define('studentlist.view.Detail.DetailViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail',

    onSaveChanges: function (saveButton, e, eOpts) {
        this.getViewModel().getData().studentInfo.student.save();
    },

    onAddRecord: function (saveButton, e, eOpts) {
        
    },
   
    onEditButtonClick: function(button) {
        this.createDialog(button.getWidgetRecord());
    },

    createDialog: function(record) {
        var view = this.getView();

        this.isEdit = !!record;
        this.dialog = view.add({
            xtype: 'Visits',
            viewModel: {
                data: {
                    title: record ? 'Изменение: ' + record.get('name') : 'Добавление предмета',
                    theSubject: record || {
                        type: 'Subject',
                        create: true
                    }
                },
            }
        });

        this.dialog.show();
    },

    onRemoveVisitClick: function (button) {
        var visits = this.lookupReference('visits').getStore();
        visits.remove(button.getWidgetRecord());
    },
    
    onSaveSubjectClick: function (button)
    {
        this.dialog.getViewModel().get('theSubject').save();
    },

    onCancelSubjectClick: function () {
        this.getView().remove(this.dialog);
        this.dialog = null;
    },

    // Черная магия
    onAddVisitClick: function () {
        var visitGrid = this.getView().lookupReference('visits'),
            store = visitGrid.getStore(),
            r = Ext.create('studentlist.model.Visit', {
                date: Ext.Date.clearTime(new Date()),
                isAbson: true
            });
        visitGrid.editingPlugin.cancelEdit();
        
        store.insert(0, r);
        visitGrid.editingPlugin.startEdit(0, 0);
    },

    onDeleteVisitClick: function () {
        var visitGrid = this.getView().lookupReference('visits'),
            store = visitGrid.getStore(),
            selection = visitGrid.getSelectionModel().getSelection()[0];
        visitGrid.editingPlugin.cancelEdit();
        store.remove(selection);
    },
    

});