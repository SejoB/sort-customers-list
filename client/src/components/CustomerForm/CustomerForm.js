import React from 'react'
import { Container, Input, Label, ButtonContainer, Button } from './CustomerForm.styles'

const CustomerForm = () => {
    return (
        <Container method='post' action=''>
            <Label>
                Company Name
                <Input type='text' name='CompanyName' autoComplete='off' required />
            </Label>
            <Label>
                Contact Name
                <Input type='text' name='ContactName' autoComplete='off' required />
            </Label>
            <Label>
                Contact Title
                <Input type='text' name='ContactTitle' autoComplete='off' required />
            </Label>
            <Label>
                Address
                <Input type='text' name='Address' autoComplete='off' required />
            </Label>
            <Label>
                City
                <Input type='text' name='City' autoComplete='off' required />
            </Label>
            <Label>
                Postal Code
                <Input type='text' name='PostalCode' autoComplete='off' required />
            </Label>
            <Label>
                Country
                <Input type='text' name='Country' autoComplete='off' required />
            </Label>
            <ButtonContainer>
                <Button type='submit' value='Submit' />
                <Button type='reset' value='Reset' />
            </ButtonContainer>
        </Container>
    )
}

export default CustomerForm
