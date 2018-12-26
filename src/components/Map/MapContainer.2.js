// import React, { Component} from 'react'
// import Geocode from 'react-geocode'

// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'



// Geocode.fromAddress("Paris")
//       .then(response => { console.log(response)
//       // const { lat, lng } = response.results[0].geometry.location
//       // console.log(lat, lng)
//     },
//     error => {
//       console.error(error);
//     }
//   );


// class MapContainer extends Component {

//   state= {
//     center: {
//       lat: '',
//       lng: ''
//     }
//   }

// // componentDidMount(){
// //   Geocode.fromAddress("Paris")
// //       .then(res => { console.log(res)
// //       // const { lat, lng } = response.results[0].geometry.location
// //       // console.log(lat, lng)
// //     },
// //     error => {
// //       console.error(error);
// //     }
// //   );
// // }
//     render() {
//       return (
//             <Map
//                 google={this.props.google}
//                 center={{
//                   lat: 40.854885,
//                   lng: -88.081807
//                 }}
//                 zoom={13}
//                 onClick={this.onMapClicked}
//             />
//       );
//     }
//  }


//  const mapApi = process.env.REACT_APP_KEY_MAP_API
//  const mapGeoApi = process.env.REACT_APP_KEY_MAP_GEO_API

//  Geocode.enableDebug()
//  Geocode.setApiKey(mapGeoApi)
  
 

//  export default GoogleApiWrapper({
//    apiKey: (mapApi)
//  })(MapContainer)