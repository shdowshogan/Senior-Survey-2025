const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    function wrapText(text, maxWidth) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = currentLine.length + word.length + 1; // +1 for space

            if (width < maxWidth) {
                currentLine += ' ' + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    // Chart data for all charts
    const chartData = [
        //chart 1
        {
            labels: ['Female', 'Male',' Non-Binary' ],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#4B0D2B',
                    data: [18, 54, 0]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#92235B',
                    data: [22, 85, 0]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#D270A0',
                    data: [13, 27, 0]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#FCD9EA',
                    data: [8, 60, 0]
                },
                {
                    label: 'CPI not choosen',
                    backgroundColor: '#7D3055',
                    data: [1, 1, 0]
                }
            ]
        },

        // Chart 2
    {
        labels: ['Considered but never received counselling/therapy, people around me helped', 'No, I never felt the need to', 'Yes, availed services at the SWC', 'Yes, availed services outside the institute'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: '#4B0D2B',
                data: [17, 41, 10, 4]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: '#92235B',
                data: [34, 57, 8, 7]
            },
            {
                label: 'CPI < 7',
                backgroundColor: '#D270A0',
                data: [11, 14, 11, 3]
            },
            {
                label: 'CPI > 9',
                backgroundColor: '#FCD9EA',
                data: [13, 46, 5, 3]
            },
            {
                label: 'CPI not choosen',
                backgroundColor: '#7D3055',
                data: [0,0,2,0]
            }
        ]
    },


    //chart 3 :
    
                {
                    labels: ['Considered but never received counselling/therapy, people around me helped', 'No, I never felt the need to', 'Yes, availed services at the SWC', 'Yes, availed services outside the institute'],
                    datasets: [
                        {
                            label: 'Female',
                            backgroundColor: '#F9BEDB',
                            data: [22, 21, 10, 7 ]
                        },
                        {
                            label: 'Male',
                            backgroundColor: '#791647',
                            data: [53, 137, 26, 10 ]
                        },
        
                    ]
                }, 

        
                // chart 4
                {
                    labels: ['I am in a relationship, and my partner is from IITB', 'I am in a relationship, and my partner is not form IITB', 'Its complicated', 'Other', 'Single'],
                    datasets: [
                        {
                            label: 'Female',
                            backgroundColor: '#F9BEDB',
                            data: [26, 8, 1, 0, 26 ]
                        },
                        {
                            label: 'Male',
                            backgroundColor: '#791647',
                            data: [26, 38, 10, 7, 139 ]
                        },
                        {
                            label: 'Gender not choosen',
                            backgroundColor: '#350D20',
                            data: [1,0,0,0,0 ]
                        }
        
                    ]
                },      
                
                
        // chart 5
{
    labels: ['0', '1', '2', '3-5', '>5'],
    datasets: [
        {
            label: 'Female',
            backgroundColor: '#F9BEDB',
            data: [21, 24, 13, 3, 0 ]
        },
        {
            label: 'Male',
            backgroundColor: '#791647',
            data: [128, 59, 17, 8, 4 ]
        },
        {
            label: 'Gender not choosen',
            backgroundColor: '#350D20',
            data: [1,0,0,0,0 ]
        }

    ]
},         


// chart 6
{
    labels: ['A few times a month', 'A few times a semester', 'Daily', 'Every week', 'I have never had sex', 'Prefer not to answer'],
    datasets: [
        {
            label: 'Female',
            backgroundColor: '#F9BEDB',
            data: [5, 4, 2, 7, 29, 9 ]
        },
        {
            label: 'Male',
            backgroundColor: '#791647',
            data: [10, 16, 2, 19, 116, 48]
        },

    ]
}, 

        // Chart 7
    {
        labels: ['Before coming to IIT', 'During my first year at IIT', 'I never consumed alcohol', 'Post my first year at IIT'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: '#4B0D2B',
                data: [6, 5, 27, 33]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: '#92235B',
                data: [19, 4, 41, 37]
            },
            {
                label: 'CPI < 7',
                backgroundColor: '#D270A0',
                data: [6, 5, 10, 19]
            },
            {
                label: 'CPI > 9',
                backgroundColor: '#FCD9EA',
                data: [12, 5, 33, 17]
            },
            {
                label: 'CPI not choosen',
                backgroundColor: '#662142',
                data: [0,0,1,1]
            }
        ]
    },

        // Chart 8
    {
        labels: ['Every month', 'Never', 'Occasionally', 'Once a week', 'Only once', 'Very often'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: '#4B0D2B',
                data: [4, 28, 29, 3, 4, 3]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: '#92235B',
                data: [8, 42, 37, 7, 9, 0]
            },
            {
                label: 'CPI < 7',
                backgroundColor: '#D270A0',
                data: [3, 13, 16, 3, 2, 2]
            },
            {
                label: 'CPI > 9',
                backgroundColor: '#FCD9EA',
                data: [6, 36, 9, 8, 6, 1]
            },
            {
                label: 'CPI not choosen',
                backgroundColor: '#662142',
                data: [0,1,1,0,0,0]
            }
        ]
    },
        // Add more charts here as needed
    ];

    // Chart options (common for all charts)
    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    callback: function(value, index, values) {
                        const label = this.getLabelForValue(value);
                        return wrapText(label, 30); // Adjust 30 to your desired max width per line
                    }
                }
            },
            y: {
                stacked: true
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                display: false
            }
        }
    };

    // Initialize all charts dynamically
    const charts = [];
    chartData.forEach((data, index) => {
        const chartContainerId = `chartContainer${index + 1}`;
        const chartContainer = document.getElementById(chartContainerId);
        if (chartContainer) {
            const ctx = chartContainer.getContext('2d');
            charts.push(new Chart(ctx, {
                type: 'bar',
                data: data,
                options: chartOptions
            }));
        }
    });

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.legend');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const datasetIndex = parseInt(button.getAttribute('data-dataset'));
            const chartIndex = parseInt(button.closest('.container').querySelector('canvas').id.replace('chartContainer', '')) - 1;

            charts[chartIndex].data.datasets.forEach((dataset, i) => {
                dataset.hidden = i !== datasetIndex;
            });

            charts[chartIndex].update();

            const chartButtons = button.closest('.container').querySelectorAll('.legend');
            chartButtons.forEach((btn, idx) => {
                btn.classList.toggle('active', idx === datasetIndex);
            });
        });
    });

    // Add event listener to all reset buttons
    const resetButtons = document.querySelectorAll('.reset-button');
    resetButtons.forEach((resetButton) => {
        resetButton.addEventListener('click', () => {
            const chartIndex = parseInt(resetButton.closest('.container').querySelector('canvas').id.replace('chartContainer', '')) - 1;

            const originalData = JSON.parse(JSON.stringify(chartData[chartIndex]));

            charts[chartIndex].data.datasets.forEach((dataset, datasetIndex) => {
                dataset.data = [...originalData.datasets[datasetIndex].data]; // Clone the original data
                dataset.hidden = false; // Ensure all datasets are visible after reset
            });

            charts[chartIndex].update(); // Update chart with original data

            const chartButtons = resetButton.closest('.container').querySelectorAll('.legend');
            chartButtons.forEach((btn) => {
                btn.classList.remove('active');
            });
        });
    });
});
