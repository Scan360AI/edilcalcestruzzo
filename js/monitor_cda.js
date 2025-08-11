// ======================================
// HELPER FUNCTIONS
// ======================================
function formatCurrency(value, decimals = 0) {
    if (isNaN(value)) return value;
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
}

function formatPercentage(value) {
     if (isNaN(value)) return value;
     return new Intl.NumberFormat('it-IT', {
        style: 'decimal',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
     }).format(value) + '%';
 }


function initChart(canvasId, type, data, options) {
     const canvas = document.getElementById(canvasId);
     if (!canvas) {
         console.error(`Canvas element with ID '${canvasId}' not found.`);
         return null;
     }
     const ctx = canvas.getContext('2d');

     // Clear previous chart instance if exists
     if (canvas.chartInstance) {
         try {
              canvas.chartInstance.destroy();
          } catch(e) { console.warn(`Could not destroy previous chart instance for ${canvasId}: ${e}`); }

     }

     if (!data || !data.labels || !data.datasets) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'red';
          ctx.font = '14px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('Errore: Dati non disponibili o malformati.', canvas.width / 2, canvas.height / 2);
          console.error(`Dati non validi forniti a initChart per ${canvasId}`);
          return null;
      }


     try {
         canvas.chartInstance = new Chart(ctx, {
             type: type,
             data: data,
             options: options
         });
         return canvas.chartInstance;
     } catch (error) {
          console.error(`Errore durante la creazione del grafico ${canvasId}:`, error);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'red';
          ctx.font = '14px Arial';
          ctx.textAlign = 'center';
          const errorMessage = error.message.length > 100 ? error.message.substring(0, 97) + '...' : error.message;
          ctx.fillText(`Errore grafico: ${errorMessage}`, canvas.width / 2, canvas.height / 2);
         return null;
     }
 }


// ======================================
// CHART DATA (EDILCALCESTRUZZO SRL)
// ======================================
 const chartData = {
     trendRicaviEbitda: {
         labels: ['2022', '2023', '2024'],
         datasets: [
             {
                 label: "Ricavi (€)",
                 data: [7126744, 6928450, 7559559], // Valori EDILCALCESTRUZZO
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [-166822, -185211, 654579], // Valori EDILCALCESTRUZZO
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [-2.3, -2.7, 8.7], // Valori EDILCALCESTRUZZO
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
         ]
     },
     trendPfnEbitda: {
         labels: ['2022', '2023', '2024'],
         datasets: [
             {
                 label: "ROE (%)",
                 data: [1.16, 0.50, 0.65], // Valori EDILCALCESTRUZZO
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(77, 140, 87)'
             },
             {
                 label: "ROI (%)",
                 data: [-9.89, -8.21, 3.74], // Valori EDILCALCESTRUZZO
                 borderColor: 'rgb(217, 140, 0)',
                 backgroundColor: 'rgba(217, 140, 0, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(217, 140, 0)'
             },
              {
                 label: 'PFN/EBITDA (x)',
                 data: [null, null, 1.79], // Valori EDILCALCESTRUZZO (N/A per 2022-2023 per EBITDA negativo)
                 borderColor: 'rgb(74, 105, 189)',
                 backgroundColor: 'rgba(74, 105, 189, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(74, 105, 189)'
             }
         ]
     },
     trendWorkingCapital: {
        labels: ['2022', '2023', '2024'],
         datasets: [
            { label: 'DSO', data: [228, 279, 272], borderColor: '#4CAF50', backgroundColor: 'rgba(76, 175, 80, 0.2)', fill: false, tension: 0.1 },
            { label: 'DIO', data: [42, 97, 122], borderColor: '#FFC107', backgroundColor: 'rgba(255, 193, 7, 0.2)', fill: false, tension: 0.1 },
            { label: 'DPO', data: [127, 159, 174], borderColor: '#4a69bd', backgroundColor: 'rgba(74, 105, 189, 0.2)', fill: false, tension: 0.1 },
            { label: 'Ciclo Circolante', data: [143, 217, 220], borderColor: '#F44336', backgroundColor: 'rgba(244, 67, 54, 0.2)', fill: true, tension: 0.1, borderWidth: 2 }
         ]
     },
    trendCashFlowOp: {
        labels: ['2022', '2023', '2024'],
        datasets: [{
            label: 'Cash Flow Operativo / Ricavi (%)',
            data: [16.3, 2.7, 47.4], // Valori EDILCALCESTRUZZO
            borderColor: 'rgb(77, 140, 87)',
            backgroundColor: 'rgba(77, 140, 87, 0.2)',
            fill: true,
            tension: 0.1
        }]
    }
 };

// ======================================
// CHART OPTIONS
// ======================================
const commonChartOptions = {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
         legend: {
             position: 'bottom',
             labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
         },
         tooltip: {
             backgroundColor: 'rgba(0, 0, 0, 0.8)',
             titleFont: { weight: 'bold', size: 13 },
             bodyFont: { size: 12 },
             padding: 10,
             cornerRadius: 4,
             displayColors: true,
             boxPadding: 4,
             callbacks: {
                  label: function(context) {
                      let label = context.dataset.label || context.label || '';
                      if (label) label += ': ';
                      let value = context.parsed.y;
                       if (value === null || value === undefined) value = context.parsed.r;

                      if (value !== null && value !== undefined) {
                          const axisID = context.dataset.yAxisID;
                          const labelText = context.label;
                          const datasetLabel = context.dataset.label || '';

                           if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                              label += formatPercentage(value);
                           } else if (datasetLabel.includes('(gg)') || labelText?.includes('(gg)') || datasetLabel.includes('DSO') || datasetLabel.includes('DIO') || datasetLabel.includes('DPO') || datasetLabel.includes('Ciclo Circolante')) {
                              label += value.toFixed(0) + ' gg';
                           } else if (datasetLabel.includes('(x)') || labelText?.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                           } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                               label += value.toFixed(2);
                           } else if (datasetLabel.includes('Variazione Critica')) {
                                label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                           }
                           else if (Math.abs(value) >= 1000000) {
                              label += formatCurrency(value / 1000000, 1) + ' M';
                          } else if (Math.abs(value) >= 1000) {
                              label += formatCurrency(value / 1000, 0) + ' K';
                          } else {
                               label += formatCurrency(value, (Math.abs(value) < 10 && value !== 0 ? 2 : 0));
                          }
                      } else {
                          label += 'N/D';
                      }
                      return label;
                  }
              }
         }
     },
     scales: {
         x: {
             grid: { display: false },
             ticks: { font: { size: 11 } }
         },
         y: {
             grid: { color: '#e0e0e0', borderDash: [2, 3] },
             ticks: { font: { size: 11 } }
         }
     },
     animation: { duration: 400 }
 };

// Opzioni specifiche per CDA charts
 const trendRicEbitdaOptionsCda = {
     ...commonChartOptions,
     scales: {
         y: {
             beginAtZero: true,
             title: { display: true, text: 'Valore (€)' },
             position: 'left',
             ticks: {
                 callback: function(value) {
                     if (Math.abs(value) >= 1000000) return (value / 1000000).toFixed(1) + ' M';
                     if (Math.abs(value) >= 1000) return (value / 1000).toFixed(0) + ' K';
                     return value;
                 }
             }
         },
         y1: {
             beginAtZero: false,
             title: { display: true, text: 'EBITDA Margin (%)' },
             position: 'right',
             grid: { drawOnChartArea: false },
             suggestedMin: -5,
             suggestedMax: 10, // Adattato per EDILCALCESTRUZZO
             ticks: {
                 callback: function(value) { return value.toFixed(1) + '%'; }
             }
         }
     },
     plugins: {
        ...commonChartOptions.plugins,
        title: { display: false }
    }
};

 const trendPfnEbitdaOptionsCda = {
     ...commonChartOptions,
     scales: {
         y: {
             beginAtZero: false,
             suggestedMin: -12,
             suggestedMax: 5, // Adattato per EDILCALCESTRUZZO
             title: { display: true, text: 'Valore (%)' }
         },
          x: { grid: { display: false } }
     },
     plugins: {
         ...commonChartOptions.plugins,
         title: { display: false }
     }
};

const trendWorkingCapitalOptionsCda = {
     ...commonChartOptions,
     scales: {
         y: {
             beginAtZero: false,
             suggestedMin: 0,
             suggestedMax: 300, // Adattato per EDILCALCESTRUZZO
             title: { display: true, text: 'Giorni' }
         },
          x: { grid: { display: false } }
     },
     plugins: {
        ...commonChartOptions.plugins,
        title: { display: false }
    }
};

const trendCashFlowOpOptionsCda = {
     ...commonChartOptions,
     scales: {
         y: {
             beginAtZero: false,
             title: { display: true, text: 'Cash Flow Operativo / Ricavi (%)' },
             ticks: {
                 callback: function(value) { return value.toFixed(1) + '%'; }
             },
             suggestedMin: 0,
             suggestedMax: 50 // Range per % adattato per EDILCALCESTRUZZO
         },
          x: { grid: { display: false } }
     },
      plugins: {
         ...commonChartOptions.plugins,
         title: { display: false }
     }
};


// ======================================
// CHART INITIALIZATION LOGIC
// ======================================
document.addEventListener('DOMContentLoaded', function() {
     console.log("Initializing CDA charts for EDILCALCESTRUZZO SRL");

     // Initialize Trend Ricavi/EBITDA Chart
     initChart('trendRicaviEbitdaChart', 'bar', chartData.trendRicaviEbitda, trendRicEbitdaOptionsCda);

     // Initialize PFN/EBITDA Chart
     initChart('trendPfnEbitdaChart', 'line', chartData.trendPfnEbitda, trendPfnEbitdaOptionsCda);

     // Initialize Working Capital Chart
     initChart('trendWorkingCapitalChart', 'line', chartData.trendWorkingCapital, trendWorkingCapitalOptionsCda);

     // Initialize Cash Flow Op Chart
     initChart('trendCashFlowOpChart', 'line', chartData.trendCashFlowOp, trendCashFlowOpOptionsCda);

     console.log("CDA charts initialization complete.");
});

// ======================================
// OTHER PAGE SCRIPTS
// ======================================
 document.addEventListener('DOMContentLoaded', function() {
     document.getElementById('currentYearSidebar').textContent = new Date().getFullYear();
     const footerYear = document.getElementById('currentYearFooterReport');
     if(footerYear) footerYear.textContent = new Date().getFullYear();

     const irpScoreValue = 64.28; // IRP EDILCALCESTRUZZO
     const irpHeaderBadge = document.getElementById('irp-header-badge');
     const scoreCircle = document.querySelector('.irp-score-circle');
     const categoryTextElement = document.querySelector('.irp-category-text');
     const categoryBadge = categoryTextElement ? categoryTextElement.querySelector('.status-badge') : null;

     let badgeHeaderClass = 'bg-warning';
     let circleClass = 'risk-medium';
     let categoryText = 'Medio';
     let categoryTextColor = 'text-warning';
     let badgeClass = 'bg-warning';
     let categoryBadgeText = 'C';
     let categoryBadgeTextColor = '';

     if (irpScoreValue >= 71) {
         badgeHeaderClass = 'bg-success'; circleClass = 'risk-low';
         categoryText = 'Moderato-Basso'; categoryTextColor = 'text-success'; badgeClass = 'bg-success'; categoryBadgeText = 'B'; categoryBadgeTextColor = '';
     } else if (irpScoreValue < 41) {
         badgeHeaderClass = 'bg-danger'; circleClass = 'risk-high';
         categoryText = 'Severo'; categoryTextColor = 'text-danger'; badgeClass = 'bg-danger'; categoryBadgeText = 'E+'; categoryBadgeTextColor = '';
     }

     if (irpHeaderBadge) {
         irpHeaderBadge.className = `badge ${badgeHeaderClass} me-3`;
         irpHeaderBadge.textContent = `IRP: ${irpScoreValue.toFixed(1)}`;
     }

     if(scoreCircle) {
         scoreCircle.classList.remove('risk-low', 'risk-medium', 'risk-high');
         scoreCircle.classList.add(circleClass);
     }

     if(categoryTextElement && categoryBadge) {
         categoryTextElement.classList.remove('text-success', 'text-warning', 'text-danger');
         categoryTextElement.textContent = '';
         categoryTextElement.appendChild(document.createTextNode(`Rischio ${categoryText} `));
         categoryTextElement.classList.add(categoryTextColor);
         categoryBadge.className = `status-badge ${badgeClass}`;
         categoryBadge.textContent = categoryBadgeText;
         if(categoryBadgeTextColor) {
             categoryBadge.classList.add(categoryBadgeTextColor);
         } else {
             categoryBadge.classList.remove('text-dark');
         }
         categoryTextElement.appendChild(categoryBadge);
     }

     if (typeof logout !== 'function') {
         window.logout = function() {
            console.log("Logout action triggered (placeholder)");
        }
     }
     if (typeof printDocument !== 'function') {
        window.printDocument = function() {
            window.print();
        }
     }
 });