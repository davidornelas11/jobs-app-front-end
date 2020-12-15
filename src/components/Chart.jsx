import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['1', '2', '3', '4', '5', '6'],
                datasets: [
                    {
                        label: 'population',
                        data: [
                            4848,
                            546,
                            6644,
                            5464,
                            43,
                            4536
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                        ],
                        hoverBackgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)'
                        ],
                        barThickness: 'flex'
                        
                    }
                ]
            }
        }
    }

    render() {
        return (
            <>
                <div className='chart-container' style={{width:'150vh'}}>
                    <Bar
                        data={this.state.chartData}
                        options={{
                            maintainAspectRatio:true,
                            title:{display:true, text:'Jobs available by state'}
                        }} />
                </div>
            </>
        )
    }
}

export default Chart;