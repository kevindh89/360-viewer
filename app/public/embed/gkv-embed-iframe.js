var vw360ViewerEmbed = {
    // Embedded viewer states
    iframe: undefined,
    fullscreenActive: false,

    createIframe: function () {
        vw360ViewerEmbed.iframe = document.createElement('iframe');
        vw360ViewerEmbed.iframe.setAttribute('src', 'https://360.gkvdenhaag.nl/gkv?embedded=1');
        vw360ViewerEmbed.iframe.setAttribute('height', '100%');
        vw360ViewerEmbed.iframe.setAttribute('width', '100%');
        vw360ViewerEmbed.iframe.setAttribute('frameborder', 0);
        return vw360ViewerEmbed.iframe;
    },

    createHyperlinkToViewer: function () {
        var hyperlink = document.createElement('a');
        hyperlink.setAttribute('href', 'https://360.gkvdenhaag.nl/');
        hyperlink.setAttribute('target', '_blank');
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
    if (window.innerWidth > 400) {
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
