new Chart(document.getElementById("aiToolBubbleChart"), {
    type: "bar",
    data: {
        labels: ['138', 'For Resume making', 'For assignments/projects', 'For email', 'applications', 'club work', 'or POR-related tasks'],
        datasets: [{'label': '282', 'backgroundColor': '#1f77b4', 'data': [1, 0, 0, 0, 0, 0, 0]}, {'label': 'Aerospace Engineering', 'backgroundColor': '#ff7f0e', 'data': [0, 3, 3, 1, 1, 1, 1]}, {'label': 'Biosciences and Bioengineering', 'backgroundColor': '#2ca02c', 'data': [0, 1, 0, 1, 1, 1, 1]}, {'label': 'Chemical Engineering', 'backgroundColor': '#9467bd', 'data': [0, 7, 4, 8, 8, 8, 8]}, {'label': 'Chemistry', 'backgroundColor': '#d62728', 'data': [0, 3, 1, 1, 1, 1, 1]}, {'label': 'Civil Engineering', 'backgroundColor': '#8c564b', 'data': [0, 5, 1, 6, 6, 6, 6]}, {'label': 'Computer Science & Engineering', 'backgroundColor': '#e377c2', 'data': [0, 10, 6, 11, 11, 11, 11]}, {'label': 'Earth Sciences', 'backgroundColor': '#7f7f7f', 'data': [0, 2, 0, 3, 3, 3, 3]}, {'label': 'Economics', 'backgroundColor': '#bcbd22', 'data': [0, 3, 1, 3, 3, 3, 3]}, {'label': 'Electrical Engineering', 'backgroundColor': '#17becf', 'data': [0, 23, 7, 20, 20, 20, 20]}, {'label': 'Energy Science and Engineering', 'backgroundColor': '#1f77b4', 'data': [0, 1, 3, 0, 0, 0, 0]}, {'label': 'Environmental Science and Engineering (ESED)', 'backgroundColor': '#ff7f0e', 'data': [0, 3, 2, 1, 1, 1, 1]}, {'label': 'IDC', 'backgroundColor': '#2ca02c', 'data': [0, 2, 1, 1, 1, 1, 1]}, {'label': 'IEOR', 'backgroundColor': '#9467bd', 'data': [0, 0, 1, 2, 2, 2, 2]}, {'label': 'Mathematics', 'backgroundColor': '#d62728', 'data': [0, 1, 1, 2, 2, 2, 2]}, {'label': 'Mechanical Engineering', 'backgroundColor': '#8c564b', 'data': [0, 11, 7, 8, 8, 8, 8]}, {'label': 'Metallurgical Engineering & Materials Science', 'backgroundColor': '#e377c2', 'data': [0, 3, 3, 3, 3, 3, 3]}, {'label': 'Other', 'backgroundColor': '#7f7f7f', 'data': [0, 2, 1, 0, 0, 0, 0]}, {'label': 'Physics', 'backgroundColor': '#bcbd22', 'data': [0, 9, 4, 3, 3, 3, 3]}, {'label': 'Resources Engineering', 'backgroundColor': '#17becf', 'data': [0, 0, 0, 1, 1, 1, 1]}]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Situations where ChatGPT was NOT used, by Department"
            },
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                stacked: true,
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