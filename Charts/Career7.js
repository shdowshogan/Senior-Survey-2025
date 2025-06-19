var ctx = document.getElementById("doughnut7");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Significant influence - clarified my preferences",
      "Moderate influence - left me a little wiser",
      "Did not intern anywhere",
      "Meh, made no difference",
      "I'm not sure"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [105,85,52,28,13],
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
