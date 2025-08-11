/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Inizializzazione Grafici Parte 1 - Sintesi e Profilo
 * EDILCALCESTRUZZO SRL
 */

// Attendi il caricamento completo del DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log("Inizializzazione grafici Parte 1 - Sintesi EDILCALCESTRUZZO SRL");
    
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
    // Grafico 1.1: Trend Indicatori Principali
    // ===========================
    const ctxMainMetrics = document.getElementById('mainMetricsChart');
    if (ctxMainMetrics) {
        try {
            // Distruggi il grafico esistente se presente
            const existingChart = Chart.getChart(ctxMainMetrics);
            if (existingChart) {
                existingChart.destroy();
            }

            const mainMetricsData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "Ricavi (€000)",
                        data: [7127, 6928, 7560],
                        backgroundColor: "rgba(25, 25, 112, 0.7)",
                        borderColor: "rgba(25, 25, 112, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "EBITDA (€000)",
                        data: [-167, -185, 655],
                        backgroundColor: "rgba(77, 140, 87, 0.7)",
                        borderColor: "rgba(77, 140, 87, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Patrimonio Netto (€000)",
                        data: [5887, 5917, 6185],
                        backgroundColor: "rgba(217, 140, 0, 0.7)",
                        borderColor: "rgba(217, 140, 0, 1)",
                        borderWidth: 1
                    }
                ]
            };

            const mainMetricsOptions = {
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
                                const value = context.parsed.y;
                                label += '€' + formatCurrency(value) + 'k';
                                
                                // Aggiungi variazione percentuale per l'ultimo anno
                                if (context.dataIndex === 2 && context.datasetIndex < 3) {
                                    const prevValue = context.dataset.data[1];
                                    if (prevValue !== 0 && prevValue !== null) {
                                        const variation = ((value - prevValue) / Math.abs(prevValue)) * 100;
                                        label += ' (' + (variation >= 0 ? '+' : '') + variation.toFixed(1) + '%)';
                                    }
                                }
                                
                                return label;
                            },
                            afterLabel: function(context) {
                                // Aggiungi informazioni aggiuntive per EBITDA
                                if (context.datasetIndex === 1 && context.dataIndex === 2) {
                                    return 'Variazione: +€840k (+453,42%)';
                                }
                                return '';
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
                        grid: {
                            color: '#e0e0e0'
                        },
                        title: {
                            display: true,
                            text: 'Valore (€000)',
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return formatCurrency(value) + 'k';
                            }
                        }
                    }
                }
            };

            new Chart(ctxMainMetrics, {
                type: 'bar',
                data: mainMetricsData,
                options: mainMetricsOptions
            });
            
            console.log("Grafico mainMetricsChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione mainMetricsChart:", error);
        }
    }

    // ===========================
    // Grafico 1.2: Trend Capitale Circolante
    // ===========================
    const ctxCurrentAssets = document.getElementById('currentAssetsLiabilitiesChart');
    if (ctxCurrentAssets) {
        try {
            // Distruggi il grafico esistente se presente
            const existingChart = Chart.getChart(ctxCurrentAssets);
            if (existingChart) {
                existingChart.destroy();
            }

            const currentAssetsData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "Attivo Corrente",
                        data: [4940455, 6254218, 6977320],
                        backgroundColor: "rgba(25, 25, 112, 0.7)",
                        borderColor: "rgba(25, 25, 112, 1)",
                        borderWidth: 1,
                        stack: 'Stack 0'
                    },
                    {
                        label: "Passivo Corrente",
                        data: [4851019, 5019205, 8517754],
                        backgroundColor: "rgba(214, 34, 70, 0.7)",
                        borderColor: "rgba(214, 34, 70, 1)",
                        borderWidth: 1,
                        stack: 'Stack 1'
                    },
                    {
                        label: "Capitale Circolante Netto",
                        data: [89436, 1235013, -1540434],
                        type: 'line',
                        borderColor: "rgba(77, 140, 87, 1)",
                        backgroundColor: "rgba(77, 140, 87, 0.1)",
                        borderWidth: 2,
                        fill: true,
                        tension: 0.1,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: "rgba(77, 140, 87, 1)"
                    }
                ]
            };

            const currentAssetsOptions = {
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
                                const value = context.parsed.y;
                                label += '€' + formatCurrency(value);
                                
                                // Evidenzia il CCN negativo nel 2024
                                if (context.datasetIndex === 2 && context.dataIndex === 2 && value < 0) {
                                    label += ' (CRITICO)';
                                }
                                
                                return label;
                            },
                            afterBody: function(tooltipItems) {
                                const dataIndex = tooltipItems[0].dataIndex;
                                if (dataIndex === 2) {
                                    return '\nNota: Il CCN negativo nel 2024 indica\nuna criticità nella struttura finanziaria';
                                }
                                return '';
                            }
                        }
                    },
                    annotation: {
                        annotations: {
                            line1: {
                                type: 'line',
                                yMin: 0,
                                yMax: 0,
                                borderColor: 'rgba(255, 99, 132, 0.5)',
                                borderWidth: 2,
                                borderDash: [5, 5]
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
                        grid: {
                            color: '#e0e0e0'
                        },
                        title: {
                            display: true,
                            text: 'Valore (€)',
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                if (value === 0) return '0';
                                const absValue = Math.abs(value);
                                if (absValue >= 1000000) {
                                    return (value < 0 ? '-' : '') + '€' + (absValue / 1000000).toFixed(1) + 'M';
                                } else if (absValue >= 1000) {
                                    return (value < 0 ? '-' : '') + '€' + (absValue / 1000).toFixed(0) + 'k';
                                }
                                return '€' + formatCurrency(value);
                            }
                        }
                    }
                }
            };

            new Chart(ctxCurrentAssets, {
                type: 'bar',
                data: currentAssetsData,
                options: currentAssetsOptions
            });
            
            console.log("Grafico currentAssetsLiabilitiesChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione currentAssetsLiabilitiesChart:", error);
        }
    }

    // ===========================
    // Grafico aggiuntivo: Ciclo del Circolante (se necessario)
    // ===========================
    const ctxWorkingCapital = document.getElementById('workingCapitalChart');
    if (ctxWorkingCapital) {
        try {
            const workingCapitalData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "Giorni Crediti Clienti",
                        data: [228, 279, 272],
                        backgroundColor: "rgba(214, 34, 70, 0.7)",
                        borderColor: "rgba(214, 34, 70, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Giorni Magazzino",
                        data: [42, 97, 122],
                        backgroundColor: "rgba(255, 193, 7, 0.7)",
                        borderColor: "rgba(255, 193, 7, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Giorni Debiti Fornitori",
                        data: [-127, -159, -174],
                        backgroundColor: "rgba(77, 140, 87, 0.7)",
                        borderColor: "rgba(77, 140, 87, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Ciclo del Circolante",
                        data: [143, 217, 220],
                        type: 'line',
                        borderColor: "rgba(25, 25, 112, 1)",
                        backgroundColor: "transparent",
                        borderWidth: 3,
                        fill: false,
                        tension: 0.1,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: "rgba(25, 25, 112, 1)"
                    }
                ]
            };

            const workingCapitalOptions = {
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
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                const value = Math.abs(context.parsed.y);
                                label += value + ' giorni';
                                
                                // Aggiungi valutazione per il ciclo del circolante
                                if (context.datasetIndex === 3 && value > 180) {
                                    label += ' (CRITICO)';
                                } else if (context.datasetIndex === 3 && value > 120) {
                                    label += ' (Elevato)';
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
                        title: {
                            display: true,
                            text: 'Giorni',
                            font: {
                                size: 10
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return Math.abs(value) + 'gg';
                            }
                        }
                    }
                }
            };

            new Chart(ctxWorkingCapital, {
                type: 'bar',
                data: workingCapitalData,
                options: workingCapitalOptions
            });
            
            console.log("Grafico workingCapitalChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione workingCapitalChart:", error);
        }
    }

    console.log("Inizializzazione grafici Parte 1 completata");
});