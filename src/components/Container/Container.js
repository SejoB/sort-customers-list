import React from 'react'

import { ContWrapper, Header, MapCont, List, ListItem } from './Container.styles'
import MapContainer from '../Map/MapContainer'

const Container = () => {

   return(
      <ContWrapper>
         <Header>Countries</Header>
         <Header>Cities</Header>
         <Header>Company</Header>
         <Header>Map</Header>
         <List>
            <ul>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
               <ListItem>Brazil</ListItem>
            </ul>
            
         </List>
         <List>
         
         </List>
         <List>

         </List>
         <MapCont>
            <MapContainer/>
         </MapCont>
      </ContWrapper>

   )
}

export default Container