import { useState } from "react";
import Chart from 'react-apexcharts'


const RecrutmentChart = () => {
    const [state] = useState({
        options: {
            chart: {
            id: 'recrutement-chart',
            },
            grid: {
                show: true,
                borderColor: '#E0E0E0',
                strokeDashArray: 5,
            },
            xaxis: {
                categories: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
                labels: {
                    style: {
                        fontSize: '14px',
                        fontWeight: 'normal',
                        colors: '#75767C'
                    }
                },
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    style: {
                        fontSize: '14px',
                        fontWeight: 'normal',
                        colors: '#75767C'
                    }
                }, 
            },
            title: {
                text: 'Recrutement par semaine',
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#000'
                },
                left: 'left',
            },
            colors: ['#586090'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '60%',
                    borderRadius: 10,
                },
                
            },
            dataLabels: {
                enabled: false,
            },
        },
        series: [{
            name: 'candidats',
            data: [30, 40, 35, 50, 49, 60, 70],
        }]
    });

        return (
            <Chart options={state.options} series={state.series} type="bar" height={300} />
        );
      }




export default  RecrutmentChart;