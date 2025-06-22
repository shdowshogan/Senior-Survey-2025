// document.addEventListener('DOMContentLoaded', function () {
// const labels = [
//     "Technology", "Industry/Core Engineering", "Higher Education",
//         "Still finding a job", "Consulting", "Finance/Venture Capital",
//         "Exams like UPSC", "CDS", "etc", "Other",
//         "Entrepreneurship/Freelancing", "Product Management", "Design/Arts"
// ];

// const values = [23.1, 19.1, 15.8, 7.3, 6.6, 6.3, 4.0, 4.0, 4.0, 4.0, 3.0, 2.3, 0.7];
// const colors = [
//     "#a6c8ff", "#9fdab3", "#ffe299", "#ffc1a6", "#9fe3e7",
//         "#d3b3f3", "#fff2b2", "#ace7ef", "#a9e7c3", "#f4a1a6",
//         "#e7c9f4", "#a6e1e5", "#fbc2c4"
// ];



// // Setup canvas
// const canvas = document.getElementById('doughnut0');
// const ctx = canvas.getContext('2d');
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Utility function to scale thickness based on value
// function getThickness(value) {
//     const min = 20, max = 60, maxVal = 38;
//     return min + (value / maxVal) * (max - min);
// }

// let total = values.reduce((a, b) => a + b, 0);
// let angleStart = -Math.PI / 2;

// // Draw arcs with varying thickness

// const segments = [];

// // Updated drawing loop with inner-growing slices
// values.forEach((val, i) => {
//     const angle = (val / total) * 2 * Math.PI;
//     const angleEnd = angleStart + angle;

//     const innerR = 120;  // Fixed inner radius
//     const outerR = innerR + getThickness(val);  // Variable outer radius

//     segments.push({
//         label: labels[i],
//         value: val,
//         startAngle: angleStart,
//         endAngle: angleEnd,
//         innerRadius: innerR,
//         outerRadius: outerR,
//         color: colors[i]
//     });

//     // Arc Path
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, outerR, angleStart, angleEnd);
//     ctx.arc(centerX, centerY, innerR, angleEnd, angleStart, true);
//     ctx.closePath();
//     ctx.fillStyle = colors[i];
//     ctx.fill();

//     // // Label
//     // const labelAngle = angleStart + angle / 2;
//     // const labelRadius = innerR + (outerR - innerR) / 2;
//     // const labelX = centerX + Math.cos(labelAngle) * labelRadius;
//     // const labelY = centerY + Math.sin(labelAngle) * labelRadius;

//     // ctx.fillStyle = "#222";
//     // ctx.font = "bold 12px sans-serif";
//     // ctx.textAlign = "center";
//     // ctx.textBaseline = "middle";
//     // ctx.fillText(`${val}%`, labelX, labelY);

//     angleStart = angleEnd;
// });

// canvas.addEventListener("mousemove", function (e) {
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const dx = x - centerX;
//     const dy = y - centerY;
//     const distance = Math.sqrt(dx * dx + dy * dy);
//     const angle = Math.atan2(dy, dx);
//     const fixedAngle = angle < -Math.PI / 2 ? angle + 2 * Math.PI : angle;

//     let found = false;

//     for (let segment of segments) {
//         if (
//             fixedAngle >= segment.startAngle &&
//             fixedAngle <= segment.endAngle &&
//             distance >= segment.innerRadius &&
//             distance <= segment.outerRadius
//         ) {
//             const tooltip = document.getElementById("tooltip");
//             tooltip.style.left = `${e.pageX + 10}px`;
//             tooltip.style.top = `${e.pageY + 10}px`;
//             tooltip.innerHTML = `<strong>${segment.label}</strong>: ${segment.value}%`;
//             tooltip.style.display = "block";
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         document.getElementById("tooltip").style.display = "none";
//     }
// });



// // Inner circle text
// ctx.fillStyle = "#000";
// ctx.font = "bold 16px sans-serif";
// ctx.textAlign = "center";
// ctx.fillText("BREAKDOWN OF", centerX, centerY - 10);
// ctx.fillText("THEMES ACROSS", centerX, centerY + 10);
// ctx.fillText("ALL CAREERS", centerX, centerY + 30);

// // Legend0
// const legendDiv = document.getElementById('legend0');
// labels.forEach((label, i) => {
//     const item = document.createElement('div');
//     item.className = 'legend-item';

//     const box = document.createElement('div');
//     box.className = 'color-box';
//     box.style.backgroundColor = colors[i];

//     const text = document.createElement('span');
//     text.textContent = label;

//     item.appendChild(box);
//     item.appendChild(text);
//     legendDiv.appendChild(item);
// });

// });  

//chart 4

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("yourCpiChart").getContext("2d");

    const cpiLabels = ['Consulting', 'Exams like UPSC', 'Higher Education', 'Technology', 'Industry/Core Engineering', 'Finance/Venture Capital','Other', 'Still finding a job','Entrepreneurship/Freelancing', 'Design/Arts', 'Product Management'];

    const chartData = {
        "Aerospace Engineering": [2,0,3,4,3,0,1,2,1,0,0],
        "Biosciences and Bioengineering": [0,0,2,0,0,0,0,0,0,0,0],
        "Chemical Engineering": [4,2,1,7,7,1,2,2,1,0,1],
        "Chemistry": [2,0,2,0,1,0,0,1,0,0,1],
        "Civil Engineering": [2,3,2,3,6,2,2,2,1,0,0],
        "Computer Science & Engineering": [0,0,2,21,4,4,2,0,0,0,1],
        "Earth Sciences": [0,1,1,0,1,0,0,0,0,0,0],
        "Economics": [3,0,1,0,0,1,0,0,0,0,0],
        "Electrical Engineering": [1,1,7,16,19,3,0,3,2,0,0],
        "Energy Science and Engineering": [0,1,2,0,3,0,0,1,0,0,0],
        "Environmental Science and Engineering (ESED)": [0,2,3,0,2,1,0,1,0,0,0],
        //"Humanities & Social Sciences": [0,0,0,0,0,0,0,1,0,0,0],
        "IDC": [0,0,0,0,0,0,0,3,2,2,0],
        //"IEOR": [0, 4, 0, 0, 0, 0],
        //"Management": [0, 0, 1, 0, 0, 0],
        "Mathematics": [0,0,0,0,0,1,1,0,0,0,0],
        "Mechanical Engineering": [4,0,10,9,6,3,2,3,1,0,2],
        "Metallurgical Engineering & Materials Science": [0,0,1,4,3,2,0,0,1,0,2],
        "Other": [2,0,0,3,0,0,1,2,0,0,0],
        "Physics": [0,2,10,1,1,1,0,1,0,0,0],
        //"Resources Engineering": [1, 0, 0, 0, 0, 0]
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
        //'#1d3557', // deep blue
        '#457b9d', // muted blue
        //'#a8dadc', // pastel cyan
        //'#f28482', // soft coral
        '#84a59d', // sage
        '#f6bd60', // peach
        'darkkhaki', // cream
        '#adb5bd', // soft gray
        '#6c757d', // medium gray
        '#495057', // dark gray
       // '#343a40'  // charcoal
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
                    //text: 'CPI Distribution by Department'
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

