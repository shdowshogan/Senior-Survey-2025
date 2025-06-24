document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("cpiSatisChart").getContext("2d");

    const satisfactionLabels = ["Very Satisfied (5)", "Satisfied (4)", "Neutral (3)", "Dissatisfied (2)", "Very Dissatisfied (1)"];

    // Replace with actual satisfaction data by CPI group (dummy numbers below)
    const satisfactionDataByCPI = {
        "CPI > 9": [48, 33, 2, 2, 0],
        "8 < CPI < 9": [26, 50, 20, 7, 4],
        "7 < CPI < 8": [5, 14, 23, 15, 5],
        "6 < CPI < 7": [2, 0, 7, 5, 1],
        "CPI < 6": [2, 0, 1, 1, 2],
        "Prefer not to answer": [0, 0, 3, 1, 1]
    };

    const groupNames = Object.keys(satisfactionDataByCPI);
    const colorPalette = [
  '#4C6E58', // muted green
  '#779CAB', // desaturated blue
  '#DDBEA9', // warm tan
  '#B5838D', // dusty rose
  '#6D6875', // warm gray-purple
  '#A3C4BC', 
  '#E5989B'  ];

    const datasets = groupNames.map((group, i) => ({
        label: group,
        data: satisfactionDataByCPI[group],
        backgroundColor: colorPalette[i % colorPalette.length],
    }));

    const satisfactionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: satisfactionLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'CPI Satisfaction by CPI Range'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: { stacked: true },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Students'
                    }
                }
            }
        }
    });

    // Generate toggle buttons
    const filterButtons = document.getElementById("cpiSatis-filter-buttons");
    groupNames.forEach((group, i) => {
        const button = document.createElement("button");
        button.className = "legend";
        button.textContent = group;
        button.style.backgroundColor = colorPalette[i % colorPalette.length];
        button.style.color = "white";
        button.onclick = () => {
            satisfactionChart.data.datasets.forEach((ds, j) => {
                ds.hidden = j !== i; // show only the clicked group
            });
            satisfactionChart.update();
        };
        filterButtons.appendChild(button);
    });

    // Reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.className = "reset-button";
    resetBtn.onclick = () => {
        satisfactionChart.data.datasets.forEach(d => d.hidden = false);
        satisfactionChart.update();
    };
    filterButtons.appendChild(resetBtn);
});
