document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('bubbleChart').getContext('2d');

    const percentages = [32.1, 19.8, 19.7, 7.2, 5.4, 5.5, 5.6, 4.9];
    const labels = [
        'My friend circle has stayed the same over the past 4/5 years',
        'Started with a big group',
        'Ended with clode-knit few',
        'I am no longer friends with the people I considered friends in my 1st/2nd year',
        'We grew apart',
        'But in the end',
        'We came back together',
        "I didn't prioritise friendships at all"
    ];

    const datasets = percentages.map((value, index) => ({
        label: labels[index],
        data: [{
            x: (index + 1) * 10,         // space out bubbles evenly
            y: value,                    // percentage
            r: Math.sqrt(value) * 2.5    // scale bubble size nicely
        }],
        backgroundColor: `hsl(${index * 45}, 70%, 60%)`
    }));

    new Chart(ctx, {
        type: 'bubble',
        data: { datasets },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 25,
                        padding: 10,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.dataset.label || '';
                            const val = context.raw.y;
                            return `${label}: ${val}%`;
                        }
                    }
                },
                title: {
                    display: true,
                    //text: 'Bubble Chart of Percentages',
                    font: { size: 18 }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Options'
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 10
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    },
                    beginAtZero: true,
                    max: 50
                }
            }
        }
    });
});
