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
        '#FF6384', // red
        '#36A2EB', // blue
        '#4BC0C0'  // teal
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
