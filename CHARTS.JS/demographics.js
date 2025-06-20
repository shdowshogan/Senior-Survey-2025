import { data } from "../Charts/demographics1.js";

//chart1
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
