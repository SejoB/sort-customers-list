import React, { Component} from 'react'

import { ContWrapper, Header, MapCont, List, ListItem } from './Container.styles'
import MapContainer from '../Map/MapContainer'
// import  api from  "../../data/users.json"
const userAPI = "http://jsonplaceholder.typicode.com/users"



class Container extends Component {

   state = {
     list: []
   }
   
   // componentDidMount(){
   //    fetch(userAPI)
   //    .then(res => res.json())
   //    .then((data) => {data
   //       .sort((a, b) => a.name.localeCompare(b.name))
   //       // .map((name, i) => <ListItem key={i} name={name} />)
   //       this.setState({items: data});
   //       console.log(data)
 
   //   }
                     
   // )
   // }
   componentDidMount(){
      this.loadData()
   }

   loadData = () => {
      fetch(userAPI)
            .then((resp) => resp.json())
            .then((data) => {
              this.setState({
                  list: data
              })
            })
            .catch((err) => {
                  console.log(err)
            })
         }
   

   render(){
      const { list } = this.state
   return(
      <ContWrapper>
         <Header>Countries</Header>
         <Header>Cities</Header>
         <Header>Company</Header>
         <Header>Map</Header>
         <List>
             <ul>
             {list.map( item => 
               <ListItem list={this.state}>{item.name}</ListItem>)}
            </ul>
         </List>
         <List>
            <ul>
            {list.map( item => 
               <ListItem list={this.state}>{item.email}</ListItem>)}
            </ul>
         </List>
         <List>
            <ul>
            {list.map( item => 
               <ListItem list={this.state}>{item.website}</ListItem>)}
            </ul> 
         </List>
         <MapCont>
            {/* <MapContainer/> */}
         </MapCont>
      </ContWrapper>

   )
}}

export default Container