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

 const mapApi = process.env.REACT_APP_KEY_MAP_API

 export default GoogleApiWrapper({
   apiKey: (mapApi)
 })(MapContainer)