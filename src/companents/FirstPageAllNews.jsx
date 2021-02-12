
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

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Card, Col, Row, Divider } from 'antd';
import s from './FirstList.module.css';
import { styleCardNews, styleCardZapiski, styleCorpusTestGreen, styleCorpusTestRed, styleCardGreen, styleMedia, styleCardRed, styleCorpusTest} from  './style/grids/gridsStyle.js';

import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const sliderStyle = {
  position: "relative",
  width: "100%"
};
  


class FirstPageAllNews extends React.Component {
      // const [expanded, setExpanded] = React.useState(false);
        classes =  makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          width: "100%",
          minWidth: 700,
        },
        avatar: {
          backgroundColor: red[500],
        },
        title: {
          float: "left",
          fontSize: 14,
          marginTop: theme.spacing(2),
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
      }));


    state = {
      infoList: [],
      zapiskiList: [],
      newsList: [],
      age: 'yy',
      expanded : false,
      setExpanded: true
      };

      handleExpandClick = () => {
        this.state.setExpanded(!this.state.expanded);
      };

        componentDidMount() {
          axios.get("https://avdeevaelena.github.io/json/spisokZayavok.json")
          .then(res => {
            const infoList = res.data;
            this.setState({ infoList });
          }) 

          axios.get(`https://avdeevaelena.github.io/json/spisokZapisok.json`)
          .then(res => {
            const zapiskiList = res.data;
            this.setState({ zapiskiList });
          }) 

          axios.get(`https://avdeevaelena.github.io/json/spisokNews.json`)
          .then(res => {
            const newsList = res.data;
            this.setState({ newsList });
          }) 
    
          }
        render() {    
        // const centered = {position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'};
        
        
        const centered = {float: 'left', textAlign: 'left', paddingLeft: '0px'};
        const  rightCorner = {float: 'left',  position: 'relative', textAlign: 'left', paddingLeft: '0px'};
         const container = { position: 'relative', color: 'black', textAlign: 'left', float: 'left', paddingLeft: '0px'};
    
         const style2 = { display: 'flex', padding: '8px 8px 8px 8px', marginLeft:'10px'};
         const bigDiv =  {background: 'green', width: '100%', paddingBottom: '200px'};
         const leftDiv = {background: 'blue', float: 'left', width: '50%',  display: "flex"};
         const rightDiv = {background: 'red', float: 'right', width: '50%', display: "flex"};
         const stylenews = { display: 'block', padding: '8px 8px 8px 8px', marginLeft:'10px'};
         const zapiski = this.state.zapiskiList.map(s => {
            if (s.color == 'red')
            return (  
               <Card  style={styleCardRed}  bordered={true}>
               <div class="container" style={container}>
                 <div style={centered}>{s.content}</div>
                 </div>
               </Card>
            );
            if (s.color == 'green')
            return (  
               <Card  style={styleCardGreen}  bordered={true}>
               <div class="container" style={container}>
                 <div style={centered}>{s.content}</div>
                 </div>
               </Card>
            );
            else  return (  
              <Card  style={styleCardNews}  bordered={true}>
              <div class="container" style={container}>
                <div style={centered}>{s.content}</div>
                </div>
              </Card>
           );
          });


          const zapiskiByCorpusLeft = this.state.zapiskiList.map(s => {
            if (s.corpus == 'left' && s.color == 'green')
            return (  
              <Card  style={styleCorpusTestGreen}   bordered={true}>
              <div class="container" style={container}>
              <div style={rightCorner}> {s.totalZapisok}</div>
              <div style={centered}> {s.namepasient}</div>
                </div>
              </Card>
           );  
           if (s.corpus == 'left' && s.color == 'red')
           return (  
            <Card  style={styleCorpusTestRed}   bordered={true}>
            <div class="container" style={container}>
            <div style={rightCorner}> {s.totalZapisok}</div>
            <div style={centered}> {s.namepasient}</div>
              </div>
            </Card>
         );  
         });

          const zapiskiByCorpusLeftTest = this.state.zapiskiList.map(s => {
            if (s.corpus == 'left')
            return (  
              <Card className={this.classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={this.classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardMedia
                className={this.classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                 name
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
            
              </CardActions>
             
            </Card>
            );    
          });




          const zapiskiByCorpusRight = this.state.zapiskiList.map(s => {
            if (s.corpus == 'right' && s.color == 'green')
            {  return (  
               <Card  style={styleCorpusTestGreen}   bordered={true}>
               <div class="container" style={container}>
               <div style={rightCorner}> {s.totalZapisok}</div>
               <div style={centered}> {s.namepasient}</div>
                 </div>
               </Card>
            );  
            }
            if (s.corpus == 'right')
            {  return (  
               <Card  style={styleCorpusTestRed}   bordered={true}>
               <div class="container" style={container}>
               <div style={rightCorner}> {s.totalZapisok}</div>
               <div style={centered}> {s.namepasient}</div>
                 </div>
               </Card>
            );  
            }
          });





          const news = this.state.newsList.map(s => {
            return (  
               <Card  style={styleCardNews}  bordered={true}>
               <div class="container" style={container}>
                 <div style={centered}> {s.title}  {s.content}  {s.date}</div>
                 </div>
               </Card>
            );
          });

          const optionList = this.state.infoList.map(s => {
            return (  
               <option  value={10} bordered={true}>
                  {s.content}  {s.date}
                 </option>
            );
          });

        return (
          <Layout>
          <Header style={gridStyleHeader}>
      <div className="logo" />
      <h1 style={{ color: 'white' }}> Первый московский хоспис </h1> 
    </Header>
      <Layout>
      <Content   style={gridStyleContent}>
        <div style={{ height: 300, width: '100%' }}>
             <h1 style={{ color: '#4B9B00' }}>Заглавная -  Акктуальные события </h1> 
             <h3 style={{ color: '#4B9B00' }}>Новости </h3> 
             <div style={stylenews}> 
                   {news}
               </div>

           
               <h3 style={{ color: '#4B9B00' }}>Записки по корпусам</h3> 
               <div  style={bigDiv} > 
                <div style={leftDiv}> 
                 {zapiskiByCorpusLeft}
                </div>
                <div style={rightDiv}> 
                   {zapiskiByCorpusRight}
                </div>
               </div>

               <h3 style={{ color: '#4B9B00' }}>Записки </h3> 
             <div style={style2}> 
                   {zapiski}
            </div>
               <h3 style={{ color: '#4B9B00' }}>Заявки </h3>     
        <FormControl style={{ width: '700px',  backgroundColor: "white" }} variant="outlined" className={this.classes.formControl}>
        
        <InputLabel htmlFor="filled-age-native-simple">Заявки</InputLabel>
        <Select
          native
          value={this.state.age}
         // onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {optionList}
        </Select>
      </FormControl>
        </div>
        </Content>
      </Layout>
      <Footer>Адрес Телфон</Footer>
    </Layout>
        )
  }
   }
   export default FirstPageAllNews;

   /*
    <h3 style={{ color: '#4B9B00' }}>Записки по корпусам Test</h3> 
               <div  style={bigDiv} > 
                <div style={leftDiv}> 
               
                 {zapiskiByCorpusLeftTest}
               
               
                </div>
                <div style={rightDiv}> 
                   {zapiskiByCorpusRight}
                </div>
               </div>

   */