var ctx = document.getElementById("doughnut7");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Theoretical and good for research",
      "Needs industry relevance",
      "Provides an in depth understanding",
      "Provides basic understanding but lacks depth",
      "Provides knowledge directly applicable in the real world"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [178, 152, 102, 100, 85],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
          
          "#1E4460",
          
          "#37617F",
          "#4F7793",
          
          "#89A6BB",
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
