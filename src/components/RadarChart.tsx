import { useState } from "react";
import Chart from 'react-apexcharts'
export default function radarChart() {
    const [state] = useState({
      series: [14, 23, 21, 17, 15],
      options: {
        labels: ['Expériences', 'Formations', 'Langues', 'competences', 'Autres'],
        chart: {
              },
              stroke: {
                colors: ['#fff']
              },
              fill: {
                opacity: 0.8
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          });

            return (
      <Chart options={state.options} series={state.series} type="polarArea" height={350} />
  );
}