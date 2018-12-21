import React, { Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

const mapApiKey = process.env.GOOGLE_MAP_API_KEY

class MapContainer extends Component {



   render() {
    
     return (
          <Map google={this.props.google} zoom={14}>
            {/* <Marker onClick={this.onMarkerClick}name={'Current location'} /> */}
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
   apiKey: (mapApiKey)
 })(MapContainer)