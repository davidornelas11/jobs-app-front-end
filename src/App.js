import React, { Component } from 'react'
import Chart from './components/Chart'
import Navbar from './components/Navbar'
import axios from 'axios'

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

    }
  }

  // componentDidMount() {
  //   axios.get('https://jobs-api-project-4.herokuapp.com/states')
  //   .then(res => res.data)
  //   .then(data => console.log(iterateOverstates(data)))
  // }
  render() {
    return (
      <div className='App'>
        <Navbar />

        <Chart />
      </div>
    )
  }
}

