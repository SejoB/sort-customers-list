import React, { Component } from 'react';

import GlobalStyle from '../../styled/global.styles'

import { AppWrapper } from './App.styles'
import Container2 from '../Container/Container2'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppWrapper>
          <Container2/>
        </AppWrapper>
        <GlobalStyle/>
      </React.Fragment>
    );
  }
}

export default App;
