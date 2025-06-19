var ctx = document.getElementById("doughnut12");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "No",
      "Wanted to but didn't know about it at the right time",
      "Yes",
      "Tried but couldn't qualify"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [175, 97, 10, 7],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
          
          "#1E4460",
          
          
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
