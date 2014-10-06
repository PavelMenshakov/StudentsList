Ext.define('studentlist.view.Detail.Visits.Visits', {
    extend: 'Ext.window.Window',

    xtype: 'Visits',

    bind: {
        title: '{title}'
    },
    layout: 'fit',
    width: 500,
    height: 430,
    closable: true,
    closeAction: 'onCancelSubjectClick',
    items: {
        xtype: 'form',
        bodyPadding: 10,
        border: false,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Название',
            reference: 'name',
            bind: '{theSubject.name}'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Часы',
            reference: 'hours',
            bind: '{theSubject.hours}'
        }, {
            xtype: 'grid',
            flex: 1,
            reference: 'visits',
            margin: '10 0 0 0',
            title: 'Посещения',
            bind: '{theSubject.Visits}',
            plugins: {
                ptype: 'rowediting',
                clicksToEdit: 1
            },
            tbar: [{
                text: 'Добавить',
                listeners: {
                    click: 'onAddVisitClick'
                }
            }, {
                text: 'Удалить',
                bind: {
                    disabled: '{!visits.selection}'
                },
                listeners: {
                    click: 'onDeleteVisitClick'
                }
            }],
            columns: [{
                xtype: 'datecolumn',
                text: 'Дата',
                dataIndex: 'date',
                flex: 1,
                editor: 'datefield'
            }, {
                xtype: 'checkcolumn',
                text: 'Присутствовал',
                dataIndex: 'isAbson',
                editor: 'checkbox'
            }]
        }]
    },

    buttons: [{
        text: 'Сохранить',
        listeners: {
            click: 'onSaveSubjectClick'
        }
    }, {
        text: 'Закрыть',
        handler: 'onCancelSubjectClick'
    }]
});