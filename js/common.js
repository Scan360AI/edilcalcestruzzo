/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Funzioni comuni JS
 * Versione 1.4 - Login Sicuro e Ottimizzato
 */

// Configurazione
const CONFIG = {
    SESSION_TIMEOUT_HOURS: 24,
    LOGIN_PAGE: 'login-page.html',
    DASHBOARD_PAGE: 'index.html',
    // Credenziali hardcoded - DA RIMUOVERE IN PRODUZIONE!
    // Dovrebbero essere validate lato server
    TEMP_CREDENTIALS: {
        username: 'Admin',
        password: 'Edilcalcestruzzo2025'
    }
};

/**
 * Classe per gestire lo storage in modo sicuro
 */
class StorageManager {
    static setItem(key, value) {
        try {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem(key, value);
                return true;
            }
        } catch (e) {
            console.error("Errore durante il salvataggio in localStorage:", e);
            // Fallback su sessionStorage se localStorage non disponibile
            try {
                sessionStorage.setItem(key, value);
                return true;
            } catch (e2) {
                console.error("Anche sessionStorage non disponibile:", e2);
            }
        }
        return false;
    }

    static getItem(key) {
        try {
            if (typeof(Storage) !== "undefined") {
                return localStorage.getItem(key) || sessionStorage.getItem(key);
            }
        } catch (e) {
            console.error("Errore durante la lettura da storage:", e);
        }
        return null;
    }

    static removeItem(key) {
        try {
            if (typeof(Storage) !== "undefined") {
                localStorage.removeItem(key);
                sessionStorage.removeItem(key);
                return true;
            }
        } catch (e) {
            console.error("Errore durante la rimozione da storage:", e);
        }
        return false;
    }

    static clear() {
        try {
            if (typeof(Storage) !== "undefined") {
                localStorage.clear();
                sessionStorage.clear();
                return true;
            }
        } catch (e) {
            console.error("Errore durante la pulizia dello storage:", e);
        }
        return false;
    }
}

/**
 * Funzione per gestire il login
 * @param {Event} event - Evento submit del form
 */
function handleLogin(event) {
    if (event) event.preventDefault();
    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    if (!usernameInput || !passwordInput) {
        console.error("Elementi username o password non trovati nel form.");
        if (errorMessage) {
            errorMessage.textContent = 'Errore nel form di login.';
            errorMessage.style.display = 'block';
        } else {
            alert('Errore nel form di login.');
        }
        return false;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Validazione base
    if (!username || !password) {
        const message = 'Inserisci username e password.';
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
        } else {
            alert(message);
        }
        return false;
    }

    // ATTENZIONE: Questa è una validazione CLIENT-SIDE non sicura!
    // In produzione, le credenziali dovrebbero essere validate da un server
    if (username === CONFIG.TEMP_CREDENTIALS.username && 
        password === CONFIG.TEMP_CREDENTIALS.password) {
        
        console.log('Login successful per', username);
        
        // Salva stato login
        const loginSuccess = StorageManager.setItem('scanUserLoggedIn', 'true') &&
                           StorageManager.setItem('scanUsername', username) &&
                           StorageManager.setItem('scanLoginTime', new Date().toISOString());
        
        if (loginSuccess) {
            // Nascondi messaggio di errore se presente
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
            
            // Reindirizza alla dashboard principale
            setTimeout(() => {
                window.location.href = CONFIG.DASHBOARD_PAGE;
            }, 100);
        } else {
            const message = "Impossibile salvare lo stato del login. Verifica le impostazioni del browser.";
            if (errorMessage) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
            } else {
                alert(message);
            }
        }
    } else {
        // Login fallito
        const message = 'Credenziali non valide. Riprova.';
        if (errorMessage) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
        } else {
            alert(message);
        }
        
        // Pulisci campi password per sicurezza
        passwordInput.value = '';
        
        // Pulisci storage
        clearLoginData();
    }
    
    return false;
}

/**
 * Funzione per pulire i dati di login
 */
function clearLoginData() {
    StorageManager.removeItem('scanUserLoggedIn');
    StorageManager.removeItem('scanUsername');
    StorageManager.removeItem('scanLoginTime');
}

/**
 * Funzione per gestire il logout
 */
function logout() {
    console.log("Logout in corso...");
    
    // Conferma logout (opzionale)
    if (confirm('Sei sicuro di voler uscire?')) {
        clearLoginData();
        
        // Reindirizza alla pagina di login
        window.location.href = CONFIG.LOGIN_PAGE;
    }
}

/**
 * Funzione per verificare se l'utente è loggato
 * Con timeout di sessione
 */
function checkLoginStatus() {
    const loggedIn = StorageManager.getItem('scanUserLoggedIn') === 'true';
    const loginTime = StorageManager.getItem('scanLoginTime');
    const username = StorageManager.getItem('scanUsername');

    // Verifica timeout sessione
    if (loggedIn && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursSinceLogin = (now - loginDate) / (1000 * 60 * 60);
        
        if (hoursSinceLogin > CONFIG.SESSION_TIMEOUT_HOURS) {
            console.warn(`Sessione scaduta dopo ${CONFIG.SESSION_TIMEOUT_HOURS} ore`);
            clearLoginData();
            alert('La tua sessione è scaduta. Effettua nuovamente il login.');
            window.location.href = CONFIG.LOGIN_PAGE;
            return false;
        }
    }

    // Determina se siamo sulla pagina di login
    const currentPath = window.location.pathname;
    const isLoginPage = currentPath.endsWith(CONFIG.LOGIN_PAGE) || 
                       currentPath.endsWith(CONFIG.LOGIN_PAGE + '/') ||
                       currentPath === '/' + CONFIG.LOGIN_PAGE;
    
    if (!isLoginPage && !loggedIn) {
        // Non loggato e non sulla pagina di login
        console.warn("Utente non loggato. Reindirizzamento al login.");
        window.location.href = CONFIG.LOGIN_PAGE;
        return false;
    } else if (loggedIn && isLoginPage) {
        // Già loggato e sulla pagina di login
        console.log("Utente già loggato, reindirizzamento alla dashboard");
        window.location.href = CONFIG.DASHBOARD_PAGE;
        return true;
    } else if (loggedIn) {
        console.log(`Utente loggato: ${username}`);
        updateUserDisplay(username);
        return true;
    }
    
    return loggedIn;
}

/**
 * Aggiorna la visualizzazione del nome utente nell'interfaccia
 * @param {string} username - Nome utente da visualizzare
 */
function updateUserDisplay(username) {
    const userDisplay = document.querySelector('.user-display');
    if (userDisplay && username) {
        userDisplay.textContent = `Benvenuto, ${username}`;
    }
}

/**
 * Funzione per la stampa ottimizzata della pagina corrente
 */
function printDocument() {
    console.log("Avvio stampa...");
    
    // Aggiungi classe per stampa al body
    document.body.classList.add('printing');
    
    // Stampa
    window.print();
    
    // Rimuovi classe dopo stampa
    setTimeout(() => {
        document.body.classList.remove('printing');
    }, 100);
}

/**
 * Formatta un numero come valore monetario (Euro, IT)
 * @param {number|string|null|undefined} value - Valore numerico o convertibile
 * @param {number} [digits=0] - Numero di cifre decimali
 * @returns {string} - Stringa formattata (es. "€ 1.234.567") o "N/D"
 */
function formatCurrency(value, digits = 0) {
    // Gestione valori nulli o undefined
    if (value === null || value === undefined || value === '') {
        return "N/D";
    }
    
    const num = parseFloat(value);
    if (isNaN(num)) {
        return "N/D";
    }
    
    // Controllo per valori molto piccoli
    if (Math.abs(num) < Math.pow(10, -(digits + 1))) {
        value = 0;
    }
    
    try {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        }).format(num);
    } catch (e) {
        console.error("Errore formattazione valuta:", value, e);
        // Fallback manuale
        return `€ ${num.toFixed(digits).replace('.', ',')}`;
    }
}

/**
 * Formatta un numero come percentuale (IT)
 * @param {number|string|null|undefined} value - Valore numerico (es. 8.8 per 8,8%)
 * @param {number} [digits=1] - Numero di cifre decimali
 * @returns {string} - Stringa formattata (es. "8,8%") o "N/D"
 */
function formatPercentage(value, digits = 1) {
    // Gestione valori nulli o undefined
    if (value === null || value === undefined || value === '') {
        return "N/D";
    }
    
    const num = parseFloat(value);
    if (isNaN(num)) {
        return "N/D";
    }
    
    try {
        return new Intl.NumberFormat('it-IT', {
            style: 'percent',
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        }).format(num / 100);
    } catch(e) {
        console.error("Errore formattazione percentuale:", value, e);
        // Fallback manuale
        return `${num.toFixed(digits).replace('.', ',')}%`;
    }
}

/**
 * Recupera i dati per un grafico cercando una funzione globale
 * @param {string} functionName - Nome della funzione globale
 * @returns {object|null} - Oggetto dati o null
 */
function getChartData(functionName) {
    if (!functionName || typeof functionName !== 'string') {
        console.error('Nome funzione non valido:', functionName);
        return null;
    }
    
    try {
        if (typeof window[functionName] === 'function') {
            const data = window[functionName]();
            
            // Validazione struttura dati Chart.js
            if (data && 
                typeof data === 'object' && 
                Array.isArray(data.labels) && 
                Array.isArray(data.datasets) &&
                data.datasets.length > 0) {
                return data;
            } else {
                console.error(`La funzione ${functionName} non ha restituito dati validi per Chart.js.`);
                return null;
            }
        } else {
            console.warn(`Funzione dati globale non trovata: ${functionName}`);
            return null;
        }
    } catch (error) {
        console.error(`Errore durante l'esecuzione della funzione dati ${functionName}:`, error);
        return null;
    }
}

/**
 * Inizializza un grafico Chart.js
 * @param {string} canvasId - ID dell'elemento canvas
 * @param {string} chartType - Tipo di grafico
 * @param {object} chartData - Dati del grafico
 * @param {object} chartOptions - Opzioni del grafico
 * @returns {Chart|null} - Istanza del grafico o null in caso di errore
 */
function initChart(canvasId, chartType, chartData, chartOptions = {}) {
    if (!canvasId || typeof canvasId !== 'string') {
        console.error('ID canvas non valido:', canvasId);
        return null;
    }
    
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas non trovato: ${canvasId}`);
        return null;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error(`Impossibile ottenere il contesto 2D per il canvas: ${canvasId}`);
        return null;
    }

    // Validazione dati
    if (!chartData || 
        typeof chartData !== 'object' || 
        !Array.isArray(chartData.labels) || 
        !Array.isArray(chartData.datasets)) {
        console.error(`Dati non validi o mancanti forniti a initChart per: ${canvasId}`);
        showChartError(ctx, canvas, 'Dati grafico non validi');
        return null;
    }

    try {
        // Distruggi grafico esistente se presente
        if (typeof Chart !== 'undefined') {
            const existingChart = Chart.getChart(canvasId);
            if (existingChart instanceof Chart) {
                existingChart.destroy();
            }
        } else {
            console.error('Chart.js non è caricato');
            showChartError(ctx, canvas, 'Chart.js non disponibile');
            return null;
        }
        
        // Opzioni di default per migliorare l'aspetto
        const defaultOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        
        // Unisci opzioni custom con quelle di default
        const mergedOptions = { ...defaultOptions, ...chartOptions };
        
        // Crea il nuovo grafico
        const newChart = new Chart(ctx, {
            type: chartType,
            data: chartData,
            options: mergedOptions
        });
        
        return newChart;
        
    } catch (error) {
        console.error(`Errore durante l'inizializzazione del grafico ${canvasId}:`, error);
        showChartError(ctx, canvas, 'Errore inizializzazione');
        return null;
    }
}

/**
 * Mostra un messaggio di errore sul canvas
 * @param {CanvasRenderingContext2D} ctx - Contesto 2D del canvas
 * @param {HTMLCanvasElement} canvas - Elemento canvas
 * @param {string} message - Messaggio di errore
 */
function showChartError(ctx, canvas, message) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '14px Titillium Web, sans-serif';
    ctx.fillStyle = '#dc3545';
    ctx.textAlign = 'center';
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

/**
 * Ottieni il nome utente corrente
 * @returns {string|null} - Nome utente o null se non loggato
 */
function getCurrentUsername() {
    return StorageManager.getItem('scanUsername');
}

/**
 * Verifica se l'utente è loggato (versione semplice senza redirect)
 * @returns {boolean} - true se loggato, false altrimenti
 */
function isUserLoggedIn() {
    return StorageManager.getItem('scanUserLoggedIn') === 'true';
}

/**
 * Ottieni il tempo di login
 * @returns {Date|null} - Data di login o null
 */
function getLoginTime() {
    const loginTime = StorageManager.getItem('scanLoginTime');
    return loginTime ? new Date(loginTime) : null;
}

/**
 * Inizializzazione all'avvio di ogni pagina
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("SCAN Common JS - Inizializzazione pagina");
    
    // Verifica sempre lo stato del login (decommentare in produzione)
    // checkLoginStatus();
    
    // Setup event listeners per elementi comuni
    setupEventListeners();
    
    // Mostra info utente se loggato
    const username = getCurrentUsername();
    if (username) {
        updateUserDisplay(username);
    }
    
    // Inizializza tooltips se Bootstrap è disponibile
    initializeTooltips();
});

/**
 * Setup degli event listener comuni
 */
function setupEventListeners() {
    // Pulsante stampa
    const printBtns = document.querySelectorAll('.print-button button, .btn-print');
    printBtns.forEach(btn => {
        btn.addEventListener('click', printDocument);
    });

    // Pulsante logout
    const logoutBtns = document.querySelectorAll('.logout-button, .btn-logout');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', logout);
    });
    
    // Form di login (se presente)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

/**
 * Inizializza i tooltip Bootstrap se disponibili
 */
function initializeTooltips() {
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

/**
 * Esporta le funzioni per uso globale
 */
window.SCAN = {
    handleLogin,
    logout,
    checkLoginStatus,
    printDocument,
    formatCurrency,
    formatPercentage,
    getChartData,
    initChart,
    getCurrentUsername,
    isUserLoggedIn,
    getLoginTime,
    StorageManager
};
