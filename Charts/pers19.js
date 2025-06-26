var ctx = document.getElementById("doughnut19");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "I never smoked",
      "Post my first year at IIT",
      "Before coming to IIT",
      "During my first year at IIT"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [224,49,8,2],
        borderWidth: 1,
        backgroundColor: [
         '#4C6E58', // muted green
                    '#779CAB', // desaturated blue
                    '#DDBEA9', // warm tan
                    '#B5838D', // dusty rose
                    '#6D6875', // warm gray-purple
                      "#D6CDEA", // Pale Lavender
          
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
