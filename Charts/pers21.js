document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut101').getContext('2d');

    const doughnut8 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['H3', 'H2', 'H15', 'H6', 'H5', 'H9', 'H10', 'H17', 'H18', 'Tansa', 'H14', 'H12', 'H13', 'H11', 'H4'
              
              ],
            datasets: [{
                data: [38, 33, 33, 32, 31, 26, 16, 15, 14, 10, 10, 10, 9, 4, 1],  // Example percentages
                backgroundColor: [//'#779CAB', // desaturated blue
        //   '#B5838D', // dusty rose
        //   '#DDBEA9', // warm tan
        //    '#6D6875',
            // "#F7DAD9", // Misty Rose
  "#F7DAD9", // Soft Blush
  "#BFD8D2", // Powder Blue
  "#D6CDEA", // Pale Lavender
  "#FAD4C0", // Pastel Peach
  "#A4B0A1", // Dusty Olive (darker)
  "#F6C6B5", // Muted Coral
  "#8675A9", // Soft Purple Gray (dark pastel)
  "#D7C4BB", // Soft Taupe
  "#59788E", // Dusty Steel Blue (dark pastel)
  "#E6D5B8", // Warm Sand
  "#A3B18A", // Faded Green
  "#ECD5DC", // Rose Mist
  "#7D8C8A", // Slate Blue-Green
  "#C5B9A5", // Soft Mocha
  "#6C5B7B", // Dusty Plum
  "#D9E6C3", // Pale Pistachio
  "#B08874", // Muted Copper
  "#CBD4D8", // Sky Gray
  "#8C7A6B"  // Warm Charcoal Brown
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            cutout: '65%', // donut thickness
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.parsed}%`;
                        }
                    }
                },
                title: {
                    display: true,
                    
                    font: {
                        size: 16
                    },
                    padding: {
                        bottom: 10
                    }
                }
            }
        }
    });
});
