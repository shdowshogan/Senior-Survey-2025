document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('dietChart1');
  if (!canvas) return;  // prevents error if not on this page

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'My friend circle has stayed the same over the past 4/5 years',
        'Started with a big group,Ended with clode-knit few',
        'I am no longer friends with the people I considered friends in my 1st/2nd year',
        'We grew apart,But in the end',
        "I didn't prioritise friendships at all"
      ],
      datasets: [{
        label: 'Number of Respondents',
        data: [125, 77, 28, 21, 19],
        backgroundColor: [
          '#9D8189', '#F4A261', '#BC6C25', '#6B705C', '#6D6875'
        ]
      }]
    },
    options: {
      indexAxis: 'y', // ✅ THIS makes it horizontal
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Dietary Preferences (Out of 220)'
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Respondents'
          }
        },
        y: {
          ticks: {
            autoSkip: false
          }
        }
      }
    }
  });
});
