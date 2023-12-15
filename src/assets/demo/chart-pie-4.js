Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let barre2;

function createbarre2(labels, data) {

  if (barre2) {
    barre2.data.labels = labels;
    barre2.data.datasets[0].data = data;
    barre2.update();
  } else {
    const ctx = document.getElementById('barre2').getContext('2d');
    barre2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        }],
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                return value;
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'Valeur'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Étiquette'
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index];
            }
          }
        }
      }
    });
  }
}