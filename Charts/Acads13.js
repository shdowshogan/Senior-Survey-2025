var ctx = document.getElementById("doughnut13");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Easy peasy",
      "Nothing out of the ordinary, just like the other years",
      "Stress ∝ Year of study :( but at least it's over"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [127, 89, 71],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
          
          "#1E4460",
          
          "#37617F",
          
          "#7092AA",
          
          "#A4BCCC",
          "#C4D4E1",
        ],
      },
    ],
  },
  options: {
    plugins: {
    //   legend: {
    //     display: true,
    //     position: "right",
    //   },
      datalabels: {
        color: "#fff", // Color of the labels
        anchor: "end", // Anchor the label position at the end of the arc
        align: "start", // Align the label text start
        offset: -10, // Offset the labels to avoid overlapping
        formatter: function (value, context) {
          return value; // Display the data value
        }
      }
    }
  }
});
