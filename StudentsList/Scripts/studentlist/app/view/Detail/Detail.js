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
            width: 300,
            frame: true,
            items: [
                {
                    xtype: 'textfield',
                    bind: '{studentInfo.student.FirstName}',
                    fieldLabel: 'Имя'
                },
                {
                    xtype: 'textfield',
                    bind: '{studentInfo.student.LastName}',
                    fieldLabel: 'Фамилия'
                },
                {
                    xtype: 'textfield',
                    bind: '{studentInfo.student.SecondName}',
                    fieldLabel: 'Отчество'
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Пол',
                    width: 275,
                    items: [{
                        boxLabel: 'Мужской',
                        name: 'Sex',
                        inputValue: true,
                    }, {
                        boxLabel: 'Женский',
                        name: 'Sex',
                        inputValue: false
                    }],
                    reference: 'RadioG',
                },
                {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: '{studentInfo.student.BirthDate}',
                    fieldLabel: 'Дата рождения'
                },
                {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: '{studentInfo.student.IncomDate}',
                    fieldLabel: 'Дата поступления'
                },
                {
                    xtype: 'hiddenfield',
                    bind: '{studentInfo.student.Id}'
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
            width: 600,
            bind:{
                store: '{subjects}'
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

                angleField: 'Hours',
                donut: 60,
                label: {
                    field: 'Name',
                    display: 'outside'
                },
                highlight: true,
                tooltip: {
                    trackMouse: true,
                    style: 'background: #fff',
                    renderer: function(storeItem, item) {
                        this.setHtml(storeItem.get('Name') + ': ' + storeItem.get('Hours'));
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
                store: '{subjects}'
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
                { text: 'Название', dataIndex: 'Name' },
                { text: 'Часы', dataIndex: 'Hours' },
                {
                    xtype: 'widgetcolumn',
                    width: 90,
                    widget: {
                        xtype: 'button',
                        text: 'Изменить',
                        handler: 'onEditCustomerClick'
                    }
                }
            ],
            colspan: 2
        }
    ]
});