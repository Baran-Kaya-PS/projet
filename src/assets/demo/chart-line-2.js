Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let ligne1;

function createligne1(labels, data) {
  if (ligne1) {
    ligne1.data.labels = labels;
    ligne1.data.datasets[0].data = data;
    ligne1.update();
  } else {
    const ctx = document.getElementById('ligne1').getContext('2d');
    ligne1 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Salaires moyens par niveau d\'études',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Salaire moyen (en euros)'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Niveaux d\'études'
            }
          }]
        },
        legend: {
          onClick: function (e) {
            e.stopPropagation();
          }
        }
      }
    });
  }
}