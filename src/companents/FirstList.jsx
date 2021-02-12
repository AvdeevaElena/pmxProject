import React from 'react';
import axios from 'axios';
import { Card, Col, Row, Divider } from 'antd';
import s from './FirstList.module.css';
import { styleCard} from  './style/grids/gridsStyle.js';
import PmxNews from './PmxNews';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import HouseIcon from '@material-ui/icons/House';
import IconButton from '@material-ui/core/IconButton';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';

  class FirstList extends React.Component {
 //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    state = {
        musicList: [],
        currentSong: null,
        music: "stopped"
      };
      componentDidMount() {
      axios.get(`https://avdeevaelena.github.io/json/pmx.json`)
      .then(res => {
        const musicList = res.data;
        this.setState({ musicList });
      }) 
      }

       render() {    
        const centered = {position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'};
        
        const container = { position: 'relative', textAlign: 'center', color: 'black'};
        //let info = this.state.musicList.map(it => it.title);
        //let picture = this.state.musicList.map(it => it.url);
        const playList = this.state.musicList.map(song => {
          return (  
             <Card  style={styleCard}  bordered={true}>
             <div class="container" style={container}>
               <img   title={song.title}  className={s.mainPhoto} alt={song.title} src={song.url} />
               <div style={centered}>{song.title}</div>
               </div>
             </Card>
          );
        });
        const style2 = { display: 'flex', padding: '8px 8px 8px 8px', marginLeft:'10px'};
        return (
          <div >
             <div >
            <h1 > ПМХ </h1> 
            </div>
           <div style={style2}> 
                {playList}
            </div>
            <div >
            <PmxNews/> 
            </div>
            <div style={style2}>
             <Button variant="info">Новая записка</Button>{' '}
             <Button variant="info">Новая заявка</Button>{' '}
               </div>
            <div style={style2}>
            <Nav.Item>
    <Nav.Link href="/home">Домой</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Графики</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Докумениы</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">О нас</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <IconButton color="primary" aria-label="upload picture" component="span">
          < HouseIcon />
        </IconButton>
  </Nav.Item>
  <Nav.Item>
    <IconButton color="primary" aria-label="upload picture" component="span">
          < EventNoteRoundedIcon />
        </IconButton>
  </Nav.Item>
  <Nav.Item>
    <IconButton color="primary" aria-label="upload picture" component="span">
          < FolderOpenRoundedIcon />
        </IconButton>
  </Nav.Item>
  <Nav.Item>
    <IconButton color="primary" aria-label="upload picture" component="span">
          < ErrorOutline />
        </IconButton>
  </Nav.Item>
            </div>    
    </div> 
        )
  }
}
export default FirstList;
