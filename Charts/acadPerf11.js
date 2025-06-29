// chart 11

let aidCtx = document.getElementById('finance-aid-Chart').getContext('2d');

new Chart(aidCtx, {
  type: 'pie',
  data: {
    labels: [
      'No Aid',
      'Partly Funded',
      'Fully Funded'
    ],
    datasets: [{
      label: 'Number of Students',
      data: [84, 29, 24],  // from 274 total
      backgroundColor: [
        '#4C6E58', // muted green
          '#779CAB', // desaturated blue
          '#DDBEA9', // warm tan
          '#B5838D', // dusty rose
          '#6D6875', // warm gray-purple
          '#A3C4BC', // soft teal
          '#E5989B'  // teal
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
        text: 'Did you receive financial aid during your degree?'
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const percent = ((value / 274) * 100).toFixed(1);
            return `${context.label}: ${value} (${percent}%)`;
          }
        }
      }
    }
  }
});
