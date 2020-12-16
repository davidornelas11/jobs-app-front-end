import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Button from '@material-ui/core/Button';

const iterateOverStates = (data) => {
    let list = []
    for (let i in data){
      list.push(i)
    }
    return list
  }


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s)  + ')';
}



class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStatesData: {},
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        data: [],
                        backgroundColor: ''
                        ,
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        hoverBackgroundColor: '',
                        barThickness: "flex"
                    }
                ]
            }
        }

    }
    

    applyLanguageData(data){
        if (data === ''){
            return [0]
        }
        let allStates = this.state.allStatesData
        let dataForChart = []
        for (let i in allStates){
            dataForChart.push(allStates[i][data])
        }
        let newAllStates = this.state.chartData
        newAllStates.datasets[0].data = dataForChart
        this.setState({newAllStates})
        let newColor = this.state.chartData.datasets[0]
        newColor.backgroundColor = random_rgba()
        newColor.hoverBackgroundColor = random_rgba()
        this.setState({newColor})
        
    }


    componentDidMount() {
        axios
            .get("https://jobs-api-project-4.herokuapp.com/states")
            .then((res) => res.data)
            .then((data) => {
                let allStates = this.state
                allStates.allStatesData = data
                this.setState({allStates})
                return iterateOverStates(data)
            })
            .then(states => {
                let newLabels = this.state.chartData;
                newLabels.labels = states;
                return this.setState({newLabels})
            })
    }

    render() {
        return (
            <>
                <div className="chart-container" style={{ width: "150vh" }}>
                    <Bar
                        data={this.state.chartData}
                        options={{
                            maintainAspectRatio: true,
                            title: { display: true, text: `${(this.props.language).toUpperCase()} JOBS AVAILABLE` },
                            legend: {
                                display: true,
                                position: "bottom",
                            },
                        }}
                    />
                    <Button variant='contained' color='primary' onClick={() => this.applyLanguageData(this.props.language)}>Generate new chart</Button>
                </div>
                
            </>
        );
    }
}

export default Chart;
