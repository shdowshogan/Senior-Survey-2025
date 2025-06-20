document.addEventListener('DOMContentLoaded', function () {
const labels = [
    "Cycling", "Walking everywhere", "My legs were jacked because of it",
        "Auto", "Which you didn't get when you need it", 
        "Buggies/Ev's 9If I could ever catch hold of them)", "Other"
        
];

const values = [21.9, 20.7, 20.7, 12.8, 12.8, 10.4, 0.7];
const colors = [
    "#a6c8ff", "#9fdab3", "#ffe299", "#ffc1a6", "#9fe3e7",
        "#d3b3f3", "#fff2b2", "#ace7ef", "#a9e7c3", "#f4a1a6",
        "#e7c9f4", "#a6e1e5", "#fbc2c4"
];



// Setup canvas
const canvas = document.getElementById('doughnut11');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Utility function to scale thickness based on value
function getThickness(value) {
    const min = 20, max = 60, maxVal = 38;
    return min + (value / maxVal) * (max - min);
}

let total = values.reduce((a, b) => a + b, 0);
let angleStart = -Math.PI / 2;

// Draw arcs with varying thickness

const segments = [];

// Updated drawing loop with inner-growing slices
values.forEach((val, i) => {
    const angle = (val / total) * 2 * Math.PI;
    const angleEnd = angleStart + angle;

    const innerR = 120;  // Fixed inner radius
    const outerR = innerR + getThickness(val);  // Variable outer radius

    segments.push({
        label: labels[i],
        value: val,
        startAngle: angleStart,
        endAngle: angleEnd,
        innerRadius: innerR,
        outerRadius: outerR,
        color: colors[i]
    });

    // Arc Path
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerR, angleStart, angleEnd);
    ctx.arc(centerX, centerY, innerR, angleEnd, angleStart, true);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();

    // // Label
    // const labelAngle = angleStart + angle / 2;
    // const labelRadius = innerR + (outerR - innerR) / 2;
    // const labelX = centerX + Math.cos(labelAngle) * labelRadius;
    // const labelY = centerY + Math.sin(labelAngle) * labelRadius;

    // ctx.fillStyle = "#222";
    // ctx.font = "bold 12px sans-serif";
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.fillText(`${val}%`, labelX, labelY);

    angleStart = angleEnd;
});

canvas.addEventListener("mousemove", function (e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const fixedAngle = angle < -Math.PI / 2 ? angle + 2 * Math.PI : angle;

    let found = false;

    for (let segment of segments) {
        if (
            fixedAngle >= segment.startAngle &&
            fixedAngle <= segment.endAngle &&
            distance >= segment.innerRadius &&
            distance <= segment.outerRadius
        ) {
            const tooltip = document.getElementById("tooltip");
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.innerHTML = `<strong>${segment.label}</strong>: ${segment.value}%`;
            tooltip.style.display = "block";
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("tooltip").style.display = "none";
    }
});



// Inner circle text
ctx.fillStyle = "#000";
ctx.font = "bold 16px sans-serif";
ctx.textAlign = "center";
ctx.fillText("BREAKDOWN OF", centerX, centerY - 10);
ctx.fillText("THEMES ACROSS", centerX, centerY + 10);
ctx.fillText("ALL CAREERS", centerX, centerY + 30);

// Legend19
const legendDiv = document.getElementById('legend11');
labels.forEach((label, i) => {
    const item = document.createElement('div');
    item.className = 'legend-item';

    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.backgroundColor = colors[i];

    const text = document.createElement('span');
    text.textContent = label;

    item.appendChild(box);
    item.appendChild(text);
    legendDiv.appendChild(item);
});

});  

