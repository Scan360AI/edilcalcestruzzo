/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Inizializzazione Grafici Parte 4 - Bancabilità
 * EDILCALCESTRUZZO SRL
 */

// Attendi il caricamento completo del DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log("Inizializzazione grafici Parte 4 - Bancabilità EDILCALCESTRUZZO SRL");
    
    // Funzioni di utilità per formattazione
    function formatCurrency(value, decimals = 0) {
        if (value === null || value === undefined) return 'N/D';
        return new Intl.NumberFormat('it-IT', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(value);
    }
    
    function formatPercentage(value) {
        if (value === null || value === undefined) return 'N/D';
        return value.toFixed(1) + '%';
    }

    // ===========================
    // Grafico 4.1: Indicatori Sostenibilità Debito (Radar)
    // ===========================
    const ctxDebtSustainability = document.getElementById('debtSustainabilityChart');
    if (ctxDebtSustainability) {
        try {
            // Distruggi il grafico esistente se presente
            const existingChart = Chart.getChart(ctxDebtSustainability);
            if (existingChart) {
                existingChart.destroy();
            }

            const debtSustainabilityData = {
                labels: [
                    'PFN/EBITDA',     
                    'D/E (inv)',            
                    'DSCR',                  
                    'EBIT/OF',               
                    'CFO/Ricavi',            
                    'Liquidità'       
                ],
                datasets: [
                    {
                        label: '2024',
                        data: [40, 71, 100, 50, 100, 21],
                        borderColor: 'rgba(25, 25, 112, 1)',
                        backgroundColor: 'rgba(25, 25, 112, 0.2)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(25, 25, 112, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(25, 25, 112, 1)',
                        pointRadius: 3
                    },
                    {
                        label: '2023',
                        data: [0, 60, 0, 0, 45, 15],  
                        borderColor: 'rgba(77, 140, 87, 1)',
                        backgroundColor: 'rgba(77, 140, 87, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(77, 140, 87, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(77, 140, 87, 1)',
                        pointRadius: 3
                    }
                ]
            };

            const debtSustainabilityOptions = {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 10,
                        right: 15,
                        bottom: 10,
                        left: 15
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        beginAtZero: true,
                        angleLines: {
                            color: '#e0e0e0'
                        },
                        grid: {
                            color: '#e0e0e0'
                        },
                        pointLabels: {
                            font: {
                                size: 9
                            },
                            padding: 5,
                            callback: function(label) {
                                // Rimuovi i caratteri di nuova riga e abbrevia se necessario
                                return label.replace('\n(inv)', '*').replace('\n', ' ');
                            }
                        },
                        ticks: {
                            backdropColor: 'rgba(255, 255, 255, 0.75)',
                            font: {
                                size: 8
                            },
                            stepSize: 25,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                                size: 11
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            weight: 'bold',
                            size: 13
                        },
                        bodyFont: {
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                
                                const index = context.dataIndex;
                                const value = context.parsed.r;
                                const labels = [
                                    'PFN/EBITDA', 'D/E (inv)', 'DSCR', 
                                    'EBIT/OF', 'CFO/Ricavi', 'Liquidità'
                                ];
                                
                                // Valori effettivi per il 2024
                                const actualValues2024 = [
                                    '1.79x', '0.20', '6.40', 
                                    '1.01x', '293.90%', '0.64%'
                                ];
                                
                                // Valori effettivi per il 2023
                                const actualValues2023 = [
                                    'NOK', '0.28', 'NOK',
                                    'NOK', '11.24%', 'N/D'
                                ];
                                
                                if (context.datasetIndex === 0) { // 2024
                                    label += actualValues2024[index];
                                } else { // 2023
                                    label += actualValues2023[index];
                                }
                                
                                label += ' (' + value.toFixed(0) + '% del target)';
                                return label;
                            }
                        }
                    }
                }
            };

            new Chart(ctxDebtSustainability, {
                type: 'radar',
                data: debtSustainabilityData,
                options: debtSustainabilityOptions
            });
            
            console.log("Grafico debtSustainabilityChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione debtSustainabilityChart:", error);
        }
    }

    // ===========================
    // Grafico 4.2: Capacità di Indebitamento (se necessario)
    // ===========================
    const ctxDebtCapacity = document.getElementById('debtCapacityChart');
    if (ctxDebtCapacity) {
        try {
            const debtCapacityData = {
                labels: ["2022", "2023", "2024", "2025E", "2026E", "2027E", "2028E"],
                datasets: [
                    {
                        label: "PFN (€000)",
                        data: [1673, 1646, 1169, 1117, 1083, 1060, 1045],
                        type: 'bar',
                        backgroundColor: 'rgba(214, 34, 70, 0.7)',
                        borderColor: 'rgba(214, 34, 70, 1)',
                        borderWidth: 1,
                        yAxisID: 'y'
                    },
                    {
                        label: "EBITDA (€000)",
                        data: [-167, -185, 655, 582, 601, 608, 630],
                        type: 'line',
                        borderColor: 'rgba(77, 140, 87, 1)',
                        backgroundColor: 'rgba(77, 140, 87, 0.1)',
                        fill: true,
                        tension: 0.1,
                        yAxisID: 'y'
                    },
                    {
                        label: "PFN/EBITDA",
                        data: [null, null, 1.79, 1.92, 1.80, 1.74, 1.66],
                        type: 'line',
                        borderColor: 'rgba(25, 25, 112, 1)',
                        backgroundColor: 'transparent',
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.1,
                        yAxisID: 'y1'
                    }
                ]
            };

            const debtCapacityOptions = {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                                size: 11
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                const value = context.parsed.y;
                                if (context.dataset.label === 'PFN/EBITDA') {
                                    label += value ? value.toFixed(2) + 'x' : 'N/D';
                                } else {
                                    label += formatCurrency(value) + 'k';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        grid: {
                            color: '#e0e0e0'
                        },
                        title: {
                            display: true,
                            text: 'Valore (€000)',
                            font: {
                                size: 10
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        grid: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'PFN/EBITDA (x)',
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return value + 'x';
                            }
                        },
                        min: 0,
                        max: 4
                    }
                }
            };

            new Chart(ctxDebtCapacity, {
                type: 'bar',
                data: debtCapacityData,
                options: debtCapacityOptions
            });
            
            console.log("Grafico debtCapacityChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione debtCapacityChart:", error);
        }
    }

    // ===========================
    // Grafico 4.3: DSCR Trend (se necessario)
    // ===========================
    const ctxDscrTrend = document.getElementById('dscrTrendChart');
    if (ctxDscrTrend) {
        try {
            const dscrTrendData = {
                labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
                datasets: [
                    {
                        label: "DSCR",
                        data: [6.397, 4.23, 4.72, 4.53, 5.41],
                        borderColor: 'rgba(25, 25, 112, 1)',
                        backgroundColor: 'rgba(25, 25, 112, 0.1)',
                        fill: true,
                        tension: 0.1,
                        pointRadius: 5,
                        pointHoverRadius: 7
                    },
                    {
                        label: "Soglia Minima Bancaria",
                        data: [1.2, 1.2, 1.2, 1.2, 1.2],
                        borderColor: 'rgba(255, 193, 7, 1)',
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0,
                        borderWidth: 2
                    },
                    {
                        label: "Soglia CCII",
                        data: [1.0, 1.0, 1.0, 1.0, 1.0],
                        borderColor: 'rgba(214, 34, 70, 1)',
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0,
                        borderWidth: 2
                    }
                ]
            };

            const dscrTrendOptions = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                                size: 11
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y.toFixed(2) + 'x';
                                
                                // Aggiungi valutazione per DSCR
                                if (context.datasetIndex === 0) {
                                    const value = context.parsed.y;
                                    if (value >= 2.0) {
                                        label += ' (Eccellente)';
                                    } else if (value >= 1.5) {
                                        label += ' (Buono)';
                                    } else if (value >= 1.2) {
                                        label += ' (Adeguato)';
                                    } else if (value >= 1.0) {
                                        label += ' (Minimo)';
                                    } else {
                                        label += ' (Critico)';
                                    }
                                }
                                
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        min: 0,
                        max: 7,
                        title: {
                            display: true,
                            text: 'DSCR (x)',
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return value + 'x';
                            }
                        }
                    }
                }
            };

            new Chart(ctxDscrTrend, {
                type: 'line',
                data: dscrTrendData,
                options: dscrTrendOptions
            });
            
            console.log("Grafico dscrTrendChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione dscrTrendChart:", error);
        }
    }

    // ===========================
    // Grafico 4.4: Stress Test DSCR (se necessario)
    // ===========================
    const ctxStressTest = document.getElementById('stressTestChart');
    if (ctxStressTest) {
        try {
            const stressTestData = {
                labels: [
                    'Base Case',
                    'CF -20%',
                    'OF +200bp',
                    'Combinato',
                    'CF -50%',
                    'CF -80%'
                ],
                datasets: [
                    {
                        label: "DSCR dopo stress",
                        data: [6.397, 5.12, 6.13, 4.93, 3.20, 1.28],
                        backgroundColor: function(context) {
                            const value = context.raw;
                            if (value >= 2.0) return 'rgba(77, 140, 87, 0.7)';  // Verde
                            if (value >= 1.2) return 'rgba(255, 193, 7, 0.7)';  // Giallo
                            return 'rgba(214, 34, 70, 0.7)';  // Rosso
                        },
                        borderColor: function(context) {
                            const value = context.raw;
                            if (value >= 2.0) return 'rgba(77, 140, 87, 1)';
                            if (value >= 1.2) return 'rgba(255, 193, 7, 1)';
                            return 'rgba(214, 34, 70, 1)';
                        },
                        borderWidth: 1
                    }
                ]
            };

            const stressTestOptions = {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.x;
                                let label = 'DSCR: ' + value.toFixed(2) + 'x';
                                
                                if (value >= 2.0) {
                                    label += ' (Ampiamente sostenibile)';
                                } else if (value >= 1.5) {
                                    label += ' (Sostenibile)';
                                } else if (value >= 1.2) {
                                    label += ' (Sostenibile con margine)';
                                } else if (value >= 1.0) {
                                    label += ' (Minimo sostenibile)';
                                } else {
                                    label += ' (Non sostenibile)';
                                }
                                
                                return label;
                            }
                        }
                    },
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                xMin: 1.2,
                                xMax: 1.2,
                                borderColor: 'rgba(255, 193, 7, 0.8)',
                                borderWidth: 2,
                                borderDash: [5, 5],
                                label: {
                                    content: 'Soglia minima bancaria',
                                    enabled: true,
                                    position: 'start'
                                }
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        min: 0,
                        max: 7,
                        title: {
                            display: true,
                            text: 'DSCR (x)',
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return value + 'x';
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            };

            new Chart(ctxStressTest, {
                type: 'bar',
                data: stressTestData,
                options: stressTestOptions
            });
            
            console.log("Grafico stressTestChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione stressTestChart:", error);
        }
    }

    console.log("Inizializzazione grafici Parte 4 completata");
});