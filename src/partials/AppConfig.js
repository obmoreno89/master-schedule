const centerDate = new Date();
console.log(centerDate);
export const ganttConfig =  {
    style     : 'font-size:0.85em',
    viewPreset : {
        base     : 'weekAndDay',
        tickSize : 60,
    },
    // Inicio de la semana en dia Lunes
    weekStartDay : 1,
    dependencyIdField : 'sequenceNumber',
    bufferCoef     : 2,
    visibleDate    : {
        date  : centerDate,
        block : 'center'
    },
    features : {
        filter : true,
        indicators : true,
        taskCopyPaste : false,
        projectLines: {
            disabled : true
        },
        taskEdit : {
            items : {
                generalTab      : {
                    items : {
                        // Remove "% Complete","Effort", and the divider in the "General" tab
                        percentDone : false,
                        effort      : false,
                        divider     : false
                    }
                },
                // Remove all tabs except the "General" tab
                notesTab        : false,
                predecessorsTab : false,
                successorsTab   : false,
                resourcesTab    : false,
                advancedTab     : false
            }
        },
        taskMenu : {
            items : {
                // Hide delete task option
                deleteTask: false,
                // Hide item from the `add` submenu
                add: false,
                convertToMilestone: false,
                indent: false,
                outdent: false
            }
        },
        stickyCells : {
            // Identifies elements to clone and pin to the grid top.
            contentSelector : '.myClassName'
        },
    },
    rowHeight : 40,
    height: 1200,
    columns: [
        { type: 'number', field: 'id', width: 5 , text: "No."}, 
        { type: 'name', field: 'order', width: 30, text: "Order" }, 
        { type: 'name', field: 'productLine', width: 100 , text: "Product Line" },
        { type: 'date', field: 'startDate', width: 110 , text: "SSD" },
        { type: 'number', field: 'duration', width: 30 , text: "Cantidad" },
        { type: 'date', field: 'startDate', width: 110 , text: "Start Date" },
        { type: 'date', field: 'endDate', width: 110 , text: "End Date" },
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