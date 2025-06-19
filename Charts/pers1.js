var ctx = document.getElementById("doughnut1");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Maharashtra",
      "Madhya Pradesh",
      "Uttar Pradesh",
      "Rajasthan",
      "Telangana",
      "West Bengal",
      "Bihar",
      "Andhra Pradesh",
      "Tamil Nadu",
      "Kerala",
      "Gujarat",
      "Karnataka",
      "Jharkhand",
      "Delhi-NCR",
      "Other"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [90,28,25,22,16,15,14,11,8,8,7,7,6,6,24],
        borderWidth: 1,
        backgroundColor: [
          // "#350D20",
          // "#521B36",
          // "#662142",
          // "#7D3055",
          // "#8E3963",
          // "#A24875",
          // "#B85687",
          "#C06693",
          // "#DA87B0",
          // "#EEAACC",
          // "#FCBFDD",
          // "#FCD9EA",
          
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
