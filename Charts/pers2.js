//chart 2

minorCtx = document.getElementById('minorsChart').getContext('2d');

  new Chart(minorCtx, {
    type: 'pie',
    data: {
      labels: [
        
              'spoke to them frequently',
               'There was little interaction; I spoke to them now and then',
              'I wasn’t in touch with my family'
      ],
      datasets: [{
        label: 'Number of Students',
        data: [95,178,3],  // counts
        backgroundColor: [
          '#4C6E58', // muted green
          // '#779CAB', // desaturated blue
          '#B5838D', // dusty rose
          '#DDBEA9', // warm tan
           
          // '#6D6875', // warm gray-purple
          // '#A3C4BC', // soft teal
          // '#E5989B'  // blush pink
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