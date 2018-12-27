import React, { Component } from 'react'
import axios from 'axios'

import { ContWrapper, Header, MapCont, List, ListItem } from './Container.styles'
import MapContainer from '../Map/MapContainer'





class Container extends Component {

   state = {
      isLoading: 'Data loading...',
      isLoaded: false,
      countries: [],
      cities: [],
      companies: []
   }


   componentDidMount() {
      this.loadData()
   }



   loadData = () => {
      const clientsApi = "/data/clients.json"
      axios.get(clientsApi)
         .then((response) => response.data)
         .then((data) => {
            console.log(data)
            return {
               countries: this.sortData(data.Customers, 'Country', 'City', -1),
               cities: this.sortData(data.Customers, 'City', '', -1),
               companies: data.Customers
                  .map(a => a.CompanyName)
                  .sort((a, b) => {
                     if (a > b) return 1
                     if (a < b) return -1
                     return 0
                  })
            }
         })
         .then((customers) => {
            console.log(customers)
            this.setState(
               {
                  countries: customers.countries,
                  cities: customers.cities,
                  companies: customers.companies
               })
         })
         .catch((err) => { console.log(err) })
   }

   sortData = (data, resProp, sortProp, sortOrder = 1) => {
      let obj = {}
      data.forEach(i => {
         let k = i[resProp]
         if (k in obj) {
            obj[k].add(i[sortProp])
         } else {
            obj[k] = new Set()
         }
      })
      for (let n in obj) {
         obj[n] = Array.from(obj[n]).length
      }
      return Object.entries(obj).sort((a, b) => (a[1] - b[1]) * sortOrder).map(a => a[0])
   }


   render() {
      const { countries, cities, companies } = this.state
      return (
         <ContWrapper>
            <Header>Countries</Header>
            <Header>Cities</Header>
            <Header>Company</Header>
            <Header>Map</Header>
            <List>
               <ul>
                  {countries.map((country, key) => <ListItem key={key}>{country}</ListItem>)}
               </ul>
            </List>
            <List>
               <ul>
                  {/* {cities.map((city, key) => <ListItem key={key}>{city}</ListItem>)} */}
               </ul>
            </List>
            <List>
               <ul>
                  {/* {companies.map( (company, key) => <ListItem key={key}>{company}</ListItem>)} */}
               </ul>
            </List>
            <MapCont>
               {/* <MapContainer/> */}
            </MapCont>
         </ContWrapper>

      )
   }
}

export default Container