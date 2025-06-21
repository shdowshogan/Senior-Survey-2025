var ctx = document.getElementById("doughnut9");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "I have never had sex before",
      "Prefer not to answer",
      "3rd year",
      "Yes",
      "Before coming to IITB",
      "After 3rd year",
      "2nd year",
      "In my freshie year"
    ],
    datasets: [{
      label: "No. of students",
      data: [45.7, 27.5, 6.4, 5.4, 5.4, 4.3, 4.3, 1.1],
      borderWidth: 1,
      backgroundColor: [
        "#7D3055",
        "#2196f3", '#e91e63', '#9c27b0',
      ],
      offset: [0, 0, 15, 20]  // 🎯 Popped Town and Village
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${value} (${percentage}%)`;
          }
        }
      },
      // datalabels: {
      //   // color: "#fff",
      //   // anchor: "end",
      //   // align: "start",
      //   // offset: -10,
      //   formatter: function (value) {
      //     return value;
      //   }
      // }
    }
  },
  //plugins: [ChartDataLabels] // Make sure you load Chart.js Datalabels plugin
});
