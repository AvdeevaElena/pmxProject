import TutorialDataService from "../services/tutorial.service";
import React, {Component} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { columnDefs, defaultColDef } from "../Columns/columns";
import GridComponents from "./";

import { uuid } from "uuidv4";
import "../../src/App.css";
import axios from 'axios';
import "../test.json";
import {gridStyleHeader, gridStyleContent} from  './gridsStyle.js';
import { Layout, Menu } from 'antd';


const { Header } = Layout;
const frameworkComponents = {
    simpleEditor: GridComponents.SimpleEditor,
    asyncValidationEditor: GridComponents.AsyncValidationEditor,
    autoCompleteEditor: GridComponents.AutoCompleteEditor,
    agDateInput: GridComponents.MyDatePicker,
    dateEditor: GridComponents.DateEditor,
    actionsRenderer: GridComponents.ActionsRenderer,
    addRowStatusBar: GridComponents.AddRowStatusBar
  }
 
class TestTable extends Component {
   

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
      "https://avdeevaelena.github.io/json/spisokPacientov.json"
    ).then(res => res.json())
     .then(data => {
       const musicList = data.slice(0, 8);
       this.setState({setRowData: musicList });
     });
  }

  


  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
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
             <h3 style={{ color: '#4B9B00', textAlign: 'center' }}> Список Пациентов </h3> 
        <div id="myGrid" style={{  height: "50%", width: "100%",  paddingLeft: "15px" }} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={rowData}
            getRowNodeId={data => data.id}
            onGridReady={this.onGridReady}
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
export default TestTable;