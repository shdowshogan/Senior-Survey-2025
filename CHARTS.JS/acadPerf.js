document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("yourCpiChart").getContext("2d");

    const cpiLabels = ['CPI>9', '8<CPI<9', '7<CPI<8', '6<CPI<7', 'CPI<6', 'Prefer not to answer'];

    const chartData = {
        "Aerospace Engineering": [5, 5, 5, 0, 1, 0],
        "Biosciences and Bioengineering": [1, 1, 0, 0, 0, 0],
        "Chemical Engineering": [4, 9, 11, 4, 0, 1],
        "Chemistry": [3, 3, 0, 1, 0, 0],
        "Civil Engineering": [3, 8, 5, 5, 0, 2],
        "Computer Science & Engineering": [18, 10, 5, 1, 0, 1],
        "Earth Sciences": [1, 1, 1, 0, 0, 0],
        "Economics": [2, 1, 0, 1, 1, 0],
        "Electrical Engineering": [18, 28, 5, 1, 0, 0],
        "Energy Science and Engineering": [1, 2, 3, 0, 1, 0],
        "Environmental Science and Engineering (ESED)": [2, 3, 3, 1, 0, 0],
        "Humanities & Social Sciences": [0, 1, 0, 0, 0, 0],
        "IDC": [1, 3, 3, 0, 0, 0],
        "IEOR": [0, 4, 0, 0, 0, 0],
        "Management": [0, 0, 1, 0, 0, 0],
        "Mathematics": [0, 2, 1, 0, 0, 0],
        "Mechanical Engineering": [16, 14, 9, 0, 0, 1],
        "Metallurgical Engineering & Materials Science": [2, 4, 6, 0, 1, 0],
        "Other": [4, 4, 0, 0, 0, 0],
        "Physics": [4, 4, 5, 1, 2, 0],
        "Resources Engineering": [1, 0, 0, 0, 0, 0]
    };

    const departmentNames = Object.keys(chartData);
    const colorPalette = [
        '#264653', // dark teal
        '#2a9d8f', // teal
        '#e9c46a', // sand
        '#f4a261', // orange
        '#e76f51', // red-orange
        '#6a994e', // olive green
        '#a7c957', // light green
        '#bc6c25', // rustic brown
        '#386641', // forest green
        '#1d3557', // deep blue
        '#457b9d', // muted blue
        '#a8dadc', // pastel cyan
        '#f28482', // soft coral
        '#84a59d', // sage
        '#f6bd60', // peach
        'darkkhaki', // cream
        '#adb5bd', // soft gray
        '#6c757d', // medium gray
        '#495057', // dark gray
        '#343a40'  // charcoal
    ];

    const datasets = departmentNames.map((dept, i) => ({
        label: dept,
        data: chartData[dept],
        backgroundColor: colorPalette[i % colorPalette.length],
    }));

    const cpiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cpiLabels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'CPI Distribution by Department'
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
    const filterButtons = document.getElementById("filter-buttons");
    departmentNames.forEach((dept, i) => {
        const button = document.createElement("button");
        button.className = "legend";
        button.textContent = dept;
        button.style.backgroundColor = colorPalette[i % colorPalette.length];
        button.style.color = "white";
        button.onclick = () => {
            cpiChart.data.datasets.forEach((ds, j) => {
                ds.hidden = j !== i; // show only the clicked department
            });
            cpiChart.update();
        };
        filterButtons.appendChild(button);
    });

    // Reset button
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.className = "reset-button";
    resetBtn.onclick = () => {
        cpiChart.data.datasets.forEach(d => d.hidden = false);
        cpiChart.update();
    };
    filterButtons.appendChild(resetBtn);
});
