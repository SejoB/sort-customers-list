import React, { Component } from 'react'
import axios from 'axios'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


const mapApi = process.env.REACT_APP_KEY_MAP_API
const mapGeoApi = process.env.REACT_APP_KEY_MAP_GEO_API


class MapContainer extends Component {

  state = {
    center: {},
  }


  componentDidMount() {
    this.getLatLng()
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.getLatLng()
    }
  }

  getLatLng() {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    axios.get(url, {
      params: {
        address: this.props.location,
        key: mapGeoApi
      }
    })
      .then(res => res.data.results[0].geometry.location)
      .then(data => {
        this.setState({
          center: data
        })
      })
  }

  render() {
    const { center } = this.state
    return (
      <Map
        google={this.props.google}
        center={center}
        zoom={17}
      >
        <Marker position={center} />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: (mapApi)
})(MapContainer)