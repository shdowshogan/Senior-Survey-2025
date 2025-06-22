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
        // chart 1
        {
            labels: ['Consulting', 'Exams like UPSC', 'Higher Education', 'Technology', 'Industry/Core Engineering', 'Finance/Venture Capital','Other', 'Still finding a job','Entrepreneurship/Freelancing', 'Design/Arts', 'Product Management'],
            datasets: [
                {
                    label: 'Prefer not to answer',
                    backgroundColor: '#254f0b',
                    data: [0, 0, 3, 0, 1, 0, 1, 0, 0]
                },
                {
                    label: 'CPI < 6',
                    backgroundColor: '#427524',
                    data: [1, 0, 1, 1, 0, 0, 0, 2, 1]
                },
                {
                    label: '6 < CPI < 7',
                    backgroundColor: '#639942',
                    data: [3, 3, 0, 1, 0, 2, 2, 4, 0]
                },
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#beff98',
                    data: [3, 1, 11, 17, 10, 7, 3, 3, 4]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#beff98',
                    data: [9, 7, 9, 31, 25, 3, 5, 10, 3]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#beff98',
                    data: [4, 1, 24, 20, 22, 7, 1, 3, 1]
                }
            ]
        },

                //chart 2
        {
            labels: ['Considering one or more offers', 'Currently searching for a position', 'Have accepted a position', 'Have not yet begun my job search', 'Not planning on taking a job', 'Will be self-employed'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#254f0b',
                    data: [3, 10, 51, 0, 8, 0]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#427524',
                    data: [4, 6, 83, 1, 11, 2]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#639942',
                    data: [1, 8, 19, 6, 5, 0]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#beff98',
                    data: [2, 2, 59, 0, 6, 0]
                }
            ]
        },

        

                //chart 3
        {
            labels: ['Exceptionally well, Master of the universe level', 'Moderately well, I can survive but not thrive', 'Not well, Help needed', 'Slightly well, Only if life had a syllabus', 'Very well, Ready to rock'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#254f0b',
                    data: [13, 17, 1, 4, 37]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#427524',
                    data: [15, 22, 0, 7, 60]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#639942',
                    data: [5, 12, 2, 4, 17]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#beff98',
                    data: [5, 10, 0, 10, 43]
                }
            ]
        },

                // chart 4
                {
                    labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
                    datasets: [
                        {
                            label: 'Female',
                            backgroundColor: '#C7E8B4',
                            data: [2, 7, 21, 19, 12 ]
                        },
                        {
                            label: 'Male',
                            backgroundColor: '#366A16',
                            data: [5, 18, 50, 93, 57 ]
                        },
        
                    ]
                },

                //c hart5

        {
            labels: ['Mostly stressful', 'Everything felt disorganized', 'Frustrating', 'I noticed some instances of unfairness or bias', 'Had fun despite the challenges','Very rewarding','overall was a positive experience','Didnt sit for placements','No stress','I got a PPO😎', 'Fairly smooth','found the process to be well-organized and clear'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#254f0b',
                    data: [44, 32, 44, 44, 16, 9, 9, 9, 4, 4, 4, 4]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#427524',
                    data: [ 43,30,49,49,31,11,11,13,21,21,7,7]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#639942',
                    data: [20, 19, 25, 25, 9, 2 ,2 ,3, 3, 3, 0, 0]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#beff98',
                    data: [21,15,20,20,13,13,13,13,19,19,6,6]
                }
            ]
        }   
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