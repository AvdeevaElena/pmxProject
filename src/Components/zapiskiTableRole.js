
import TutorialDataService from "../services/tutorial.service";
import React, {Component} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { columnDefs, defaultColDef } from "../Columns/columnsZapiskiRole";
import GridComponents from "./";

import { uuid } from "uuidv4";
import "../../src/App.css";
import axios from 'axios';
import "../test.json";
import {gridStyleHeader, gridStyleContent} from  './gridsStyle.js';
import { Layout, Menu } from 'antd';
import "./style.css";

const { Header } = Layout;
const frameworkComponents = {
    simpleEditor: GridComponents.SimpleEditor,
    asyncValidationEditor: GridComponents.AsyncValidationEditor,
    autoCompleteEditor: GridComponents.AutoCompleteEditor,
    agDateInput: GridComponents.MyDatePicker,
    dateEditor: GridComponents.DateEditor,
    actionsRenderer: GridComponents.ActionsRendererWithoutDelete,
    addRowStatusBar: GridComponents.AddRowStatusBar
  }
 
class ZapiskiTableRole extends Component {
   

       state = {
         infoList: [],
         setRowData: [],
         rowData: [],
         columnApi: [],
         setColumnApi: [],
         setGridApi: [],
         columnDefs: columnDefs,
         defaultColDef: defaultColDef,
         frameworkComponents: frameworkComponents
        };

        onGridReady = this.onGridReady.bind(this);

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }

 async  loadJSON (url) {
    var res = await fetch(url);
    return await res.json();
  }
   

  componentDidMount() {
    fetch(
      "https://avdeevaelena.github.io/json/spisokZapisok.json"
    ).then(res => res.json())
     .then(data => {
       const musicList = data.slice(0, 8);
       this.setState({setRowData: musicList });
     });
  }

  


  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        console.log("DAta Full color",response.data);
        this.setState({
          tutorials: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const rowData = this.state.setRowData;
    return (
        <div   style={{   width: "100%", background: "#C8DED6" }} >
          <Header style={gridStyleHeader}>
      <div className="logo" />
      <h1 style={{ color: 'white' }}> Первый московский хоспис </h1> 
    </Header>
             <h3 style={{ color: '#4B9B00', textAlign: 'center' }}> Список Записок Роль </h3> 
        <div id="myGrid" style={{  height: "50%", width: "100%",  paddingLeft: "15px" }} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={rowData}
            cellRenderer={function(params) {
              return '<a href="https://www.google.com" target="_blank" rel="noopener">'+ params.data.status+'</a>'
            }}
            getRowNodeId={data => data.id}
            onGridReady={this.onGridReady}
            rowClassRules={{
              'red-row': function (params){
                    console.log ("Цвета", params.data.color)
                if (params.data.color === 'red')
                return true;
              },
              'green-row': function (params){
                console.log ("Цвета", params.data.color)
                if (params.data.color === 'green')
                return true;
             },
             'yellow-row': function (params){
              console.log ("Цвета", params.data.color)
              if (params.data.color === 'yellow')
              return true;
           },
            }}
            frameworkComponents={frameworkComponents}
            editType="fullRow"
            suppressClickEdit
            statusBar={{
              statusPanels: [{ statusPanel: "addRowStatusBar" }]
            }}
          />
            </div>
      </div>
    );
  }
}
export default ZapiskiTableRole;