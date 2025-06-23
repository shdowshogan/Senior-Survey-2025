// ctx = document.getElementById('doughnut7').getContext('2d');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['>5', '3-5', '2', '1', '0', 'Prefer not to answer'],
//     datasets: [{
//       label: 'Response Rate (%)',
//       data: [0.7, 3.3, 7.7, 26.0, 54.2, 8.1], // Example percentages
//       backgroundColor: ['#4CAF50', '#F44336'], // Green for Yes, Red for No
//       borderRadius: 8,
//       barThickness: 30
//     }]
//   },
//   options: {
//     indexAxis: 'y', // Makes it horizontal
//     responsive: true,
//     scales: {
//       x: {
//         min: 0,
//         max: 40,
//         ticks: {
//           callback: value => value + '%'
//         },
//         title: {
//           display: true,
//           text: 'Percentage'
//         }
//       },
//       y: {
//         title: {
//           display: false
//         }
//       }
//     },
//     plugins: {
//       legend: { display: false },
//       tooltip: {
//         callbacks: {
//           label: context => `${context.parsed.x}%`
//         }
//       }
//     }
//   }
// });