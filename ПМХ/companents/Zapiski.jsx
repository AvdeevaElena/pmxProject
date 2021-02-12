import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {gridStyleHeader, gridStyleContent} from  './style/grids/gridsStyle.js';
import { Layout, Menu } from 'antd';
import {UserOutlined,
 NotificationOutlined
} from '@ant-design/icons';
import { DataGrid} from '@material-ui/data-grid';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const sliderStyle = {
  position: "relative",
  width: "100%"
};
  
class Zapiski extends React.Component {
    state = {
      infoList: []
      };
        componentDidMount() {
          axios.get(`https://avdeevaelena.github.io/json/30.json`)
          .then(res => {
            const infoList = res.data;
            this.setState({ infoList });
          }) 
          }
        render() {    
         const centered = {position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'};
          const rows = this.state.infoList;
          const columns = [
            { field: 'id', headerName: 'id', width: 130 }, 
            { field: 'date', headerName: 'Плановая дата', width: 230 },
            { field: 'name', headerName: 'Пациент', width: 130 },
            { field: 'name2', headerName: 'Исполнитель', width: 130 },
            { field: 'date2', headerName: 'Фактическая дата', width: 200 },
            { field: 'status', headerName: 'Статус', width: 200 }
          ];
        return (
          <Layout>
          <Header style={gridStyleHeader}>
      <div className="logo" />
      <h1 style={{ color: 'white' }}> Первый московский хоспис </h1> 
    </Header>
      <Layout>
        <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Пациенты">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Новости">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
        </Sider>
        <Content   style={gridStyleContent}>
        <div style={{ height: 300, width: '100%' }}>
             <h1 style={{ color: '#4B9B00' }}> Записки </h1> 
              <DataGrid rows={rows} columns={columns} />
            </div>
        </Content>
      </Layout>
      <Footer>Адрес Телфон</Footer>
    </Layout>
        )
  }
   }
   export default Zapiski;