var ctx = document.getElementById("doughnut2");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Clarified my preference",
      "Helped me select my career",
      "Did not intern anywhere",
      "Meh",
      "Made no difference",
      "Led to a PPO",
      "and here I am",
      "I’m not sure",
      
    ],
    datasets: [
      {
        label: "Students",
        data: [23.9,23.9,12.6,9.4,9.4,7.5,7.5,6.0],
        borderWidth: 1,
        backgroundColor: [
          // "#243818",
          // "#234012",
          "#a6c8ff", "#9fdab3", "#ffe299", "#ffc1a6", "#9fe3e7",
        "#d3b3f3", "#fff2b2", "#ace7ef", "#a9e7c3", "#f4a1a6",
        "#e7c9f4", "#a6e1e5", "#fbc2c4",
          
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
