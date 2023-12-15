Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let barre1;

function createbarre1(labels, data) {
  const colors = [
    '#4285f4',
    '#64B5F6',
    '#90CAF9',
    '#B3E0FF',
    '#4FC3F7',
    '#1976D2',
    '#1E88E5',
    '#2196F3',
    '#42A5F5',
    '#64B5F6',
    '#90CAF9',
    '#BBDEFB',
    '#E3F2FD',
    '#0D47A1',
    '#1565C0',
    '#1976D2',
    '#1E88E5',
    '#2196F3',
    '#64B5F6',
    '#90CAF9',
    '#BBDEFB',
    '#E3F2FD',
    '#81D4FA',
    '#B3E0FF',
    '#E1F5FE',
  ];

 



  if (barre1) {
    barre1.data.labels = labels;
    barre1.data.datasets[0].data = data;
    barre1.update();
  } else {
    const ctx = document.getElementById('barre1').getContext('2d');
    barre1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors.slice(0, labels.length),
        }],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Revenu moyen par plateforme de cloud',
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (value, index, values) {
                return value + ' €';
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'Revenu moyen (en euros)'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Plateforme'
            }
          }]
        }
      }
    });
  }
}