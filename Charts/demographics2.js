Chart.register(ChartDataLabels);

var ctx = document.getElementById("doughnut2");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Metropolitan City",
      "Small City",
      "Town",
      "Village"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [96, 91, 57, 36],
        borderWidth: 1,
        backgroundColor: [
          
          '#4C6E58', // muted green
          '#779CAB', // desaturated blue
          '#DDBEA9', // warm tan
          '#B5838D'
          // "#4F7793",
          // "#7092AA",
          // "#89A6BB",
          // "#A4BCCC",
          // "#C4D4E1",
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "top",
      }
    }
  }
});
