import React, { Component } from 'react'
import axios from 'axios'

import { ContWrapper, Header, MapCont, List, ListItem } from './Container.styles'
import MapContainer from '../Map/MapContainer'

class Container extends Component {

   
   state = {
      countries: [],
      cities: [],
      companies: [],
   }

   componentDidMount() {
      this.loadData()
   }

   loadData = () => { 
      const clientsApi = "/data/clients.json"
      axios.get(clientsApi)
         .then((response) => response.data)
         .then((data) => {
            const arrCountry = this.sortData(data.Customers, 'Country', 'City', -1)
            return {
               countries: arrCountry,
               cities: this.groupeCities(data.Customers),
               companies: data.Customers
                  .map(a => a.CompanyName)
                  .sort((a, b) => {
                     if (a > b) return 1
                     if (a < b) return -1
                     return 0
                  }),
            }
         })
         .then((customers) => {
            let firstCountry = customers.countries[0][0]
            console.log(customers.companies)
            this.setState(
               {
                  countries:  this.renderListCountries(customers.countries),
                  cities:     this.renderListCities(customers.cities[firstCountry]),
                  companies:  customers.companies
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
      obj = Object.entries(obj)
      obj.sort((a, b) => (a[1] - b[1])*sortOrder)
      return obj
   }

   groupeCities = (data) => {
      const arrCities = this.sortData(data, 'City', 'Company', -1)
      let obj = {}
      data.forEach(i => {
         let k = i['Country'],
             j = i['City']
         if (k in obj){
            obj[k].add(j)
         } else {
            obj[k] = new Set() 
            obj[k].add(j)       
         }
      })
      for(let n in obj) {
         obj[n] = arrCities.filter(city => {
            return Array.from(obj[n]).includes(city[0])
         }).map(i => i[0])
      }
      return obj
   }

   renderListCities = (obj) => {
      return obj.map((a, key) => {
         return <ListItem key={key}>{a}</ListItem>})
   }
   renderListCountries = (obj) => {
      return obj.map((a, key) => {
         return <ListItem key={key}>{a[0]}</ListItem>})
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
                  { countries }
                  {/* {countries.map((country, key) => <ListItem key={key}>{country}</ListItem>)} */}
               </ul>
            </List>
            <List>
               <ul>
                  { cities }
                  {/* {cities.map((city, key) => <ListItem key={key}>{city}</ListItem>)} */}
               </ul>
            </List>
            <List>
               <ul>
                  {companies.map((company, key) => <ListItem key={key}>{company}</ListItem>)}
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