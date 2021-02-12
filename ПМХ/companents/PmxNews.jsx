import React from 'react';
import axios from 'axios';
import { Card, Col, Row, Divider } from 'antd';
import { styleCard} from  './style/grids/gridsStyle.js';
const { Meta } = Card;

  class  PmxNews extends React.Component {
    state = {
        newsList: []
      };
      componentDidMount() {
        axios.get(`https://avdeevaelena.github.io/json/pmx.json`)
        .then(res => {
          const musicList = res.data;
          this.setState({ musicList });
        }) 
        }
  
       render() {    
       
        const newsList = this.state.newsList.map(song => {
          return (  
             <Card  style={styleCard}  bordered={true}>
               <div >{song.news}</div>
             </Card>
          );
        });
        
        const style2 = { display: 'flex', padding: '8px 0' };
    
        return (
          <div >
                {newsList} 
    </div> 
        )
  }
}
export default PmxNews;