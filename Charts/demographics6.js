 const ctx = document.getElementById('parentsEduBgChart').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Parents attended Technical College',
        'First in family to attend technical college',
        'First in family to attend any college'
      ],
      datasets: [{
        label: 'Percentage',
        data: [133, 106, 29], // raw counts
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#FFC107'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
          text: "Parents' Educational Background (Out of 268)"
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const total = 268;
              const raw = context.raw;
              const percentage = ((raw / total) * 100).toFixed(1);
              return `${context.label}: ${raw} (${percentage}%)`;
            }
          }
        }
      }
    }
  });