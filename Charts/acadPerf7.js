document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("studyScheduleChart").getContext("2d");

    // Study schedule categories for x-axis
    const scheduleLabels = [
        'Barely studied, Library during exams',
        'Just enough to stay with class',
        'JEE fulfilled my studying quota'
    ];

    // Color palette from acadPerf4.js
    const colorPalette = [
        '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#6a994e',
        '#a7c957', '#bc6c25', '#386641', '#1d3557', '#457b9d', '#a8dadc',
        '#f28482', '#84a59d', '#f6bd60', 'darkkhaki', '#adb5bd', '#6c757d',
        '#495057', '#343a40'
    ];

    // Hardcoded data: [Barely studied, Just enough, JEE fulfilled]
    const chartData = {
        'Aerospace Engineering': [10, 15, 5],
        'Biosciences and Bioengineering': [8, 12, 10],
        'Chemical Engineering': [12, 18, 6],
        'Chemistry': [7, 10, 13],
        'Civil Engineering': [15, 20, 5],
        'Computer Science & Engineering': [5, 25, 10],
        'Earth Sciences': [9, 11, 10],
        'Economics': [6, 14, 15],
        'Electrical Engineering': [10, 20, 10],
        'Energy Science and Engineering': [8, 12, 10],
        'Environmental Science and Engineering (ESED)': [7, 13, 10],
        'Humanities & Social Sciences': [5, 10, 15],
        'IDC': [6, 12, 12],
        'IEOR': [8, 14, 8],
        'Management': [7, 13, 10],
        'Mathematics': [10, 15, 10],
        'Mechanical Engineering': [12, 18, 5],
        'Metallurgical Engineering & Materials Science': [9, 16, 5],
        'Other': [5, 10, 10],
        'Physics': [8, 12, 15],
        'Resources Engineering': [7, 13, 10]
    };

    // Department names for datasets and buttons
    const departmentNames = Object.keys(chartData);

    // Create datasets for Chart.js
    const datasets = departmentNames.map((dept, i) => ({
        label: dept,
        data: chartData[dept],
        backgroundColor: colorPalette[i % colorPalette.length],
    }));

    // Initialize chart
    const studyScheduleChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: scheduleLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Study Schedule Distribution by Department'
                }
            },
            scales: {
                x: { 
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Study Schedule'
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
    const filterButtons = document.getElementById("studySchedule-filter-buttons");
    departmentNames.forEach((dept, i) => {
        const button = document.createElement("button");
        button.className = "legend";
        button.textContent = dept;
        button.style.backgroundColor = colorPalette[i % colorPalette.length];
        button.style.color = "white";
        button.onclick = () => {
            studyScheduleChart.data.datasets.forEach((ds, j) => {
                ds.hidden = j !== i; // Show only the clicked department
            });
            studyScheduleChart.update();
        };
        filterButtons.appendChild(button);
    });

    // Reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.className = "reset-button";
    resetBtn.onclick = () => {
        studyScheduleChart.data.datasets.forEach(d => d.hidden = false);
        studyScheduleChart.update();
    };
    filterButtons.appendChild(resetBtn);
});