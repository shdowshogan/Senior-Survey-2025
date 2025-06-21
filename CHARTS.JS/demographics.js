// import { data } from "../Charts/demographics1.js";

// fetch('https://code.highcharts.com/mapdata/custom/world-robinson.geo.json')
//   .then(response => response.json())
//   .then(worldMap => {
//     Highcharts.mapChart('india-map', {
//       chart: {
//         map: worldMap,
//         backgroundColor: 'transparent'
//       },
//       title: {
//         text: 'City-wise Distribution'
//       },
//       mapNavigation: {
//         enabled: true
//       },
//       mapView: {
//         center: [80, 22],
//         zoom: 4
//       },
//       accessibility: {
//         enabled: false
//       },
//       colorAxis: {
//         min: 0,
//         max: 40,
//         stops: [
//           [0, '#E0F3F8'],
//           [0.5, '#A8DDB5'],
//           [1, '#43A2CA']
//         ]
//       },
//       series: [
//         {
//           type: 'map',
//           name: 'Background World Map',
//           nullColor: 'rgba(200, 200, 200, 0.1)',
//           showInLegend: false
//         },
//         {
//           type: 'mappoint',
//           name: 'City Percentage',
//           data: data,
//           colorKey: 'value',
//           color: '#43A2CA',
//           marker: {
//             radius: 6
//           },
//           tooltip: {
//             pointFormat: '{point.name}: <b>{point.value}%</b>'
//           }
//         }
//       ]
//     });
//   });
