document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('bubble').getContext('2d');

  const labels = [
    'Social', 'Academic', 'Extracurricular', 'Personal'
  ];

  const values = [32.1, 25.4, 22.7, 19.8]; // percent or score
  const colors = ['#42a5f5', '#66bb6a', '#ffa726', '#ef5350'];

  // All same/similar X,Y to keep them clustered
  const data = labels.map((label, index) => ({
    x: 50 + Math.random() * 10, // Small jitter for clustering
    y: 50 + Math.random() * 10,
    r: values[index], // Will control size
    label: label
  }));

  new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: data.map((item, index) => ({
        label: item.label,
        data: [item],
        backgroundColor: colors[index],
        borderColor: '#fff',
        borderWidth: 2
      }))
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: ${ctx.raw.r.toFixed(1)}%`
          }
        },
        datalabels: {
          formatter: (_, context) => context.dataset.label,
          color: '#fff',
          font: {
            weight: 'bold',
            size: 14
          }
        }
      },
      scales: {
        x: { display: false, min: 40, max: 70 },
        y: { display: false, min: 40, max: 70 }
      }
    },
    plugins: [ChartDataLabels]
  });
});

