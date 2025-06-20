let degreeCtx2 = document.getElementById('minorsChart').getContext('2d');

  new Chart(degreeCtx2, {
    type: 'pie',
    data: {
      labels: [
        'Neither',
        'Yes',
        'Honours',
        'Minor',
        'Both Honours and Minor',
        'Double Minor',
      ],
      datasets: [{
        label: 'Number of Students',
        data: [103, 69, 34, 32, 31, 3],  // counts
        backgroundColor: [
           '#3F72AF',  // Cool blue
            '#112D4E',  // Deep navy
            '#B1A296',  // Coffee gray
            '#5F9EA0',  // Cadet blue
            '#C9D6DF',  // Soft fog blue
            '#9BA4B5'  
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