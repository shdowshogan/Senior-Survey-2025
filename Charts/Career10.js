var ctx = document.getElementById("doughnut10");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Top priority",
      "Major factor",
      "Moderate",
      "Minor factor"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [146,97,35,4],
        borderWidth: 1,
        backgroundColor: [
          // "#243818",
          // "#234012",
          // "#2C4B19",
          "#3C6522",
          "#4D7336",
          "#5F8746",
          "#729A59",
          "#8BAE76",
          "#ABC699",
          "#BFD9AE",
          "#CDE6BE",
          "#DDF5CF",
          
        ],
      },
    ],
  },
  options: {
    plugins: {
      
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
