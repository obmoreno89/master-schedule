const centerDate = new Date();
console.log(centerDate);
export const ganttConfig = {
  style: 'font-size:0.85em',
  viewPreset: {
    base: 'weekAndDay',
    tickSize: 60,
  },
  // Inicio de la semana en dia Lunes
  weekStartDay: 1,
  dependencyIdField: 'sequenceNumber',
  bufferCoef: 2,
  visibleDate: {
    date: centerDate,
    block: 'center',
  },
  features: {
    rowReorder: false,
    taskResize: false,
    taskNonWorkingTime: {
      tooltipTemplate({ startDate, endDate, iconCls }) {
        return `                   
                <p class="b-nonworkingtime-tip-title">${
                  iconCls ? `<i class="${iconCls}"></i>` : ''
                }Non-working time</p>
                ${DateHelper.format(startDate, 'L')} - ${DateHelper.format(
          endDate,
          'L'
        )}
            `;
      },
    },
    dependencies: true,
    dependencyEdit: {
      editorConfig: {
        items: {
          // Custom label for the type field
          typeField: {
            label: 'Tipo de relación',
          },
        },

        bbar: {
          items: {
            deleteButton: {
              text: 'Eliminar',
              hidden: false,
              cls: 'deletebtn',
            },
            // Hiding save button
            saveButton: {
              text: 'Guardar',
              cls: 'save',
              hidden: false,
            },
            cancelButton: {
              text: 'Cancelar',
              hidden: false,
            },
          },
        },
      },
    },
    nonWorkingTime: {
      disabled: true,
    },
    percentBar: true,
    filter: true,
    indicators: true,
    taskCopyPaste: false,

    projectLines: {
      disabled: true,
    },
    // taskEdit: {
    //   items: {
    //     generalTab: {
    //       items: {
    //         // Remove "% Complete","Effort", and the divider in the "General" tab
    //         percentDone: false,
    //         effort: false,
    //         divider: false,
    //       },
    //     },
    //     // Remove all tabs except the "General" tab
    //     notesTab: false,
    //     predecessorsTab: false,
    //     successorsTab: false,
    //     resourcesTab: false,
    //     advancedTab: false,
    //   },
    // },

    taskEdit: false,
    taskMenu: {
      items: {
        deleteTask: false,
        add: false,
        convertToMilestone: false,
        indent: false,
        outdent: false,
      },
    },
    stickyCells: {
      // Identifies elements to clone and pin to the grid top.
      contentSelector: '.myClassName',
    },
  },
  rowHeight: 40,
  height: 600,
  columns: [
    { type: 'number', field: 'id', width: 5, text: 'No.', readOnly: true },
    { type: 'name', field: 'order', width: 30, text: 'Order', readOnly: true },
    {
      type: 'name',
      field: 'inventory_item',
      width: 30,
      text: 'Item',
      readOnly: true,
    },
    {
      type: 'name',
      field: 'pline',
      width: 100,
      text: 'Product Line',
      readOnly: true,
    },
    {
      type: 'date',
      field: 'schedule_ship_date',
      format: 'DD-MM-YYYY',
      width: 110,
      text: 'SSD',
      readOnly: true,
    },
    {
      type: 'number',
      field: 'order_qty',
      width: 30,
      text: 'Cantidad',
      readOnly: true,
    },
    {
      type: 'number',
      field: 'suggested_order',
      width: 30,
      text: 'Suggested Pieces',
      readOnly: true,
    },
    { type: 'date', field: 'startDate', width: 110, text: 'Start Date' },
    { type: 'date', field: 'endDate', width: 110, text: 'End Date' },
  ],

  // project : {
  //     autoLoad  : true,
  //     transport : {
  //         load : {
  //             url : 'https://hubmine-d.s3.amazonaws.com/launch_saas.json'
  //         },
  //         sync : {
  //             url : 'https://hubmine-d.s3.amazonaws.com/launch_saas.json'
  //         }
  //     }
  // },
  // Bryntum Gantt config options
};
