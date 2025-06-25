//chart 6

let degreeCtx3 = document.getElementById('attendClassChart').getContext('2d');

  new Chart(degreeCtx3, {
    type: 'pie',
    data: {
      labels: [
        'If the professor and the course are interesting',
        'Yes',
        'One should attend all classes',
        'Not necessary',
        'But it is beneficial',
        'Only if attendance is mandatory',
        'Not required',
        'Enough material available online',
      ],
      datasets: [{
        label: 'Number of Students',
        data: [87, 45, 45, 33, 33,13,11,11],  // counts
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