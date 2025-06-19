var ctx = document.getElementById("doughnut9");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Yes, but depends on the professor and the course",
      "Yes, one should attend all classes to understand the content taught",
      "Not necessary, but it is beneficial to attend",
      "Not required, enough material is available online"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [175, 52, 51, 12],
        borderWidth: 1,
        backgroundColor: [
          // "#091D2C",
          
          
          "#1E4460",
          
          "#37617F",
          
          
          "#89A6BB",
          
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
