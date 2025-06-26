document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("fr-dx-Chart").getContext("2d");

    // FR/DX grade categories for x-axis
    const gradeLabels = ['0', '1', '2', '3', '4', '5+', 'Prefer not to answer'];

    // Color palette
    const colorPalette = [
        '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#6a994e',
        '#a7c957', '#bc6c25', '#386641', '#1d3557', '#457b9d', '#a8dadc',
        '#f28482', '#84a59d', '#f6bd60', 'darkkhaki', '#adb5bd', '#6c757d',
        '#5c4b51', '#8d5524', '#c25975'
    ];

    // Hardcoded data: [0, 1, 2, 3, 4, 5+]
    const chartData = {
        'CPI < 6': [3, 2, 0, 0, 0, 0, 0],
        '6 < CPI < 7': [10, 4, 0, 1, 1, 0, 0],
        '7 < CPI < 8': [36, 14, 4, 2, 2, 2, 2],
        '8 < CPI < 9': [55, 30, 6, 5, 5, 0, 9],
        'CPI > 9': [42, 21, 10, 1, 1, 0, 9],
        'Prefer not to answer': [2, 0, 1, 0, 0, 0, 2]
        // 'Earth Sciences': [3, 0, 0, 0, 0, 0],
        // 'Economics': [5, 0, 0, 2, 0, 2],
        // 'Electrical Engineering': [38, 5, 2, 0, 0, 0],
        // 'Energy Science and Engineering': [5, 3, 3, 0, 0, 0],
        // 'Environmental Science and Engineering (ESED)': [7, 2, 3, 0, 0, 0],
        // 'Humanities & Social Sciences': [2, 0, 0, 0, 0, 0],
        // 'IEOR': [3, 0, 0, 0, 0, 0],
        // 'Mathematics': [3, 0, 0, 0, 0, 0],
        // 'Mechanical Engineering': [29, 7, 2, 2, 2, 0],
        // 'Metallurgical Engineering & Materials Science': [10, 3, 0, 0, 0, 2],
        // 'Other': [8, 0, 0, 0, 0, 0],
        // 'Physics': [12, 2, 0, 2, 0, 2],
        // 'IDC': [7, 2, 0, 0, 0, 0],
        // 'Resources Engineering': [2, 0, 0, 0, 0, 0],
        // 'Management': [2, 0, 0, 0, 0, 0]
    };

    // // Department names for datasets and buttons
    // const departmentNames = Object.keys(chartData);

    // // Create datasets for Chart.js
    // const datasets = departmentNames.map((dept, i) => ({
    //     label: dept,
    //     data: chartData[dept],
    //     backgroundColor: colorPalette[i % colorPalette.length],
    // }));

    // Initialize chart
    const frDxGradesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: gradeLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    // text: 'FR/DX Grades Distribution by Department'
                }
            },
            scales: {
                x: { 
                    stacked: true,
                    title: {
                        display: true,
                        // text: 'Number of FR/DX Grades'
                    }
                },
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
    const filterButtons = document.getElementById("fr-dx-filter-buttons");
    departmentNames.forEach((dept, i) => {
        const button = document.createElement("button");
        button.className = "legend";
        button.textContent = dept;
        button.style.backgroundColor = colorPalette[i % colorPalette.length];
        button.style.color = "white";
        button.onclick = () => {
            frDxGradesChart.data.datasets.forEach((ds, j) => {
                ds.hidden = j !== i; // Show only the clicked department
            });
            frDxGradesChart.update();
        };
        filterButtons.appendChild(button);
    });

    // Reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.className = "reset-button";
    resetBtn.onclick = () => {
        frDxGradesChart.data.datasets.forEach(d => d.hidden = false);
        frDxGradesChart.update();
    };
    filterButtons.appendChild(resetBtn);
});