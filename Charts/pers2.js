var ctx = document.getElementById("doughnut2");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "I wanted to go home more often",
      "But I couldn't",
      "Once/twice a month (Mumbai - Pune)",
      "Insti was my home",
      "I did not want to go home",
      "I vanished every Friday evening and reappeared only on Monday morning",
      "Almost every day (I am a day scholar)"
    ],
    datasets: [{
      label: "No. of students",
      data: [30.9, 30.9, 11.7, 10.9, 10.9, 4.1, 0.6],
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
