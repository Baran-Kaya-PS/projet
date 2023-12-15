let bar3;

function createBar3(labels, data) {

    if (bar3) {
        bar3.data.labels = labels;
        bar3.data.datasets[0].data = data;
        bar3.update();
    } else {
        const ctx = document.getElementById('bar3').getContext('2d');
        bar3 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Utilisation',
                    data: data,
                    backgroundColor: 'rgba(123, 200, 150, 0.7)', // Nouvelle couleur de fond
                    borderColor: 'rgba(123, 200, 150, 1)', // Nouvelle couleur de bordure
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            precision: 0,
                            suggestedMax: Math.max(...data) + 1
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Utilisation'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Système d\'exploitation'
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
