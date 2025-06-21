document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("learningsChart").getContext("2d");

    // Learning method categories for x-axis
    const methodLabels = [
        'ChatGPT',
        'Group studies',
        'Online Platforms (Coursera, etc.)',
        'Only for Resume point',
        'Library books',
        'Did not study'
    ];

    // Color palette
    const colorPalette = [
        '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#6a994e',
        '#a7c957', '#bc6c25', '#386641', '#1d3557', '#457b9d', '#a8dadc',
        '#f28482', '#84a59d', '#f6bd60', 'darkkhaki', '#adb5bd', '#6c757d',
        '#5c4b51', '#8d5524', '#c25975'
    ];

    // Hardcoded data: [ChatGPT, Group studies, Platforms, Resume point, Library, No study]
    const chartData = {
        'Aerospace Engineering': [2, 0, 10, 0, 0, 0],
        'Biosciences and Bioengineering': [1, 0, 1, 0, 0, 0],
        'Chemical Engineering': [5, 6, 9, 5, 0, 0],
        'Chemistry': [4, 0, 1, 0, 1, 1],
        'Civil Engineering': [7, 1, 9, 4, 1, 0],
        'Computer Science & Engineering': [6, 7, 15, 5, 1, 4],
        'Earth Sciences': [1, 1, 0, 0, 0, 0],
        'Economics': [4, 0, 0, 0, 0, 1],
        'Electrical Engineering': [10, 10, 21, 6, 0, 2],
        'Energy Science and Engineering': [0, 1, 5, 0, 0, 1],
        'Environmental Science and Engineering (ESED)': [2, 0, 2, 0, 2, 0],
        'Humanities & Social Sciences': [0, 0, 0, 0, 1, 0],
        'IEOR': [1, 1, 0, 1, 0, 1],
        'Mathematics': [0, 1, 1, 0, 0, 1],
        'Mechanical Engineering': [10, 6, 21, 0, 1, 4],
        'Metallurgical Engineering & Materials Science': [2, 2, 6, 1, 1, 0],
        'Other': [5, 0, 4, 0, 0, 0],
        'Physics': [4, 5, 5, 0, 1, 2],
        'IDC': [1, 0, 6, 0, 0, 0],
        'Resources Engineering': [0, 0, 1, 0, 0, 0],
        'Management': [0, 0, 1, 0, 0, 0]
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
    const studyLearningChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: methodLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Learning Methods Distribution by Department'
                }
            },
            scales: {
                x: { 
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Learning Method'
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
    const filterButtons = document.getElementById("learnings-filter-buttons");
    departmentNames.forEach((dept, i) => {
        const button = document.createElement("button");
        button.className = "legend";
        button.textContent = dept;
        button.style.backgroundColor = colorPalette[i % colorPalette.length];
        button.style.color = "white";
        button.onclick = () => {
            studyLearningChart.data.datasets.forEach((ds, j) => {
                ds.hidden = j !== i; // Show only the clicked department
            });
            studyLearningChart.update();
        };
        filterButtons.appendChild(button);
    });

    // Reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.className = "reset-button";
    resetBtn.onclick = () => {
        studyLearningChart.data.datasets.forEach(d => d.hidden = false);
        studyLearningChart.update();
    };
    filterButtons.appendChild(resetBtn);
});