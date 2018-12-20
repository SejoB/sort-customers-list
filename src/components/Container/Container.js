import React from 'react'

import { ContWrapper, Header, MapCont } from './Container.styles'
import MapContainer from '../Map/MapContainer'

const Container = () => {

   return(
      <ContWrapper>
         <Header>Countries</Header>
         <Header>Cities</Header>
         <Header>Company</Header>
         <Header>Map</Header>
         <MapCont>
            <MapContainer/>
         </MapCont>
      </ContWrapper>

   )
}

export default Container