import React, { Component } from 'react'
import { getCustomers, deleteCustomer } from '../../API/API'
import { ContWrapper, Header, Container, List, ListItem } from './Container.styles'
import MapContainer from '../Map/MapContainer'
import Card from '../CustomerCard/CustomerCard'
import { sortData, groupeCities, groupeCompanies, filterCustomerData } from '../../utils'
class MainContainer extends Component {
	state = {
		countries: [],
		cities: [],
		companies: [],
		getLocation: '',
		isToggle: true,
		customerCard: [],
		companyName: ''
	}
	componentDidMount() {
		this.loadData()
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.companyName !== this.state.companyName) {
			this.loadCustomerData()
		}
	}
	loadData = () => {
		getCustomers()
			.then(data => {
				return this.sortingData(data)
			})
			.then(customers => {
				return this.initialData(customers)
			})
			.catch(err => {
				console.log(err)
			})
	}
	sortingData = data => {
		if (data) {
			return {
				countries: sortData(data, 'Country', 'City', -1),
				cities: groupeCities(data),
				companies: groupeCompanies(data),
				data: data
			}
		}
	}
	initialData = customers => {
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
			getLocation: this.renderMapContainer(customers.companies[firstCities[0]][0]),
			companyName: customers.companies[firstCities[0]][0]
		})
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
			console.log(this.customers.companies[e.target.innerHTML])
			this.setState({
				companies: this.renderListCompanies(this.customers.companies[e.target.innerHTML])
			})
		}
	}
	getCustomerDetails = e => {
		e.persist()
		if (e.target) {
			let tmp
			for (let i = 0; i < this.customers.data.length; i++) {
				tmp = this.customers.data[i]
				if (tmp.CompanyName === e.target.innerHTML) {
					this.setState({
						getLocation: this.renderMapContainer(tmp.CompanyName),
						companyName: tmp.CompanyName
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
				<ListItem key={key} onClick={this.getCustomerDetails}>
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
				let location = [
					tmp.Address,
					tmp.Region,
					tmp.City,
					tmp.PostalCode,
					tmp.Country
				].join(',')
				return <MapContainer location={location} />
			}
		}
	}
	toggleMapHandler = () => {
		this.setState({
			isToggle: true
		})
	}
	toggleCardHandler = () => {
		this.setState({
			isToggle: false
		})
		this.loadCustomerData()
	}
	loadCustomerData = () => {
		const companyName = this.state.companyName
		const getCustomer = this.customers.data.find(i => i.CompanyName === companyName)
		this.setState({
			customerCard: filterCustomerData(getCustomer)
		})
	}
	deleteCustomerHandler = () => {
		const companyName = this.state.companyName
		deleteCustomer(companyName).then(data => console.log(data))
		this.loadData()
	}
	editCustomerHandler = () => {
		console.log('click')
	}
	render() {
		const { countries, cities, companies, getLocation, isToggle, customerCard } = this.state
		return (
			<ContWrapper>
				<Header>Countries</Header>
				<Header>Cities</Header>
				<Header>Company</Header>
				<Header>
					<button onClick={this.toggleMapHandler}>map</button>
					<button onClick={this.toggleCardHandler}>card</button>
				</Header>
				<List>{countries}</List>
				<List>{cities}</List>
				<List>{companies}</List>
				<Container>
					{isToggle ? (
						<div></div>
					) : (
						// <MapContainer location={getLocation} />
						<>
							<Card data={customerCard} />
							<button onClick={this.deleteCustomerHandler}>delete</button>
							<button onClick={this.editCustomerHandler}>edit</button>
						</>
					)}
				</Container>
			</ContWrapper>
		)
	}
}

export default MainContainer
