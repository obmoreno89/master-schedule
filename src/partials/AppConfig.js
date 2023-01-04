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
    taskResize: false,
    taskTooltip : {
      cls: "tooltip",
      template : ({ taskRecord }) => `
      <h1 style = "color:white;">Order: ${taskRecord.order}
      <br>
      LineNo: ${taskRecord.line_no}
      <br>
      Item: ${taskRecord.inventory_item}
      <br>
      Demanda: ${taskRecord.order_qty}
      <br>
      Cantidad sugerida: ${taskRecord.suggested_order}
      <br>
      Tiempo de producción (días): ${taskRecord.suggested_time.toFixed(2)}
      <br>
      Tiempo de producción (HH:MM) ${taskRecord.suggested_time_formatted}
      `,
      // Tooltip configs can be used here
      align    : 'l-r' // Align left to right
    },
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
      from: 1,
      to: 2,
      // start-to-finish
      type: 1,
      // 2 days lag
      lag: 2,
      lagUnit: 'day',
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
    { type: 'number', field: 'line_no', width: 50, text: 'LineNo' },
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
