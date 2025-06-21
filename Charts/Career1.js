document.addEventListener('DOMContentLoaded', function() {

const data= [
  ['in-mh', 31.7],
  ['in-rj', 11.9],
  ['in-up', 7.2],
  ['in-gj', 6.1],
  ['in-br', 5.4],
  ['in-wb', 4.7],
  ['in-mp', 4.0],
  ['in-ap', 3.2],
  ['in-kl', 3.2],
  ['in-hr', 2.9],
  ['in-tg', 2.9],
  ['in-jh', 2.9],
  ['in-tn', 2.5],
  ['in-ka', 2.2],
  ['in-or', 1.8],
  ['in-ct', 1.8],
  ['in-ut', 1.4],
  ['in-dl', 1.1],
  ['in-as', 1.1],
  ['in-ga', 0.7],
  ['in-tr', 0.4],
  ['in-pb', 0.4],
  ['in-ch', 0.4]
  // 'International' would not be shown here
];

Highcharts.mapChart('india-map', {
    chart: {
        map: 'countries/in/in-all',
        backgroundColor :'transparent'
    },
    title:{
        text:''
    },
    colorAxis: {
        min: 0,
        stops: [
            [0, '#E0F3F8'],
            [0.5, '#A8DDB5'],
            [1, '#43A2CA']
        ]
    },
    series: [{
        data: data,
        name: 'Percentage',
        borderColor:'black',
        states: {
            hover: {
                color: '#FF5733'
            }
        },
        dataLabels: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.value}%</b>'
        }
    }]
});

});