const centerDate = new Date();
console.log(centerDate);
export const GanttGlobalConfig = {
  style: 'font-size:0.85em',
  viewPreset: {
    base: 'weekAndDay',
    tickSize: 60,
  },
  // Inicio de la semana en dia Lunes
  weekStartDay: 1,
  dependencyIdField: 'sequenceNumber',
  infiniteScroll : true,
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
    taskResize: false,
    taskTooltip : {
      cls: "tooltip",
      template : ({ taskRecord }) => `
      Item: ${taskRecord.item}
      <br>
      Demanda: ${taskRecord.ord_qty}
      <br>
      Cantidad sugerida: ${taskRecord.ord_qty}
      <br>
      Tiempo de producción (días): ${taskRecord.duration.toFixed(2)}
      `,
      // Tooltip configs can be used here
      align    : 'l-r' // Align left to right
    },
    // projectLines: {
    //   disabled: true,
    // },
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
  subGridConfigs : {
    fixed : {
        // No resizing of the fixed column region
        resizable : false,
        // Set a lower weight than the built-in "locked" section to have it appear to the left
        weight    : 1
    },
    locked : {
        // A scrollable section with the main columns
        width  : 400,
        weight : 2
    }
},
readOnly: true,
  columns: [
    { type : 'wbs', region : 'fixed', text: 'ID' },
    { type: 'name', field: 'name', width: 260, text: 'Order', region : 'fixed', editor: false },
    { type: 'name', field: 'item', width: 30, text: 'Item', region : 'fixed', editor: false },
    { type: 'name', field: 'pline', width: 180, text: 'Product Line', region: 'fixed', editor: false },
    {
      type: 'date',
      field: 'ssd',
      format: 'DD-MM-YYYY',
      width: 110,
      text: 'SSD',
      editor: false
    },
    {
      type: 'number',
      field: 'ord_qty',
      width: 30,
      text: 'Suggested Pieces',
      editor: false,  
    },
    { type: 'number', field: 'ord_qty', width: 30, text: 'Cantidad',  editor : {
      listeners : {
          change(context) {
              console.log(context);
              let newQuantity = context.value
              let idTask = context.source.eventRecord.id
              let parentId = context.source.eventRecord.parentId;
              let oldTimeDuration = bryntum.query('gantt').taskStore.getById(idTask).duration
              let oldPieces = bryntum.query('gantt').taskStore.getById(idTask).ord_qty
              let olDurationPerPiece = oldTimeDuration / oldPieces
              console.log('Parent ID ' + parentId)
              console.log('ID Task ' + idTask)
              console.log('New Qty'  + newQuantity)
              console.log('Old time duration ' + oldTimeDuration)
              bryntum.query('gantt').taskStore.getById(idTask).duration = olDurationPerPiece * newQuantity
          }
      }
  } },
    
    // { type: 'name', field: 'suggested_time_formatted', width: 40, text: 'Tiempo de Producción' },
    { type: 'date', field: 'startDate', width: 40, text: 'Start Date' },
    { type: 'date', field: 'endDate', width: 40, text: 'End Date' },
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
