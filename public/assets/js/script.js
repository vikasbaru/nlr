
// line-graph


$(function () {
  'use strict'

  feather.replace({
    'aria-hidden': 'true'
  }),
    $('#container4').highcharts({

      exporting: {
        buttons: {
          contextButton: {
            enabled: false
          }
        }
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
          enabled: false,
        },
        gridLineColor: 'transparent',
        title: {
          text: "x"
        },
        // gridLineWidth: 1,
        // min: 0,
        // max: 10,
        // tickInterval: 1,
      },
      yAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
          enabled: false
        },
        gridLineColor: 'transparent',
        title: {
          text: "y"
        },
        min: 0,
        max: 2500,
        tickInterval: .5,
        lineWidth: 0,
        title: {
          text: null
        }
      },
      series: [{
        type: "line",
        color: ' rgb(41, 204, 152)',
        marker: {
          enabled: false
        },
        data: [

          [1200],
          [800],
          [600],
          [400],
          [600],
          [900],
          [1300],
          [1900],
          [1500],
          [900],
          [10],
          [10],
          [300],
          [600],
          [900],
          [1300],
          [2000],
          [2341],
          [1800],
          [1500],
          [1200],
          [900],

        ]
      }]
    });
});

// hight-chart-1

$(function () {
  'use strict';
  (function (factory) {
    if (typeof module === 'object' && module.exports) {
      module.exports = factory;
    } else {
      factory(Highcharts);
    }
  }(function (Highcharts) {
    (function (H) {
      H.wrap(H.seriesTypes.column.prototype, 'translate', function (proceed) {
        const options = this.options;
        const topMargin = options.topMargin || 0;
        const bottomMargin = options.bottomMargin || 0;

        proceed.call(this);

        H.each(this.points, function (point) {
          if (options.borderRadiusTopLeft || options.borderRadiusTopRight || options.borderRadiusBottomRight || options.borderRadiusBottomLeft) {
            const w = point.shapeArgs.width;
            const h = point.shapeArgs.height;
            const x = point.shapeArgs.x;
            const y = point.shapeArgs.y;

            let radiusTopLeft = H.relativeLength(options.borderRadiusTopLeft || 0, w);
            let radiusTopRight = H.relativeLength(options.borderRadiusTopRight || 0, w);
            let radiusBottomRight = H.relativeLength(options.borderRadiusBottomRight || 0, w);
            let radiusBottomLeft = H.relativeLength(options.borderRadiusBottomLeft || 0, w);

            const maxR = Math.min(w, h) / 2

            radiusTopLeft = radiusTopLeft > maxR ? maxR : radiusTopLeft;
            radiusTopRight = radiusTopRight > maxR ? maxR : radiusTopRight;
            radiusBottomRight = radiusBottomRight > maxR ? maxR : radiusBottomRight;
            radiusBottomLeft = radiusBottomLeft > maxR ? maxR : radiusBottomLeft;

            point.dlBox = point.shapeArgs;

            point.shapeType = 'path';
            point.shapeArgs = {
              d: [
                'M', x + radiusTopLeft, y + topMargin,
                'L', x + w - radiusTopRight, y + topMargin,
                'C', x + w - radiusTopRight / 2, y, x + w, y + radiusTopRight / 2, x + w, y + radiusTopRight,
                'L', x + w, y + h - radiusBottomRight,
                'C', x + w, y + h - radiusBottomRight / 2, x + w - radiusBottomRight / 2, y + h, x + w - radiusBottomRight, y + h + bottomMargin,
                'L', x + radiusBottomLeft, y + h + bottomMargin,
                'C', x + radiusBottomLeft / 2, y + h, x, y + h - radiusBottomLeft / 2, x, y + h - radiusBottomLeft,
                'L', x, y + radiusTopLeft,
                'C', x, y + radiusTopLeft / 2, x + radiusTopLeft / 2, y, x + radiusTopLeft, y,
                'Z'
              ]
            };
          }

        });
      });
    }(Highcharts));
  }));

  Highcharts.chart('container1', {

    title: {
      text: null
    },

    chart: {
      type: ''
    },
    xAxis: {
      categories: ['Direct', "API", "Email", "Invite link", "Widget"],
      labels: {
        rotation: 0,
      },
    },

    plotOptions: {
      series: {
        pointWidth: 35,
        states: {
          hover: {
            color: 'black'
          }
        }
      },
      column: {
        grouping: false,
        borderRadiusTopLeft: 7,
        borderRadiusTopRight: 7,
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        },


      }
    },
    yAxis: {
      min: 0,
      max: 30,
      tickInterval: 10,
      stackLabels: {
        enabled: true
      }
    },
    exporting: {
      enabled: false
    },
    exporting: {
      buttons: {
        contextButton: {
          enabled: false
        }
      }
    },

    legend: {
      enabled: false
    },
    series: [{
      data: [3, 17, 0, 30, 10],
      type: 'column',
      color: 'rgb(107 91 191)',


    }]
  });

  // hight-chart-2

  Highcharts.chart('container2', {

    title: {
      text: null
    },
    chart: {
      type: ''
    },
    xAxis: {
      categories: ["1 ster", "2 sterren", "3 sterren", "4 sterren", "5 sterren"]
    },
    plotOptions: {
      series: {
        pointWidth: 35,
        states: {
          hover: {
            color: 'black'
          }
        }
      },
      column: {
        grouping: false,
        borderRadiusTopLeft: 7,
        borderRadiusTopRight: 7,
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        }
      }
    },

    yAxis: {
      min: 0,
      max: 30,
      tickInterval: 10,
      stackLabels: {
        enabled: true
      }

    },
    exporting: {
      enabled: false
    },
    exporting: {
      buttons: {
        contextButton: {
          enabled: false
        }
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      data: [3, 1, 17, 30, 10],
      type: 'column',
      color: ' rgb(41, 204, 152)',
      dataLabels: {
        style: {
          color: 'green'
        }
      }
    }]

  });

});