import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Box from '@material-ui/core/Box'
import Footer from './components/Footer'

const DateExtracted = () => (
  <Box display="flex" flexDirection="column" alignItems="center" padding={1} margin={1}>
    <small><i>*Data was extracted 12/18/2020*</i></small>
  </Box>
)


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: true
    }
  }


  
  render() {
    return (
      <div className='App'>
        <Navbar />
        <DateExtracted />
        <Form />
      <Footer />
      </div>
    )
  }
}

