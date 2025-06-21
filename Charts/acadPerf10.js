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
        backgroundColor: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
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
