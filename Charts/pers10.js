var ctx = document.getElementById("doughnut10");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "No, I did not receive any financial aid",
      "Yes, I received financial aid for my entire degree",
      "Yes, a part of my expenses were funded during my degree",
      // "Village"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [177,59,50],
        borderWidth: 1,
        backgroundColor: [
          // "#350D20",
          // "#521B36",
          // "#662142",
          "#7D3055",
          "#8E3963",
          "#A24875",
          "#B85687",
          "#C06693",
          "#DA87B0",
          "#EEAACC",
          "#FCBFDD",
          "#FCD9EA",
          
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
