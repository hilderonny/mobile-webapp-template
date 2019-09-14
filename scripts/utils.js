// Dieses Script sollte mit "defer" eingebunden werden, damit das Seitenladen schnell geht.
// Am Ende wird ein Service worker für die Progressive Web App (PWA) eingebunden

/**
 * Sammlung von Hilfsfunktionen
 */
var UTILS = {

    /* Ein- und Ausblenden von Elementen. Das wird über die CSS Klasse "invisible" gesteuert. */

    /**
     * Element sichtbar machen. Dazu wird die CSS Klasse "invisible" vom Element entfernt.
     * @param {*} selector Normalerweise eine ID in der Form "#ElementId". Kann aber auch ein CSS Selektor sein.
     */
    showElement: function(selector) {
        document.querySelector(selector).classList.remove('invisible');
    },

    /**
     * Element unsichtbar machen. Dazu wird die CSS Klasse "invisible" dem Element hinzugefügt.
     * @param {*} selector Normalerweise eine ID in der Form "#ElementId". Kann aber auch ein CSS Selektor sein.
     */
    hideElement: function(selector) {
        document.querySelector(selector).classList.add('invisible');
    },

};


// Service worker einbinden. Dieser muss im Stammverzeichnis der App in der Datei "serviceworker.js"
// enthalten sein.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        var serviceWorkerFile = 'serviceworker.js';
        console.log('%c🧰 load: Registriere service worker aus Datei ' + serviceWorkerFile, 'color:yellow');
        navigator.serviceWorker.register(serviceWorkerFile);
    });
}

// TODO: Reinbringen oder weglassen
function showProgressBar() {
    document.querySelector('.progressbar').classList.remove('invisible');
}

function hideProgressBar() {
    document.querySelector('.progressbar').classList.add('invisible');
}