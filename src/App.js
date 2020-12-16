import React, { Component } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import Form from './components/Form'

// const iterateOverstates = (data) => {
//   const list = []
//   for (let i in data){
//     list.push(i)
//   }
//   return list
// }


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

