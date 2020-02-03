import React, { Component } from 'react'

import GlobalStyle from '../../styled/global.styles'

import { AppWrapper } from './App.styles'
import Container from '../Container/Container'
import FormHandler from '../CustomerForm/CustomerForm'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppWrapper>
                    <Container />
                    <FormHandler />
                </AppWrapper>
                <GlobalStyle />
            </React.Fragment>
        )
    }
}

export default App
