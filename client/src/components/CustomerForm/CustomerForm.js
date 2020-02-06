import React, { useState } from 'react'
import { postCustomer } from '../../API/API'
import { Form, Input, Label, ButtonContainer, Button, OpenFormIcn, CloseFormIcn } from './CustomerForm.styles'

const FORM_LABELS = ['Company Name', 'Contact Name', 'Contact Title', 'Address', 'City', 'Postal Code', 'Country']

const customerObject = () => {
    let tmpArr = []
    FORM_LABELS.forEach((i, key) => {
        const nameObj = i.replace(/\s/g, '')
        const inputField = {
            name: [nameObj],
            label: i,
            value: ''
        }
        tmpArr.push({ id: key, inputField })
    })
    return tmpArr
}
const CustomerForm = () => {
    const [showForm, setShowForm] = useState('none')
    const [customerForm, setCustomerForm] = useState(customerObject())
    const inputChangedHandler = (event, inputId) => {
        const updatedInput = [...customerForm]
        updatedInput[inputId].inputField.value = event.target.value
        setCustomerForm(updatedInput)
    }
    const formSubmitHandler = event => {
        event.preventDefault()
        const formData = {}
        customerForm.forEach(element => {
            formData[element.inputField.name] = customerForm[element.id].inputField.value
        })
        postCustomer(formData)
        setCustomerForm(customerObject)
        setShowForm('none')
    }

    return (
        <>
            <Form method='post' onSubmit={formSubmitHandler} displayForm={showForm}>
                <CloseFormIcn onClick={() => setShowForm('none')} />
                {customerForm.map(formField => {
                    return (
                        <Label key={formField.id}>
                            {formField.inputField.label}
                            <Input type='text' name={formField.inputField.name} value={formField.inputField.value} onChange={event => inputChangedHandler(event, formField.id)} required />
                        </Label>
                    )
                })}
                <ButtonContainer>
                    <Button type='submit' value='Submit' />
                    <Button type='reset' value='Reset' />
                </ButtonContainer>
            </Form>
            <OpenFormIcn onClick={() => setShowForm('flex')} />
        </>
    )
}

export default CustomerForm
