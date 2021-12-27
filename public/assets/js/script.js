/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({
    'aria-hidden': 'true'
  })

  const ctx = document.getElementById('lineChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['', '', '', '', ''],
      datasets: [{
        label: '',
        data: [9, 8, 9, 8, 9],
        fill: false,
        borderWidth: 2,
        borderColor: 'rgba(41, 204, 152, 1)'
      }]
    },
    options: {
      legend: {
        display: false
      },
      layout: {
        padding: {
          top: 15
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }]
      }
    }
  });

  function drawBarChart(ele, lab, dt, col) {

    var ctx1 = document.getElementById(ele);
    var myChart1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: lab,
        datasets: [{
          minBarLength: 10,
          data: dt,
          backgroundColor: col,
          borderRadius: 5
        }]
      },
      options: {
        legend: {
          display: false
        },
        layout: {
          padding: {
            top: 25
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
            },
            ticks: {
              min: 0,
              max: 30,
        
              // forces step size to be 5 units
              stepSize: 10 // <----- This prop sets the stepSize
            }
          }]
        }
      }
    });
}

drawBarChart(
  "barPrimaryChart", 
  ["Direct", "API", "Email", "Invite link", "Widget"],
  [3, 17, 0, 30, 10],
  "rgb(107 91 191)"
);
drawBarChart(
  "barSecondaryChart",
  ["1 ster", "2 sterren", "3 sterren", "4 sterren", "5 sterren"],
  [3, 1, 17, 30, 10],
  "rgb(41, 204, 152)"
);

})()