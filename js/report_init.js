/**
 * SCAN - Configurazione Grafici Report Dettagliati (report/parteX_*.html)
 */

// Funzioni per ottenere i dati dei grafici

function getMainMetricsData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Ricavi',
                data: [7127, 6928, 7560],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'EBITDA',
                data: [-167, -185, 655],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Patrimonio Netto',
                data: [5887, 5917, 6185],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCurrentAssetsLiabilitiesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Attivo Circolante',
                data: [8764363, 9952904, 6977320],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Passività Correnti',
                data: [7900927, 8793054, 8517754],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getEconomicTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'Ricavi',
                data: [7127, 6928, 7560],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'EBITDA',
                data: [-167, -185, 655],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'EBITDA %',
                data: [-2.3, -2.7, 8.7],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            }
        ]
    };
}

function getMarginalityData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Valore Aggiunto %',
                data: [50.8, 53.4, 66.0],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Margine di Contribuzione %',
                data: [22.3, 21.9, 32.5],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'EBITDA %',
                data: [-2.3, -2.7, 8.7],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'EBIT %',
                data: [-10.5, -9.0, 3.6],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 2,
                fill: false
            }
        ]
    };
}

function getProfitabilityIndicesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [-9.89, -8.21, 3.74],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'ROE',
                data: [1.16, 0.50, 0.65],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'ROS',
                data: [-10.5, -9.0, 3.6],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: false
            }
        ]
    };
}

function getLeverageData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [-9.89, -8.21, 3.74],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'ROE',
                data: [1.16, 0.50, 0.65],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Costo medio del debito',
                data: [8.28, 17.18, 22.39],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getAssetsData() {
    return {
        labels: ['Liquidità', 'Crediti Clienti', 'Rimanenze', 'Altri Crediti', 'Immobilizzazioni'],
        datasets: [{
            data: [48714, 5692100, 864542, 371964, 10003357],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getLiabilitiesData() {
    return {
        labels: ['Patrimonio Netto', 'Debiti Finanziari', 'Fondi', 'Debiti Fornitori', 'Altri Debiti'],
        datasets: [{
            data: [6185357, 1217809, 1059757, 2605093, 5912661],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getInvestmentsStructureData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Immobilizzazioni Materiali',
                data: [3500000, 3300000, 3304525],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Immobilizzazioni Immateriali',
                data: [450000, 431797, 425102],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Immobilizzazioni Finanziarie',
                data: [3347754, 3292268, 6273730],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getEquityCompositionData() {
    return {
        labels: ['Capitale Sociale', 'Riserve', 'Utile d\'esercizio'],
        datasets: [{
            data: [102000, 6042963, 40394],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getFinancialDebtData() {
    return {
        labels: ['Debiti a Breve Termine', 'Debiti a M/L Termine'],
        datasets: [{
            data: [1063458, 154351],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getPfnTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Debiti Finanziari',
                data: [1703390, 1679815, 1217809],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Liquidità',
                data: [-30371, -33770, -48714],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'PFN',
                data: [1673019, 1646045, 1169095],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(153, 102, 255, 1)'
            }
        ]
    };
}

function getDebtSustainabilityData() {
    return {
        labels: ['PFN/EBITDA', 'Leva Finanziaria (D/E)', 'EBIT/Oneri Finanziari', 'DSCR', 'Cash Flow/Debiti Fin.'],
        datasets: [
            {
                label: 'EDILCALCESTRUZZO SRL',
                data: [1.79, 0.20, 1.01, 6.40, 2.94],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Benchmark Settore',
                data: [3.0, 0.6, 3.0, 1.2, 0.25],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    };
}

function getDebtCostData() {
    return {
        labels: ['2022', '2023', '2024', '2025 (P)', '2026 (P)'],
        datasets: [
            {
                type: 'bar',
                label: 'EBITDA',
                data: [-167, -185, 655, 550, 533],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Capacità Teorica Indebitamento',
                data: [0, 0, 795, 706, 818],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            }
        ]
    };
}

function getWorkingCapitalCycleData() {
    return {
        labels: ['DSO (Crediti)', 'DIO (Magazzino)', 'DPO (Fornitori)', 'Ciclo Circolante'],
        datasets: [
            {
                label: 'EDILCALCESTRUZZO SRL',
                data: [272, 122, 174, 220],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Benchmark Settore',
                data: [90, 50, 90, 50],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCashFlowWaterfallData() {
    return {
        labels: ['EBITDA', '(-) Imposte', '(+/-) Var. CCN', 'Cash Flow Operativo', '(-) Investimenti', 'Free Cash Flow', '(+/-) Op. Finanziarie', 'Var. Netta Cassa'],
        datasets: [{
            data: [654579, -93457, 564, 3579187, -3330217, 248970, -234026, 14944],
            backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getCashFlowTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Cash Flow Operativo',
                data: [1160112, 188792, 3579187],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Cash Flow Investimenti',
                data: [-1887952, -161818, -3330217],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Variazione Netta di Cassa',
                data: [-8964, 3399, 14944],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false
            }
        ]
    };
}

function getCashFlowProjectionData() {
    return {
        labels: ['2025', '2026', '2027', '2028'],
        datasets: [
            {
                type: 'bar',
                label: 'Cash Flow Operativo',
                data: [549995, 533377, 537466, 540192],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Cash Flow Finanziamento',
                data: [-51450, -34300, -22867, -15245],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Liquidità Finale',
                data: [547259, 1046336, 1560934, 2085881],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            }
        ]
    };
}

function getZscoreData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Z-Score',
                data: [2.15, 2.22, 2.39],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Soglia Sicurezza',
                data: [3, 3, 3],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false
            },
            {
                label: 'Soglia Pericolo',
                data: [1.8, 1.8, 1.8],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false
            }
        ]
    };
}

function getRiskIndicatorsData() {
    return {
        labels: ['Leanus Score', 'Z-Score', 'Rating MCC', 'PFN/EBITDA', 'Copertura Immob.', 'Liquidità/Ricavi'],
        datasets: [
            {
                label: 'EDILCALCESTRUZZO SRL',
                data: [0.52, 2.39, 2.87, 1.79, 0.62, 0.64],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Valori Ottimali',
                data: [10, 3, 1, 1, 1, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)'
            }
        ]
    };
}

function getSensitivityData() {
    return {
        labels: ['Var. Ricavi', 'Var. Costi Fissi', 'Var. Crediti', 'Var. Rimanenze', 'Var. Debiti'],
        datasets: [
            {
                label: 'Variazione Critica',
                data: [-11.19, 15.25, 3, -872, -3],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getOptimizationImpactData() {
    return {
        labels: ['Revisione Ammortamenti', 'Capitalizzazione Costi', 'Ottimizzazione Accantonamenti', 'Valutazione Rimanenze', 'Totale'],
        datasets: [
            {
                label: 'Impatto Minimo',
                data: [38000, 90000, 40000, 50000, 218000],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Impatto Massimo',
                data: [57000, 130000, 70000, 85000, 342000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getIndicatorsImprovementData() {
    return {
        labels: ['EBITDA', 'EBIT', 'Utile Netto', 'PFN/EBITDA', 'Copertura Immob.', 'Ciclo Circolante', 'Leanus Score'],
        datasets: [
            {
                label: 'Miglioramento %',
                data: [13.7, 55.6, 378.8, 15.1, 9.7, 6.8, 150.0],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getBankabilityRadarData() {
    return {
        labels: ['EBITDA Margin', 'PFN/EBITDA', 'Interest Coverage Ratio', 'Copertura Immob.', 'Ciclo Circolante', 'IRP'],
        datasets: [
            {
                label: 'Pre-Ottimizzazione',
                data: [8.66, 1.79, 1.01, 0.62, 220, 64.28],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            },
            {
                label: 'Post-Ottimizzazione',
                data: [9.85, 1.52, 1.57, 0.68, 205, 72.50],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            }
        ]
    };
}

function getOptimizationTimelineData() {
    return {
        labels: ['Mese 1', 'Mese 2', 'Mese 3', 'Mese 4', 'Mese 5', 'Mese 6'],
        datasets: [
            {
                label: 'Revisione Ammortamenti',
                data: [4, 4, 3, 2, 1, 1],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Capitalizzazione Costi',
                data: [3, 4, 4, 3, 2, 1],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Ottimizzazione Accantonamenti',
                data: [2, 3, 4, 4, 3, 2],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Valutazione Rimanenze',
                data: [2, 2, 3, 4, 4, 3],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 2,
                fill: false
            }
        ]
    };
}

// Opzioni comuni per i grafici


// Opzioni specifiche per grafici a torta
const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed !== null) {
                        label += formatCurrency(context.parsed);
                    }
                    return label;
                }
            }
        }
    }
};

// Opzioni specifiche per grafici a ciambella
const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%',
    plugins: {
        legend: {
            position: 'right',
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed !== null) {
                        label += formatCurrency(context.parsed);
                    }
                    return label;
                }
            }
        }
    }
};

// Opzioni specifiche per grafici radar
const radarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        line: {
            borderWidth: 3
        }
    },
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.r !== null) {
                        label += context.parsed.r.toLocaleString('it-IT');
                    }
                    return label;
                }
            }
        }
    },
    scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0
        }
    }
};

// Funzione per formattare valori monetari
function formatCurrency(value) {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
}

// Funzione per inizializzare un grafico
function initChart(elementId, type, data, options) {
    const ctx = document.getElementById(elementId).getContext('2d');
    new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });
}