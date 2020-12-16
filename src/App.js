import React, { Component } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import Form from './components/Form'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {}
    }
  }

  

  getChartData(){
    this.setState({
      chartData:{}
    })
  }

  
  render() {
    return (
      <div className='App'>
        <Navbar />

        <Form />
      </div>
    )
  }
}

