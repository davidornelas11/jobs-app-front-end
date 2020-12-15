import React, { Component } from 'react'
import Chart from './components/Chart'
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  render() {
    return (
      <div className='App'>
        <Navbar />

        <Chart />
      </div>
    )
  }
}

