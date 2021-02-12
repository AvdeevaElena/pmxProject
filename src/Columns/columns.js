//import { OLYMPIC_SPORTS, OLYMPIC_COUNTRIES } from "./olympic_lists.js";

export const columnDefs = [
  {
    headerName: "id",
    field: "id",
    cellEditor: "simpleEditor"
  },
  {
    headerName: "Фамилия",
    field: "nameS",
    cellEditor: "simpleEditor"
  },
  {
    headerName: "Имя",
    field: "nameN",
    cellEditor: "simpleEditor"
  },
  {
    headerName: "Отчество",
    field: "nameL",
    cellEditor: "simpleEditor"
  },

  {
    headerName: "Дата рождения",
    field: "dateB",
    cellEditor: "dateEditor",
    filter: "agDateColumnFilter",
    filterParams: {
      clearButton: true,
      suppressAndOrCondition: true,
      comparator: function(filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      }
    }
  },
  {
    headerName: "Дата Поступления",
    field: "dateB",
    cellEditor: "dateEditor",
    filter: "agDateColumnFilter",
    filterParams: {
      clearButton: true,
      suppressAndOrCondition: true,
      comparator: function(filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      }
    }
  },
  {
    headerName: "Дата Выписки",
    field: "dateV",
    cellEditor: "dateEditor",
    filter: "agDateColumnFilter",
    filterParams: {
      clearButton: true,
      suppressAndOrCondition: true,
      comparator: function(filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(
          Number(dateParts[2]),
          Number(dateParts[1]) - 1,
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      }
    }
  },
  {
    headerName: "Действия",
    colId: "actions",
    cellRenderer: "actionsRenderer",
    editable: false,
    filter: false,
    minWidth: 220
  }
  
];

export const defaultColDef = {
  editable: true,
  resizable: true,
  filter: true,
  floatingFilter: true,
  suppressKeyboardEvent: params => params.editing
};
