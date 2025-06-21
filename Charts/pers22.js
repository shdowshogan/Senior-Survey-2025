ctx = document.getElementById('doughnut22').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['10+ hours', '9-10 hours', '8-9 hours', '7-8 hours', '6-7 hours', '5-6 hours', '4-5 hours', 'less than 4 hours'],
    datasets: [{
      label: 'Response Rate (%)',
      data: [1.4, 1.1, 7.6, 28.3, 33.0, 23.2, 5.1, 0.4], // Example percentages
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