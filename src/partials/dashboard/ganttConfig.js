const centerDate = new Date();
console.log(centerDate);

export const ganttConfig = {
  style: 'font-size:20em',
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
    labels : {
      left : {
          field  : 'name',
          editor : {
              type : 'textfield'
          }
      }
  },
    taskDragCreate: false,
    taskEdit: false,
    taskResize: false,
    columnReorder: false,
    contextMenu: false,
    taskCopyPaste: false,
    percentBar: true,
    filter: true,
    indicators: true,
    taskCopyPaste: false,
    dependencies: true,
    parentArea : true,
    projectLines: {
      disabled: true,
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
  height: 480,
  disabled: true,

  columns: [
    { type : 'wbs', region : 'fixed', text: 'ID' },
    { type: 'name', field: 'name', width: 260, text: 'Order', region : 'fixed' },
    { type: 'name', field: 'item', width: 30, text: 'Item', region : 'fixed' },
    { type: 'name', field: 'pline', width: 180, text: 'Product Line', region: 'fixed' },
    {
      type: 'date',
      field: 'ssd',
      format: 'DD-MM-YYYY',
      width: 110,
      text: 'SSD',
    },
    { type: 'number', field: 'ord_qty', width: 30, text: 'Cantidad' },
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
