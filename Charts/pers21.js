document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('doughnut101').getContext('2d');

    const doughnut8 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['H3', 'H2', 'H15', 'H6', 'H5', 'H9', 'H10', 'H17', 'H18', 'Tansa', 'H14', 'H12', 'H13', 'H11', 'H4'
              
              ],
            datasets: [{
                data: [38, 33, 33, 32, 31, 26, 16, 15, 14, 10, 10, 10, 9, 4, 1],  // Example percentages
                backgroundColor: [
                    "#D9B2AF", // Soft Blush → Dusty Rose
"#8FA7A3", // Powder Blue → Dusty Teal
"#9D92BA", // Pale Lavender → Muted Lavender
"#D9A88A", // Pastel Peach → Burnt Peach
 "#6C756B", // Dusty Olive → Deep Olive Gray
"#D4A092", // Muted Coral → Burnt Coral
 "#5C4B82", // Soft Purple Gray → Deep Lilac
"#A68E84", // Soft Taupe → Smoky Taupe
"#3A556B", // Dusty Steel Blue → Steel Charcoal
 "#BFA57A", // Warm Sand → Desert Tan
 "#6F805D", // Faded Green → Mossy Green
 "#BE9FAA", // Rose Mist → Dusty Mauve
"#52615F", // Slate Blue-Green → Gunmetal Blue-Green
"#96886C", // Soft Mocha → Cocoa Dust
"#49385A", // Dusty Plum → Deep Plum
 "#A2B27D", // Pale Pistachio → Olive Pistachio
 "#805B49", // Muted Copper → Burnt Copper
"#8C989C", // Sky Gray → Storm Gray
 "#5E4F43"  // Warm Charcoal Brown → Deep Chestnut
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            cutout: '65%', // donut thickness
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.parsed}%`;
                        }
                    }
                },
                title: {
                    display: true,
                    
                    font: {
                        size: 16
                    },
                    padding: {
                        bottom: 10
                    }
                }
            }
        }
    });
});
