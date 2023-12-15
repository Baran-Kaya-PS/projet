let pie2;

function createPie2(labels, data) {
    if (pie2) {
        pie2.data.labels = labels;
        pie2.data.datasets[0].data = data;
        pie2.update();
    } else {
        const ctx = document.getElementById('pie2').getContext('2d');
        pie2 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        '#FF5733',
                        '#33FF57',
                        '#5733FF',
                        '#FF33E6',
                        '#33B5FF',
                        '#FFC300',
                        '#8C33FF'
                    ],
                }]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                const dataset = data.datasets[tooltipItem.datasetIndex];
                                const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
                                const currentValue = dataset.data[tooltipItem.index];
                                const percentage = ((currentValue / total) * 100).toFixed(2);
                                return data.labels[tooltipItem.index] + ': ' + currentValue + ' (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }
}