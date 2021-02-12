import React from 'react';
import axios from 'axios';
class CreateZapiska extends React.Component {
    //   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
       state = {
          zapiskaList: []
         };
         componentDidMount() {
         axios.get(`https://avdeevaelena.github.io/json/pmx.json`)
         .then(res => {
           const zapiskaList = res.data;
           this.setState({ zapiskaList });
         }) 
         }
   
          render() {    
           const centered = {position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'};
           
           const container = { position: 'relative', textAlign: 'center', color: 'black'};
           //let info = this.state.zapiskaList.map(it => it.title);
           //let picture = this.state.zapiskaList.map(it => it.url);
           const playList = this.state.zapiskaList.map(data => {
             return (  
                <Card  style={styleCard}  bordered={true}>
                <div class="container" style={container}>
                  <img   title={data.title}  className={s.mainPhoto} alt={data.title} src={data.url} />
                  <div style={centered}>{data.title}</div>
                  </div>
                </Card>
             );
           });
           
           const style2 = { display: 'flex', padding: '8px 8px 8px 8px', marginLeft:'10px'};
           const { activeItem } = this.state
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
   export default CreateZapiska;