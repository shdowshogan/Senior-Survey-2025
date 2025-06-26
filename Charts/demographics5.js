//const ctx = document.getElementById('dietChart').getContext('2d');
const canvas = document.getElementById('dietChart');
  if (!canvas) return;

ctx = canvas.getContext('2d');
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
      backgroundColor: '#4C6E58',
    }, {
      label: 'Vegetarian',
      data: [0, 110, 0, 0, 0],
      backgroundColor: '#779CAB',
    }, {
      label: 'Became non-veg after IITB',
      data: [0, 0, 23, 0, 0],
      backgroundColor: '#DDBEA9',
    }, {
      label: 'Jain cuisine',
      data: [0, 0, 0, 5, 0],
      backgroundColor: '#B5838D'
    }, {
      label: 'Vegan',
      data: [0, 0, 0, 0, 1],
      backgroundColor: '#6D6875'
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
