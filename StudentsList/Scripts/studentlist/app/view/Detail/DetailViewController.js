Ext.define('studentlist.view.Detail.DetailViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail',

    onSaveChanges: function (saveButton, e, eOpts) {
        debugger;
        this.getViewModel().get('studentInfo.student').save(
            {
                scope: this,
                success: this.afterStudentSave,
                failure: function(rec,op){
                    console.error('Ошибочка при сохранинии студента', op);
                }
            });
    },

    afterStudentSave: function(record, operation){
        var me = this;
        this.getViewModel().get('studentInfo.student').Subjects().save();
        //switch(operation.action){
        //    case 'create':
               

        //        break;

        //    case 'update':

        //        debugger;

        //        break;
        //}
    },


    onAddRecord: function (saveButton, e, eOpts) {
        debugger;
        var newStudent = this.getViewModel().get('studentInfo.student'),
            groupId = this.getViewModel().get('studentInfo.group');
        newStudent.save({
            scope: this,
            params: { groupId: groupId },
            success: function () {
                debugger;
                this.getViewModel().set('studentInfo.reloadStore', true);
            }
        })
    },
   
    onEditButtonClick: function(button) {
        this.createDialog(button.getWidgetRecord());
    },





    // Visits 
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
        debugger;
        var changesStore = this.getViewModel().get('studentInfo.student'),
            theSubject = this.dialog.getViewModel().get('theSubject');
        changesStore.Subjects().getById(theSubject.id).data = theSubject.data;
        this.onCancelSubjectClick();
    },

    onCancelSubjectClick: function () {
        this.getView().remove(this.dialog);
        this.dialog = null;
    },


    onSessionChangeClick: function () {
        var changes = this.getViewModel().getStore('studentChanges');
        debugger;
        if (changes.getCount() !== 0) {
            new Ext.window.Window({
                autoShow: true,
                title: 'Session Changes',
                modal: true,
                width: 600,
                height: 400,
                layout: 'fit',
                items: {
                    xtype: 'textarea',
                    value: changes.getAt(0)
                }
            });
        } else {
            Ext.Msg.alert('Ошибочка', 'Нет изменяшек за эту сессию');
        }
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