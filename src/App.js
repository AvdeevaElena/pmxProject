import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import FirstList from './companents/FirstList';
import Clients from './companents/Clients';
import Zapiski from './companents/Zapiski';
import FirstPageAllNew from './companents/FirstPageAllNews';
import Kartochka from './companents/Kartochka';

import TestTable  from "./Components/testTable";
import ZapiskiTable  from "./Components/zapiskiTable";
import ZapiskiTableRole  from "./Components/zapiskiTableRole";



//import Navbar  from "./Components/Navbar";
import MenuBar from './Components/MenuBar';
//import TutorialsList from "./Components/tutorials-list.component";
import {Switch, Route, BrowserRouter} from "react-router-dom";
class App extends Component {
  render() {
    return (
       <BrowserRouter>
            
        <div style ={{backgraund:"green", marginTop:10, width: "100%",  height: "100%", display:"flex"}}>
            <MenuBar/>
            <Switch>
            <Route path="/FirstPageAllNew">
                <FirstPageAllNew/>
            </Route>
            <Route path="/Kartochka">
                <Kartochka/>
            </Route>
            <Route path="/FirstList">
                <FirstList/>
            </Route>
            <Route path="/Clients">
                <Clients/>
            </Route>
            <Route path="/Zapiski">
                <Zapiski/>
            </Route>
            <Route path="/TestTable">
                <TestTable/>
            </Route>
            <Route path="/ZapiskiTable">
                <ZapiskiTable/>
            </Route>
            <Route path="/ZapiskiTableRole">
                < ZapiskiTableRole/>
            </Route>
            </Switch>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;