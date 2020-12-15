import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const iterateOverstates = (data) => {
    const list = []
    for (let i in data){
      list.push(i)
    }
    return list
  }

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        data: [4848, 546, 6644, 5464, 43, 4536],
                        backgroundColor: random_rgba()
                            // function(context){
                            //     var index = context.dataIndex;
                            //     var value = context.dataset.data[index];
                            //     const color = random_rgba()
                            //     return color
                            // }
                        ,
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        hoverBackgroundColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                            "rgba(255, 99, 132, 1)",
                        ],
                        barThickness: "flex",
                    },
                ],
            },
        };
    }

    componentDidMount() {
        axios
            .get("https://jobs-api-project-4.herokuapp.com/states")
            .then((res) => res.data)
            .then((data) => iterateOverstates(data))
            .then(states => {
                let newLabels = this.state.chartData;
                newLabels.labels = states;
                this.setState({newLabels})
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
                            title: { display: true, text: "Jobs available by state" },
                            legend: {
                                display: true,
                                position: "right",
                            },
                        }}
                    />
                </div>
            </>
        );
    }
}

export default Chart;
