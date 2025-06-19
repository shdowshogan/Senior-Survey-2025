var ctx = document.getElementById("doughnut2");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H9",
      "H10",
      "H11",
      "H12",
      "H13",
      "H14",
      "H15",
      "H16",
      "H17",
      "H18"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [28,40,7,30,36,23,14,17,12,6,11,30,1,12,17],
        borderWidth: 1,
        backgroundColor: [
          // "#382D07",
          // "#46390D",
          // "#726122",
          // "#937B26",
          // "#A78B23",
          // "#B89C34",
          // "#CDB044",
          // "#DBBF59",
          "#E8CE6A",
          // "#F2D97F",
          // "#FDE694",
          // "#FFEEAE",
          
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
