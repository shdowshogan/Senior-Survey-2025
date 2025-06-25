const ctx = document.getElementById('sexOrientChart').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Straight',
        'Prefer not to answer',
        'Bisexual',
        'Gay',
        'Other',
        'Asexual'
      ],
      datasets: [{
        label: 'Number of Responses',
        data: [257, 8, 6, 2, 2, 2], // Raw counts
        backgroundColor: [
          '#4C6E58', // muted green
          '#779CAB', // desaturated blue
          '#DDBEA9', // warm tan
          '#B5838D', // dusty rose
          '#6D6875', // warm gray-purple
          '#A3C4BC', // soft teal
          '#E5989B'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: 'What is your sexual orientation? (Out of 277)'
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const percentage = ((context.raw / 277) * 100).toFixed(1);
              return `${context.label}: ${context.raw} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
