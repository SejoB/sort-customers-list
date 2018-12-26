import React, { Component} from 'react'
import MapContainer from './MapContainer';



const  INITIAL_LOCATION = {
  address: "",
  position: {
    latitude: 51.5,
    longitude: -0.12
  }
}
const INITIAL_MAP_ZOOM_LEVEL = 8

class Map extends Component(){

  getInitialState = () => {
    return { 
      isGeocodingError: false,
      foundAddress: INITIAL_LOCATION.address }
  }

  componentDidMount() {
    this.loadMap()
  }
  loadMap = () => {
    this.map = new googleMaps.Map(this.mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }

    })

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    })
    this.geocoder = new google.maps.Geocoder()
  }
  addressHandler = () => {

  }


  render(){
    return(
      <MapContainer/>
    )
  }
}

export default Map
