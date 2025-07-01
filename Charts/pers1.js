//chart 1

degreeCtx = document.getElementById('degreePieChart').getContext('2d');

  new Chart(degreeCtx, {
    type: 'pie',
    data: {
      labels: [
         "I wanted to go home more often, but I couldn’t",
      "Once/twice a month (Mumbai - Pune)",
      "Insti was my home, I did not want to go home",
      "I vanished every Friday evening and reappeared only on Monday morning",
      "Almost every day (I am a day scholar)"
      ],
      datasets: [{
        label: 'Number of Students',
        data: [145, 51, 55, 19, 3],  // counts
        backgroundColor: [
          '#4C6E58', // muted green
          '#779CAB', // desaturated blue
          '#DDBEA9', // warm tan
          '#B5838D', // dusty rose
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