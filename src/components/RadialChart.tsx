import Chart from "react-apexcharts";

export default function DonutChart() {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Reçu", "En cours", "Entretien", "Rejeté"], // Légendes
    colors: ["#4CAF50", "#2196F3", "#FFC107", "#E91E63"], // Couleurs personnalisées
    plotOptions: {
      pie: {
        donut: {
          size: "60%", // Taille du trou
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "20px",
              color: "#000",
              fontWeight: "bold",
            },
            value: {
              show: true,
              fontSize: "18px",
              color: "#78909c",
              fontWeight: "bold",
            }
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"], // Couleur du texte sur chaque segment
      },
      dropShadow: {
        enabled: false,
        top: 2,
        left: 2,
        blur: 4,
        opacity: 0.5,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#333",
        useSeriesColors: false,
      },
      
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} candidats`, // Texte du tooltip
      },
    },
  };

  const series = [44, 55, 41, 17]; // Valeurs

  return (
    <div className="p-4">
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
}
