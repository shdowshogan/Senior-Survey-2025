window.onload = function () {
  const ctx = document.getElementById('income-Chart');
  if (!ctx) {
    console.error('Canvas element with ID "genderChart" not found!');
    return;
  }

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels :[
        'Top 25%',
        'Middle 50% - Steady Paycheck',
        'No Clue',
        'Richer Than Almost Everyone',
        'Most Batchmates Higher (Inner Peace)'
        ],
      datasets: [{
        label: 'Gender Distribution',
        data: [97, 64, 49, 33, 29],
        backgroundColor: ['#4C6E58', // muted green
          '#779CAB', // desaturated blue
          '#DDBEA9', // warm tan
          '#B5838D', // dusty rose
          '#6D6875', // warm gray-purple
          '#A3C4BC', // soft teal
          '#E5989B'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed} Students`;
            }
          }
        },
        title: {
          display: true,
          text: 'Income Expectation Compared to Batchmates'
        }
      }
    }
  });
};
