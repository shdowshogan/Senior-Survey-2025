const ctx = document.getElementById('dietChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Always been a Non-vegetarian',
      'Vegetarian',
      'Became a non-vegetarian after IITB',
      'Jain cuisine',
      'Vegan'
    ],
    datasets: [{
      label: 'Always been a Non-vegetarian',
      data: [141, 0, 0, 0, 0],
      backgroundColor: '#4CAF50',
    }, {
      label: 'Vegetarian',
      data: [0, 110, 0, 0, 0],
      backgroundColor: '#2196F3',
    }, {
      label: 'Became non-veg after IITB',
      data: [0, 0, 23, 0, 0],
      backgroundColor: '#FFC107',
    }, {
      label: 'Jain cuisine',
      data: [0, 0, 0, 5, 0],
      backgroundColor: '#9C27B0'
    }, {
      label: 'Vegan',
      data: [0, 0, 0, 0, 1],
      backgroundColor: '#FF5722'
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded'
        }
      },
      title: {
        display: true,
        text: 'Dietary Preferences (Out of 280)'
      }
    },
    scales: {
      x: {
        ticks: {
          display: false
        },
        grid:{
          display: false
        },
        categoryPercentage: 0.7,
        barPercentage: 0.8

      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Respondents'
        },
        grid:{
          display: false
        }
      }
    }
  }
});
