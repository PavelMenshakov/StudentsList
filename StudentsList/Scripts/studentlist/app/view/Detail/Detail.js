Ext.define('studentlist.view.Detail.Detail', {
    extend: 'Ext.panel.Panel',

    xtype: 'studentlist-Detail',
    requires: [
     'studentlist.view.Detail.DetailViewModel',
     'studentlist.view.Detail.DetailViewController',
    ],

    viewModel: {
        type: 'detail',
    },
    bind:{
        disabled: '{!studentInfo.group}'
    },

    controller: 'detail',

    reference: 'DetailView',

    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },

    autoScroll: true,

    defaults: {
        bodyPadding: '15 20',
        border: true
    },
    items: [
        {
            xtype: 'form',
            width: '100%',
            frame: true,
            items: [
                {
                    xtype: 'textfield',
                    bind: '{studentInfo.student.firstName}',
                    fieldLabel: 'Имя'
                },
                {
                    xtype: 'textfield',
                    bind: '{studentInfo.student.lastName}',
                    fieldLabel: 'Фамилия'
                },
                {
                    xtype: 'textfield',
                    bind: '{studentInfo.student.secondName}',
                    fieldLabel: 'Отчество'
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Пол',
                    width: 275,
                    bind: {
                        value: '{sex}'
                    },
                    items: [{
                        boxLabel: 'Женский',
                        name: 'sex',
                        inputValue: "F"
                    },
                    {
                        boxLabel: 'Мужской',
                        name: 'sex',
                        inputValue: "M"
                    }],
                    reference: 'RadioG',
                },
                {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: '{studentInfo.student.birthDate}',
                    fieldLabel: 'Дата рождения'
                },
                {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: '{studentInfo.student.incomDate}',
                    fieldLabel: 'Дата поступления'
                },
                {
                    xtype: 'hiddenfield',
                    bind: '{studentInfo.student.id}'
                },
                {
                    xtype: 'button',
                    text: 'Сохранить',
                    bind: {
                        disabled: '{!studentInfo.isModifed}'
                    },
                    reference: 'save',
                    margin: 10,
                    itemId: 'SaveRecord',
                    listeners: {
                        click: 'onSaveChanges'
                    }
                },{
                    xtype: 'button',
                    text: 'Сессия',
                    margin: 10,
                    itemId: 'Sessions',
                    listeners: {
                        click: 'onSessionChangeClick'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Добавить',
                    reference: 'add',
                    margin: 10,
                    bind: {
                        disabled: '{!studentInfo.isAdded}'
                    },
                    itemId: 'AddRecord',
                    listeners: {
                        click: 'onAddRecord'
                    }
                }
            ]
        },

        {
            xtype: 'polar',
            width: 300,
            bind: {
                store: '{studentInfo.student.Subjects}',
                disabled: '{studentInfo.isAdded}'
                },
            height: 260,
            insetPadding: 50,
            innerPadding: 20,
      //      legend: {
      //          docked: 'left'
      //      },
            interactions: ['rotate', 'itemhighlight'],
            sprites: [{
                type: 'text',
                text: 'Нагрузка студента',
                fontSize: 15,
                width: 100,
                height: 20,
                x: 40, 
                y: 20  
            }],
            series: [{
                type: 'pie',

                angleField: 'hours',
                donut: 60,
                label: {
                    field: 'name',
                    display: 'outside'
                },
                highlight: true,
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('name') + ': ' + storeItem.get('hours'));
                    }
                }
            }]
        },
        {
            frame: true,
            xtype: 'grid',
            bodyPadding: '0 0',
            title: 'Список предметов',
            width: '100%',
            height: 230,
            bind: {
                store: '{studentInfo.student.Subjects}',
                disabled: '{studentInfo.isAdded}'
            },
            tbar: [{
                text: 'Добавить',
                listeners: {
                    click: 'onAddClick'
                }
            }, {
                text: 'Удалить',
                bind: {
                    disabled: '{!SubjectsGrid.selection}'
                },
                listeners: {
                    click: 'onDeleteClick'
                }
            }],
            reference: 'SubjectsGrid',
            columns: [
                { text: 'Название', dataIndex: 'name' },
                { text: 'Часы', dataIndex: 'hours' },
                {
                    xtype: 'widgetcolumn',
                    width: 90,
                    widget: {
                        xtype: 'button',
                        text: 'Изменить',
                        handler: 'onEditButtonClick'
                    }
                }
            ],
            //colspan: 3
        }
    ]
});