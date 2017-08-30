/**
 * The client website only has to include this javascript file and put this piece of code on the place where the 360-viewer should be embedded:
 *  <div id="vw-embedded-360-viewer" data-mobile-button-label="Ga naar 360 tour"></div>
 */
var vw360ViewerEmbed = {
    // Embedded viewer states
    iframe: undefined,
    fullscreenActive: false,

    createIframe: function () {
        vw360ViewerEmbed.iframe = document.createElement('iframe');
        vw360ViewerEmbed.iframe.setAttribute('src', 'http://localhost:3000/v3n?embedded=1');
        vw360ViewerEmbed.iframe.setAttribute('height', '100%');
        vw360ViewerEmbed.iframe.setAttribute('width', '100%');
        vw360ViewerEmbed.iframe.setAttribute('frameborder', 0);
        return vw360ViewerEmbed.iframe;
    },

    createHyperlinkToViewer: function () {
        var hyperlink = document.createElement('a');
        hyperlink.setAttribute('href', 'http://localhost:3000/v3n');
        hyperlink.setAttribute('target', '_parent');
        hyperlink.classList.add('to-vw-360-tour-button');
        hyperlink.innerHTML = document.getElementById('vw-embedded-360-viewer').getAttribute('data-mobile-button-label');
        return hyperlink;
    },

    fullscreen: function () {
        if (vw360ViewerEmbed.iframe === undefined) {
            return;
        }
        vw360ViewerEmbed.iframe.setAttribute('style', 'position: fixed; top: 0; left: 0;');
    },

    exitFullscreen: function () {
        if (vw360ViewerEmbed.iframe === undefined) {
            return;
        }
        vw360ViewerEmbed.iframe.setAttribute('style', '');
        vw360ViewerEmbed.iframe.setAttribute('height', '100%');
        vw360ViewerEmbed.iframe.setAttribute('width', '100%');
    }
};

window.onload = function () {
    var domContainerElement = document.getElementById('vw-embedded-360-viewer');

    // only execute this code if the viewport is larger than 400 pixels in width
    if (screen.width > 400) {
        domContainerElement.appendChild(vw360ViewerEmbed.createIframe());
    } else {
        domContainerElement.appendChild(vw360ViewerEmbed.createHyperlinkToViewer());
    }
};

window.addEventListener("message", function (e) {
    if (vw360ViewerEmbed.fullscreenActive === false) {
        vw360ViewerEmbed.fullscreen();
        vw360ViewerEmbed.fullscreenActive = true;
    } else {
        vw360ViewerEmbed.exitFullscreen();
        vw360ViewerEmbed.fullscreenActive = false;
    }
}, false);
