import axios from 'axios'

export const getCustomers = async () => {
    try {
        const response = await axios.get('/customers')
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const getCustomer = async () => {
    try {
        const response = await axios.get('/customers')
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const postCustomer = async customerData => {
    try {
        const response = await axios.post('/customers', customerData)
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const deleteCustomer = async () => {
    try {
        const response = await axios.delete('/customers/:id')
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
export const updateCustomer = async () => {
    try {
        const response = await axios.put('/customers/:id')
        const data = await response.data
        return data
    } catch (error) {
        console.log(error)
    }
}
