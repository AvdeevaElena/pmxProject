import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {gridStyleHeader, gridStyleContent} from  './style/grids/gridsStyle.js';
import { Layout, Menu } from 'antd';
import {UserOutlined,NotificationOutlined} from '@ant-design/icons';
import { DataGrid } from '@material-ui/data-grid';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Clients extends React.Component {
    state = {
      infoList: [],
      collapsed: true
      };
        componentDidMount() {
          axios.get(`https://avdeevaelena.github.io/json/32.json`)
          .then(res => {
            const infoList = res.data;
            this.setState({ infoList  
            });
          }) 
          }
    render() {    
        const rows = this.state.infoList;
          const columns = [
            { field: 'id', headerName: 'id', width: 130 }, 
            { field: 'name', headerName: 'Фамилия', width: 230 },
            { field: 'nameS', headerName: 'Имя', width: 200 },
            { field: 'nameL', headerName: 'Отчество', width: 200 },
            { field: 'dateB', headerName: 'Дата рождения', width: 230 },
            { field: 'dateP', headerName: 'Дата поступления', width: 200 },
            { field: 'dateV', headerName: 'Дата выписки', width: 200 }
          ];
        return (
          <Layout>
          <Header style={gridStyleHeader}>
      <div className="logo" />
      <h1 style={{ color: 'white' }}> Первый московский хоспис </h1> 
    </Header>
      <Layout>
        <Content   style={gridStyleContent}>
        <div style={{ height: 300, width: '100%' }}>
             <h1 style={{ color: '#4B9B00' }}> Пациенты </h1> 
              <DataGrid rows={rows} columns={columns} />
            </div>
        </Content>
      </Layout>
      <Footer>Адрес Телфон</Footer>
    </Layout>
      );
    }
}
   export default Clients;