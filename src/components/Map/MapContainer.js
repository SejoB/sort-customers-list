import React, { Component } from 'react'
import axios from 'axios'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


const mapApi = process.env.REACT_APP_KEY_MAP_API
const mapGeoApi = process.env.REACT_APP_KEY_MAP_GEO_API


class MapContainer extends Component {

  state = {
    center: {
      lat: '',
      lng: '',

    }
  }


  // componentDidMount(){
  //     const url = 'https://maps.googleapis.com/maps/api/geocode/json'
  //     axios.get(url, {
  //                     params: {
  //                       address: "1600 Amphitheatre Parkway, Mountain View, CA",
  //                       key: mapGeoApi
  //                     }
  //     })
  //           .then((res) => {console.log(res)})

  //     }

  render() {
    return (
      <Map
        google={this.props.google}
        center={{
          lat: 40.854885,
          lng: -88.081807
        }}
        zoom={13}
        onClick={this.onMapClicked}
      />
    );
  }
}


export default GoogleApiWrapper({
  apiKey: (mapApi)
})(MapContainer)