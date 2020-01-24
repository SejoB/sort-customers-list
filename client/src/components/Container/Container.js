import React, { Component } from 'react'
import axios from 'axios'

import { ContWrapper, Header, MapCont, List, ListItem } from './Container.styles'
import MapContainer from '../Map/MapContainer'

class Container extends Component {
    state = {
        countries: [],
        cities: [],
        companies: [],
        getLocation: ''
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = () => {
        axios
            .get('/api/customers')
            .then(response => response.data)
            .then(data => {
                return {
                    countries: this.sortData(data, 'Country', 'City', -1),
                    cities: this.groupeCities(data),
                    companies: this.groupeCompanies(data),
                    data: data
                }
            })
            .then(customers => {
                this.customers = {
                    cities: customers.cities,
                    companies: customers.companies,
                    data: customers.data
                }
                let firstCountry = customers.countries[0][0],
                    firstCities = customers.cities[firstCountry]
                this.setState({
                    countries: this.renderListCountries(customers.countries),
                    cities: this.renderListCities(firstCities),
                    companies: this.renderListCompanies(customers.companies[firstCities[0]]),
                    getLocation: this.renderMapContainer(customers.companies[firstCities[0]][0])
                })
            })
            .catch(err => {
                console.log(err)
            })
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
        obj.sort((a, b) => (a[1] - b[1]) * sortOrder)
        return obj
    }
    groupeCities = data => {
        const arrCities = this.sortData(data, 'City', 'Company', -1)
        let obj = {}
        data.forEach(i => {
            let k = i['Country'],
                j = i['City']
            if (k in obj) {
                obj[k].add(j)
            } else {
                obj[k] = new Set()
                obj[k].add(j)
            }
        })
        for (let n in obj) {
            obj[n] = arrCities
                .filter(city => {
                    return Array.from(obj[n]).includes(city[0])
                })
                .map(i => i[0])
        }
        return obj
    }
    groupeCompanies = data => {
        let obj = {}
        data.forEach(i => {
            let k = i['City'],
                j = i['CompanyName']
            if (k in obj) {
                obj[k].add(j)
            } else {
                obj[k] = new Set()
                obj[k].add(j)
            }
        })
        let tmp
        for (let n in obj) {
            tmp = Array.from(obj[n])
            tmp.sort((a, b) => {
                if (a > b) return 1
                if (a < b) return -1
                return 0
            })
            obj[n] = tmp
        }
        return obj
    }
    showCitiesHandler = e => {
        e.persist()
        if (e.target) {
            this.setState({
                cities: this.renderListCities(this.customers.cities[e.target.innerText])
            })
        }
    }
    showCompaniesHandler = e => {
        e.persist()
        if (e.target) {
            this.setState({
                companies: this.renderListCompanies(this.customers.companies[e.target.innerHTML])
            })
        }
    }
    getLocationHandler = e => {
        e.persist()
        if (e.target) {
            let tmp
            for (let i = 0; i < this.customers.data.length; i++) {
                tmp = this.customers.data[i]
                if (tmp.CompanyName === e.target.innerHTML) {
                    this.setState({
                        getLocation: this.renderMapContainer(tmp.CompanyName)
                    })
                }
            }
        }
    }
    renderListCountries = obj => {
        return obj.map((a, key) => {
            return (
                <ListItem key={key} onClick={this.showCitiesHandler}>
                    {a[0]}
                </ListItem>
            )
        })
    }
    renderListCities = obj => {
        return obj.map((a, key) => {
            return (
                <ListItem key={key} onClick={this.showCompaniesHandler}>
                    {a}
                </ListItem>
            )
        })
    }
    renderListCompanies = obj => {
        return obj.map((a, key) => {
            return (
                <ListItem key={key} onClick={this.getLocationHandler}>
                    {a}
                </ListItem>
            )
        })
    }
    renderMapContainer = company => {
        let tmp
        for (let i = 0; i < this.customers.data.length; i++) {
            tmp = this.customers.data[i]
            if (tmp.CompanyName === company) {
                let location = [tmp.Address, tmp.Region, tmp.City, tmp.PostalCode, tmp.Country].join(',')
                return <MapContainer location={location} />
            }
        }
    }
    render() {
        const { countries, cities, companies, getLocation } = this.state
        return (
            <ContWrapper>
                <Header>Countries</Header>
                <Header>Cities</Header>
                <Header>Company</Header>
                <Header>Map</Header>
                <List>{countries}</List>
                <List>{cities}</List>
                <List>{companies}</List>
                <MapCont>{getLocation}</MapCont>
            </ContWrapper>
        )
    }
}

export default Container
