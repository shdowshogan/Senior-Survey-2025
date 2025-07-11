ctx = document.getElementById('doughnut6').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['5', '4', '3', '2', '1'],
    datasets: [{
      label: 'Response Rate (%)',
      data: [13.8, 31.5, 22.8, 12.3, 19.6], // Example percentages
      backgroundColor: ['#4CAF50', '#F44336'], // Green for Yes, Red for No
      borderRadius: 8,
      barThickness: 30
    }]
  },
  options: {
    indexAxis: 'y', // Makes it horizontal
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: 40,
        ticks: {
          callback: value => value + '%'
        },
        title: {
          display: true,
          text: 'Percentage'
        }
      },
      y: {
        title: {
          display: false
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => `${context.parsed.x}%`
        }
      }
    }
  }
});