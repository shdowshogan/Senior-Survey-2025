window.addEventListener('load',function() {
    const ctx = document.getElementById('cheatingChart').getContext('2d');
    const cheatingChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Never',
                'Yes, but I got away without a penalty',
                'Yes, and I had to face repercussions'
            ],
            datasets: [{
                data: [176, 77, 20],
                backgroundColor: [
                    '#4C6E58', // muted green
                    '#779CAB', // desaturated blue
                    '#DDBEA9', // warm tan
                    '#B5838D', // dusty rose
                    '#6D6875', // warm gray-purple
                    '#A3C4BC', // soft teal
                    '#E5989B'  // Red
                ],
                hoverOffset: 10
            }]
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Did you cheat on an assignment or exam?'
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });

}
)