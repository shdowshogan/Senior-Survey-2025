window.onload = function () {
  const ctx = document.getElementById('genderChart');
  if (!ctx) {
    console.error('Canvas element with ID "genderChart" not found!');
    return;
  }

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Male', 'Female', 'Non-Binary'],
      datasets: [{
        label: 'Gender Distribution',
        data: [81.1, 18.6, 0.4],
        backgroundColor: ['#3498db', '#e91e63', '#9c27b0'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed}%`;
            }
          }
        },
        title: {
          display: true,
          text: 'Gender Identity (Percentage)'
        }
      }
    }
  });
};
