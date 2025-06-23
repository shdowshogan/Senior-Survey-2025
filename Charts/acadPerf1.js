window.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('deptChart').getContext('2d');

    const data = {
      labels: [
        "Economics", "Physics", "Mechanical Engineering", "Biosciences and Bioengineering",
        "Computer Science & Engineering", "Civil Engineering", "Metallurgical Engineering & Materials Science",
        "Other", "Environmental Science and Engineering (ESED)", "Electrical Engineering", "Earth Sciences",
        "Chemical Engineering", "IEOR", "Mathematics", "Aerospace Engineering", "IDC", "Chemistry",
        "Resources Engineering", "Energy Science and Engineering", "Management", "Humanities & Social Sciences"
      ],
      datasets: [{
        label: 'Number of Students per Department',
        data: [
          5, 16, 40, 2, 35, 23, 13, 8, 9, 52, 3, 29, 4, 3, 16, 7, 7, 1, 7, 1, 1
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#000',
            font: {
              weight: 'bold'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [ChartDataLabels]
    };

    new Chart(ctx, config);
})