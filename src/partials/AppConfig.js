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
    taskEdit: {
      items: {
        generalTab: {
          items: {
            // Remove "% Complete","Effort", and the divider in the "General" tab
            percentDone: false,
            effort: false,
            divider: false,
          },
        },
        // Remove all tabs except the "General" tab
        notesTab: false,
        predecessorsTab: false,
        successorsTab: false,
        resourcesTab: false,
        advancedTab: false,
      },
    },
    taskMenu: {
      items: {
        // Hide delete task option
        deleteTask: false,
        // Hide item from the `add` submenu
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
    { type: 'number', field: 'id', width: 5, text: 'No.' },
    { type: 'name', field: 'Order', width: 30, text: 'Order' },
    { type: 'name', field: 'Pline', width: 100, text: 'Product Line' },
    { type: 'date', field: 'Schedule_Ship_Date', width: 110, text: 'SSD' },
    { type: 'number', field: 'OrdQty', width: 30, text: 'Cantidad' },
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
