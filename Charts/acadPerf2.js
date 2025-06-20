//chart 2

let degreeCtx = document.getElementById('degreePieChart').getContext('2d');

  new Chart(degreeCtx, {
    type: 'pie',
    data: {
      labels: [
        'BTech/BS',
        'M.Tech/MS/MSc',
        'IDDDP/Dual Degree',
        'PhD',
        'M.Des',
        'B.Des',
        'MBA'
      ],
      datasets: [{
        label: 'Number of Students',
        data: [158, 64, 39, 12, 6, 2, 1],  // counts
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#FFC107',
          '#9C27B0',
          '#FF5722',
          '#00BCD4',
          '#795548'
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