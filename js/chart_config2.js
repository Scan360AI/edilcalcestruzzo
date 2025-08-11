// Inizializzazione grafici per Parte 2 - Analisi Economica
// EDILCALCESTRUZZO SRL

document.addEventListener('DOMContentLoaded', function() {
    console.log("Inizializzazione grafici Parte 2 - EDILCALCESTRUZZO SRL");
    
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
    // Grafico 2.1: Andamento Ricavi ed EBITDA
    // ===========================
    const ctxEconomicTrend = document.getElementById('economicTrendChart');
    if (ctxEconomicTrend) {
        try {
            const economicTrendData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "Ricavi (€000)",
                        data: [7127, 6928, 7560],
                        borderColor: 'rgb(25, 25, 112)',
                        backgroundColor: 'rgba(25, 25, 112, 0.1)',
                        type: 'line',
                        tension: 0.1,
                        yAxisID: 'y',
                        fill: true,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: "EBITDA (€000)",
                        data: [-167, -185, 655],
                        borderColor: 'rgb(77, 140, 87)',
                        backgroundColor: 'rgba(77, 140, 87, 0.7)',
                        type: 'bar',
                        yAxisID: 'y',
                        barPercentage: 0.6,
                        categoryPercentage: 0.7
                    },
                    {
                        label: "EBITDA Margin (%)",
                        data: [-2.3, -2.7, 8.66],
                        borderColor: 'rgb(217, 140, 0)',
                        backgroundColor: 'transparent',
                        type: 'line',
                        tension: 0.1,
                        yAxisID: 'y1',
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            };

            new Chart(ctxEconomicTrend, {
                type: 'bar',
                data: economicTrendData,
                options: {
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
                                padding: 15,
                                font: { size: 11 }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleFont: { weight: 'bold', size: 13 },
                            bodyFont: { size: 12 },
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) label += ': ';
                                    const value = context.parsed.y;
                                    if (context.dataset.label.includes('%')) {
                                        label += formatPercentage(value);
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
                            grid: { display: false }
                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                            grid: { color: '#e0e0e0' },
                            title: {
                                display: true,
                                text: 'Valore (€000)',
                                font: { size: 10 }
                            }
                        },
                        y1: {
                            type: 'linear',
                            position: 'right',
                            grid: { display: false },
                            title: {
                                display: true,
                                text: 'EBITDA Margin (%)',
                                font: { size: 10 }
                            },
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
            console.log("Grafico economicTrendChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione economicTrendChart:", error);
        }
    }

    // ===========================
    // Grafico 2.2: Evoluzione delle Principali Marginalità
    // ===========================
    const ctxMarginality = document.getElementById('marginalityChart');
    if (ctxMarginality) {
        try {
            const marginalityData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "Valore Aggiunto %",
                        data: [50.8, 53.4, 66.0],
                        borderColor: "rgba(25, 25, 112, 1)",
                        backgroundColor: "rgba(25, 25, 112, 0.1)",
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: "Margine di Contribuzione %",
                        data: [22.3, 21.9, 32.5],
                        borderColor: "rgba(42, 58, 128, 1)",
                        backgroundColor: "rgba(42, 58, 128, 0.1)",
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: "EBITDA %",
                        data: [-2.3, -2.7, 8.7],
                        borderColor: "rgba(77, 140, 87, 1)",
                        backgroundColor: "rgba(77, 140, 87, 0.1)",
                        fill: false,
                        tension: 0.1
                    },
                    {
                        label: "EBIT %",
                        data: [-10.5, -9.0, 3.6],
                        borderColor: "rgba(217, 140, 0, 1)",
                        backgroundColor: "rgba(217, 140, 0, 0.1)",
                        fill: false,
                        tension: 0.1
                    }
                ]
            };

            new Chart(ctxMarginality, {
                type: 'line',
                data: marginalityData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                padding: 10,
                                font: { size: 10 }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + formatPercentage(context.parsed.y);
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            },
                            grid: { color: '#e0e0e0' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });
            console.log("Grafico marginalityChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione marginalityChart:", error);
        }
    }

    // ===========================
    // Grafico 2.3: Andamento Redditività
    // ===========================
    const ctxProfitabilityIndices = document.getElementById('profitabilityIndicesChart');
    if (ctxProfitabilityIndices) {
        try {
            const profitabilityData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "ROE %",
                        data: [1.16, 0.50, 0.65],
                        borderColor: "rgba(25, 25, 112, 1)",
                        backgroundColor: "rgba(25, 25, 112, 0.2)",
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: "ROI %",
                        data: [-9.89, -8.21, 3.74],
                        borderColor: "rgba(77, 140, 87, 1)",
                        backgroundColor: "rgba(77, 140, 87, 0.2)",
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: "ROS %",
                        data: [-10.5, -9.0, 3.6],
                        borderColor: "rgba(217, 140, 0, 1)",
                        backgroundColor: "rgba(217, 140, 0, 0.2)",
                        fill: true,
                        tension: 0.1
                    }
                ]
            };

            new Chart(ctxProfitabilityIndices, {
                type: 'line',
                data: profitabilityData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                padding: 10,
                                font: { size: 10 }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + formatPercentage(context.parsed.y);
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            },
                            grid: { color: '#e0e0e0' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });
            console.log("Grafico profitabilityIndicesChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione profitabilityIndicesChart:", error);
        }
    }

    // ===========================
    // Grafico 2.4: Evoluzione della Struttura Finanziaria (Leverage)
    // ===========================
    const ctxLeverage = document.getElementById('leverageChart');
    if (ctxLeverage) {
        try {
            const leverageData = {
                labels: ["2022", "2023", "2024"],
                datasets: [
                    {
                        label: "ROI (%)",
                        data: [-9.89, -8.21, 3.74],
                        backgroundColor: "rgba(25, 25, 112, 0.7)",
                        borderColor: "rgba(25, 25, 112, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Costo del debito (%)",
                        data: [8.28, 17.18, 22.39],
                        backgroundColor: "rgba(214, 34, 70, 0.7)",
                        borderColor: "rgba(214, 34, 70, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "ROE (%)",
                        data: [1.16, 0.50, 0.65],
                        backgroundColor: "rgba(77, 140, 87, 0.7)",
                        borderColor: "rgba(77, 140, 87, 1)",
                        borderWidth: 1
                    }
                ]
            };

            new Chart(ctxLeverage, {
                type: 'bar',
                data: leverageData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                padding: 10,
                                font: { size: 10 }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + formatPercentage(context.parsed.y);
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            },
                            grid: { color: '#e0e0e0' }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });
            console.log("Grafico leverageChart inizializzato");
        } catch (error) {
            console.error("Errore inizializzazione leverageChart:", error);
        }
    }

    // ===========================
    // Grafico 2.5: Benchmark Radar (già presente nell'HTML inline)
    // ===========================
    // Il grafico benchmarkRadarChart è già implementato direttamente nell'HTML
    // con script inline, quindi non necessita di inizializzazione qui

    console.log("Inizializzazione grafici Parte 2 completata");
});