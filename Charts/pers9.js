

      //chart 2

minor21Ctx = document.getElementById('minorsChart2').getContext('2d');

  new Chart(minor21Ctx, {
    type: 'pie',
    data: {
      labels: [
        
             "I have never had sex before",
      "Prefer not to answer",
      "3rd year",
      // "Yes",
      "Before coming to IITB",
      "After 3rd year",
      "2nd year",
      "In my freshie year"
      ],
      datasets: [{
        label: 'Number of Students',
        data: [128, 77, 18, 15, 12, 12, 3 ],  // counts
        backgroundColor: [
          '#4C6E58', // muted green
          '#779CAB', // desaturated blue
          '#B5838D', // dusty rose
          '#DDBEA9', // warm tan
           
          '#6D6875', // warm gray-purple
          '#A3C4BC', // soft teal
           '#E5989B'  // blush pink
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        title: {
          display: true,
          text: ''
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const raw = context.raw;
              const percentage = ((raw / 282) * 100).toFixed(1);
              return `${context.label}: ${raw} (${percentage}%)`;
            }
          }
        }
      }
    }
  });