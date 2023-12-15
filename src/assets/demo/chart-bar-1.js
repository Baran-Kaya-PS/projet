Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let histo1;

function createHistogram1(labels, data) {
    if (histo1) {
    // Si le graphique existe déjà, mettez à jour les données
    histo1.data.labels = labels;
    histo1.data.datasets[0].data = data;
    histo1.update();
    } else {
        // Si le graphique n'existe pas, on le crée
        var ctx = document.getElementById("histo1");
        histo1 = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: labels,
            datasets: [{
                label: "Salaire moyen",
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.7)', // Couleur de fond des barres
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
            },
            options: {
            scales: {
                xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'expérience (années)'
                }
                }],
                yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Salaire moyen (euros)'
                },
                ticks: {
                    beginAtZero: true
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