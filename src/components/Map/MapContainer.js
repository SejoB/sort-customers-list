import React, { Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'


class MapContainer extends Component {



   render() {
     
    
     return (
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}name={'Current location'} />
            {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
            </InfoWindow> */}
          </Map>
     );
   }
 }

 

 export default GoogleApiWrapper({
   apiKey: ('AIzaSyByiackICMxrPCI6fPEQAaiowCBcI0me7s')
 })(MapContainer)