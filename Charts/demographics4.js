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
          '#4CAF50',
          '#9E9E9E',
          '#FF9800',
          '#E91E63',
          '#00BCD4',
          '#3F51B5'
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
