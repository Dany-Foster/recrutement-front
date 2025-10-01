import { useState } from "react";
import Chart  from "react-apexcharts";

interface props  {
  score: number,
  title?: string,
  height?: number,
  width?: number,
}


export default function RadialBarScore({score, title, height, width}: props){
    const [state] = useState({
            series: [score],
            options: {
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "70%",
                  },
                pie: {
                  donut: {
                    size: "70%",
                    labels: {
                      show: true,
                      total: { show: true, label: "Score Global" },
                    },
                  },
                },
                  dataLabels: {
                    name: {
                      fontSize: '12px',
                      fontweight: 'bold',
                      color: '#000000',
                    },
                  }
                },
              },
              labels: [`${title ? title : "Score"}`],
            },
        });
  return (
    <Chart options={state.options} series={state.series} type="radialBar" height={height} width={width}/>
  )
}