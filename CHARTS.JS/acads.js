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



    // Chart data for all 19 charts
    const chartData = [

        //chART 1
        {
            labels: ['CPI<7', '7<CPI<8', '8<CPI<9', 'CPI>9'],
            datasets: [
                {
                    label: 'Aerospace Engineering',
                    backgroundColor: '#072844',
                    data: [2, 7, 12, 5]
                },

                {
                    label: 'Chemical Engineering',
                    backgroundColor: '#6C92AE',
                    data: [6, 5, 6, 4]
                },
                
                {
                    label: 'Civil Engineering',
                    backgroundColor: '#E0E3E6',
                    data: [2, 11, 4, 1]
                },
                {
                    label: 'Computer Science & Engineering',
                    backgroundColor: '#0C3654',
                    data: [2, 7, 7, 17]
                },

                {
                    label: 'Electrical Engineering',
                    backgroundColor: '#91AFC4',
                    data: [4, 9, 18, 20]
                },
                
                {
                    label: 'Mechanical Engineering',
                    backgroundColor: '#2C5C0E',
                    data: [9, 12, 24, 8]
                },
                {
                    label: 'Metallurgical Engineering & Materials Science',
                    backgroundColor: '#4B8428',
                    data: [4, 4, 5, 2]
                },
                {
                    label: 'Other',
                    backgroundColor: '#72A752',
                    data: [11, 17, 32, 12]
                },

            ]
        },

        //chart 2
        {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#072B44',
                    data: [6, 24, 29, 10, 3]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#205378',
                    data: [4, 6, 29, 50, 19]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#6C92AE',
                    data: [13, 14, 9, 3, 1]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#E0E3E6',
                    data: [0, 1, 5, 22, 41]
                },
                {
                    label: 'CPI not choosen',
                    backgroundColor: '#1E4460',
                    data: [0, 1,1,0,0]
                }
            ]
        },

        //chart 3
        {
            labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#072B44',
                    data: [1, 3, 19, 29, 19]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#205378',
                    data: [3, 3, 15, 52, 34]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#6C92AE',
                    data: [0, 3, 9, 12, 16]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#E0E3E6',
                    data: [0, 2, 9, 29, 29]
                },
                {
                    label: 'CPI not choosen',
                    backgroundColor: '#1E4460',
                    data: [0, 1,1,0,0]
                }
            ]
        },

        //chart 4
        {
            labels: ['I was and I still am', 'I was never interested', 'I was not before, now I am', 'I was, but not anymore'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#072B44',
                    data: [30, 21, 3, 17]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#205378',
                    data: [50, 21, 3, 32]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#6C92AE',
                    data: [10, 13, 5, 12]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#E0E3E6',
                    data: [43, 10, 1, 15]
                },
                {
                    label: 'CPI not choosen',
                    backgroundColor: '#1E4460',
                    data: [1,1,0,0]
                }
            ]
        },


         // chart 5
         {
            labels: ['I was and I still am', 'I was never interested', 'I was not before, now I am', 'I was, but not anymore'],
            datasets: [
                {
                    label: 'Aerospace Engineering',
                    backgroundColor: '#072844',
                    data: [13, 5, 0, 8 ]
                },
                
                {
                    label: 'Chemical Engineering',
                    backgroundColor: '#6C92AE',
                    data: [6, 8, 1, 6]
                },
                
                {
                    label: 'Civil Engineering',
                    backgroundColor: '#E0E3E6',
                    data: [8, 7, 0, 3]
                },
                {
                    label: 'Computer Science & Engineering',
                    backgroundColor: '#0C3654',
                    data: [20, 4, 4, 4]
                },
                
                {
                    label: 'Electrical Engineering',
                    backgroundColor: '#91AFC4',
                    data: [23, 8, 0, 20]
                },
                
                {
                    label: 'Mechanical Engineering',
                    backgroundColor: '#2C5C0E',
                    data: [ 17, 16, 3, 17]
                },
                {
                    label: 'Metallurgical Engineering & Materials Science',
                    backgroundColor: '#4B8428',
                    data: [3, 6, 1, 5]
                },
                {
                    label: 'Other',
                    backgroundColor: '#72A752',
                    data: [44, 11, 3, 14]
                },

            ]
        },

        //chart 6
        {
            labels: ['I didnt need classes', 'Only if attendance was taken', 'Rarely, depended on my mood', 'Yes, all of them', 'Yes, only to fall asleep :P'],
            datasets: [
                {
                    label: 'Aerospace Engineering',
                    backgroundColor: '#072844',
                    data: [1, 8, 7, 9, 1 ]
                },

                {
                    label: 'Chemical Engineering',
                    backgroundColor: '#6C92AE',
                    data: [0, 8, 4, 6, 3]
                },

                {
                    label: 'Civil Engineering',
                    backgroundColor: '#E0E3E6',
                    data: [0, 8, 1, 7, 2]
                },
                {
                    label: 'Computer Science & Engineering',
                    backgroundColor: '#0C3654',
                    data: [3, 7, 11, 9, 3]
                },

                {
                    label: 'Electrical Engineering',
                    backgroundColor: '#91AFC4',
                    data: [0, 12, 13, 18, 8]
                },
                
                {
                    label: 'Mechanical Engineering',
                    backgroundColor: '#2C5C0E',
                    data: [ 2, 14, 18, 15, 3]
                },
                {
                    label: 'Metallurgical Engineering & Materials Science',
                    backgroundColor: '#4B8428',
                    data: [0, 6, 4, 3, 2]
                },
                {
                    label: 'Other',
                    backgroundColor: '#72A752',
                    data: [2, 12, 15, 38, 7]
                },

            ]
        }, 
        

        //chart 7
        { 
            labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: '#072B44',
                    data: [5, 10, 21, 22, 13]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: '#205378',
                    data: [7, 15, 28, 38, 20]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: '#6C92AE',
                    data: [3, 16, 9, 10, 2]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: '#E0E3E6',
                    data: [3, 19, 23, 18, 6]
                },
                {
                    label: 'CPI not choosen',
                    backgroundColor: '#1E4460',
                    data: [0,1,1,0,0]
                }
            ]
        },

        // chart 8
{
    labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
    datasets: [
        {
            label: 'Aerospace Engineering',
            backgroundColor: '#072844',
            data: [1, 3, 9, 6, 7 ]
        },

        {
            label: 'Chemical Engineering',
            backgroundColor: '#6C92AE',
            data: [3, 4, 7, 5, 2]
        },

        {
            label: 'Civil Engineering',
            backgroundColor: '#E0E3E6',
            data: [3, 0, 6, 7, 2]
        },
        {
            label: 'Computer Science & Engineering',
            backgroundColor: '#0C3654',
            data: [2, 7, 10, 9, 5]
        },
       
        {
            label: 'Electrical Engineering',
            backgroundColor: '#91AFC4',
            data: [4, 18, 11, 14, 4]
        },
        
        {
            label: 'Mechanical Engineering',
            backgroundColor: '#2C5C0E',
            data: [ 1, 10, 15, 20, 6]
        },
        {
            label: 'Metallurgical Engineering & Materials Science',
            backgroundColor: '#4B8428',
            data: [0, 2, 6, 3, 4]
        },
        {
            label: 'Other',
            backgroundColor: '#72A752',
            data: [4, 17, 18, 24, 11]
        },
        
    ]
},                     




    //     //chart 6
    //     {
    //         labels: ['Considering one or more offers', 'Currently searching for a position', 'Have accepted a position', 'Have not yet begun my job search', 'Not planning on taking a job', 'Will be self-employed'],
    //         datasets: [
    //             {
    //                 label: '7 < CPI < 8',
    //                 backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //                 data: [3, 10, 51, 0, 8, 0]
    //             },
    //             {
    //                 label: '8 < CPI < 9',
    //                 backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //                 data: [4, 6, 83, 1, 11, 2]
    //             },
    //             {
    //                 label: 'CPI < 7',
    //                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //                 data: [1, 8, 19, 6, 5, 0]
    //             },
    //             {
    //                 label: 'CPI > 9',
    //                 backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //                 data: [2, 2, 59, 0, 6, 0]
    //             }
    //         ]
    //     },

    //     //chart 7
    //     {
    //         labels: ['Exceptionally well, Master of the universe level', 'Moderately well, I can survive but not thrive', 'Not well, Help needed', 'Slightly well, Only if life had a syllabus', 'Very well, Ready to rock'],
    //         datasets: [
    //             {
    //                 label: '7 < CPI < 8',
    //                 backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //                 data: [13, 17, 1, 4, 37]
    //             },
    //             {
    //                 label: '8 < CPI < 9',
    //                 backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //                 data: [15, 22, 0, 7, 60]
    //             },
    //             {
    //                 label: 'CPI < 7',
    //                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //                 data: [5, 12, 2, 4, 17]
    //             },
    //             {
    //                 label: 'CPI > 9',
    //                 backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //                 data: [5, 10, 0, 10, 43]
    //             }
    //         ]
    //     },

    //     //chart 8
    //     {
    //         labels: ['Female', 'Male','Thats the most stupid question influenced by the western world. Didnt expect this question from such institution of such a wonderful country. There is no identification. I am a male' ],
    //         datasets: [
    //             {
    //                 label: '7 < CPI < 8',
    //                 backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //                 data: [18, 54, 0]
    //             },
    //             {
    //                 label: '8 < CPI < 9',
    //                 backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //                 data: [22, 85, 0]
    //             },
    //             {
    //                 label: 'CPI < 7',
    //                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //                 data: [13, 27, 0]
    //             },
    //             {
    //                 label: 'CPI > 9',
    //                 backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //                 data: [8, 59, 1]
    //             }
    //         ]
    //     },


    //         // Chart 9
    // {
    //     labels: ['No, Im a first generation IITian :)', 'Yes my siblings(s)', 'Yes, my parent(s)', 'Yes, other family members(s)'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [58, 5, 4, 5]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [79, 12, 4, 12]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [33, 3, 1, 3]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [54, 6, 6, 3]
    //         }
    //     ]
    // },
    // // Chart 10
    // {
    //     labels: ['Considered but never received counselling/therapy, people around me helped', 'No, I never felt the need to', 'Yes, availed services at the SWC', 'Yes, availed services outside the institute'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [17, 41, 10, 4]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [34, 57, 8, 7]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [11, 14, 11, 3]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [13, 46, 5, 3]
    //         }
    //     ]
    // },
    // // Chart 11
    // {
    //     labels: ['I am in a relationship, and my partner is from IITB', 'I am in a relationship, and my partner is not form IITB', 'I misstook No as a Yes so yeah I am in a realtionship but she dosent know  XD','Its Complicated', 'Married', 'None of your business', 'Single', 'one sided love to someone who was in insights'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [16, 13, 0, 0, 0, 1, 40, 1]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [22, 15, 0, 6, 0, 0, 60, 0]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [6, 7, 0, 2, 0, 0, 25, 0]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [9, 10, 1, 3, 2, 0, 39, 0]
    //         }
    //     ]
    // },

    //     // Chart 12
    // {
    //     labels: ['0', '1', '2', '3-5', '>5'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [37, 19, 13, 1, 0]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [54, 32, 11, 4, 2]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [21, 11, 4, 2, 1]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [37, 21, 2, 3, 1]
    //         }
    //     ]
    // },
    // // Chart 13
    // {
    //     labels: ['A few times a month', 'A few times a semester', 'Daily', 'Every week', 'I have never had sex', 'Prefer not to answer'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [7, 4, 2, 4, 35, 16]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [5, 9, 0, 10, 57, 19]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [3, 2, 2, 4, 19, 7]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [0, 5, 0, 7, 33, 15]
    //         }
    //     ]
    // },
    // // Chart 14
    // {
    //     labels: ['Before coming to IIT', 'During my first year at IIT', 'I never consumed alcohol', 'Post my first year at IIT'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [6, 5, 27, 33]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [19, 4, 41, 37]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [6, 5, 10, 19]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [12, 5, 33, 17]
    //         }
    //     ]
    // },
    // // Chart 15
    // {
    //     labels: ['Every month', 'Never', 'Occasionally', 'Once a week', 'Only once', 'Very often'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [4, 28, 29, 3, 4, 3]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [8, 42, 37, 7, 9, 0]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [3, 13, 16, 3, 2, 2]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [6, 36, 9, 8, 6, 1]
    //         }
    //     ]
    // },
    // // Chart 16
    // {
    //     labels: ['No', 'Yes'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [19, 53]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [36, 69]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [20, 20]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [34, 34]
    //         }
    //     ]
    // },
    // // Chart 17
    // {
    //     labels: ['I tried but didnt get selected', 'No, I never tried', 'Yes, at inter IIT tech', 'Yes, at inter-IIT cult', 'Yes, at inter-IIT sports'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [11, 48, 3, 9, 3]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [14, 66, 10, 8, 5]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [5, 27, 1, 4, 3]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [6, 49, 8, 5, 1]
    //         }
    //     ]
    // },
    // // Chart 18
    // {
    //     labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [37, 11, 14, 3, 3]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [46, 21, 22, 14, 14]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [18, 5, 9, 3, 3]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [41, 14, 12, 2, 2]
    //         }
    //     ]
    // },
    // // Chart 19
    // {
    //     labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
    //     datasets: [
    //         {
    //             label: '7 < CPI < 8',
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             data: [1, 4, 7, 22, 38]
    //         },
    //         {
    //             label: '8 < CPI < 9',
    //             backgroundColor: 'rgba(255, 206, 86, 0.5)',
    //             data: [0, 1, 10, 48, 47]
    //         },
    //         {
    //             label: 'CPI < 7',
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             data: [0, 4, 13, 13, 9]
    //         },
    //         {
    //             label: 'CPI > 9',
    //             backgroundColor: 'rgba(75, 192, 192, 0.5)',
    //             data: [1, 6, 12, 23, 27]
    //         }
    //     ]
    // }
        

];

// Original chart data (to be used for reset)
const originalChartData = JSON.parse(JSON.stringify(chartData));

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
for (let i = 1; i <= chartData.length; i++) {
    charts.push(createChart(i));
}

// Function to create chart with given index
function createChart(index) {
    const chartContainer = document.getElementById(`chartContainer${index}`);
    const ctx = chartContainer.getContext('2d');
    return new Chart(ctx, {
        type: 'bar',
        data: chartData[index - 1],
        options: chartOptions
    });
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.legend');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const datasetIndex = parseInt(button.getAttribute('data-dataset'));
        const chartIndex = button.closest('.container').querySelector('canvas').id.replace('chartContainer', '') - 1;

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
        const chartIndex = resetButton.closest('.container').querySelector('canvas').id.replace('chartContainer', '') - 1;

        const originalData = originalChartData[chartIndex];

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
