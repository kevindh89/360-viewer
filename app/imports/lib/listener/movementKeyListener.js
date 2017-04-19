MovementKeyListener = class MovementKeyListener {
    constructor(window, document) {
        this.window = window;
        this.document = document;
    }

    register(selector) {
        this.window.addEventListener('keydown', evt => {
            const hyperlinkObject = this.document.querySelector(selector);
            if (evt.keyCode === 37) {
                // move left
                hyperlinkObject.setAttribute('position', {
                    x: hyperlinkObject.getAttribute('position').x - 1,
                    y: hyperlinkObject.getAttribute('position').y,
                    z: hyperlinkObject.getAttribute('position').z,
                });
            }

            if (evt.keyCode === 38) {
                // move forward
                hyperlinkObject.setAttribute('position', {
                    x: hyperlinkObject.getAttribute('position').x,
                    y: hyperlinkObject.getAttribute('position').y,
                    z: hyperlinkObject.getAttribute('position').z - 1,
                });
            }

            if (evt.keyCode === 39) {
                // move right
                hyperlinkObject.setAttribute('position', {
                    x: hyperlinkObject.getAttribute('position').x + 1,
                    y: hyperlinkObject.getAttribute('position').y,
                    z: hyperlinkObject.getAttribute('position').z,
                });
            }

            if (evt.keyCode === 40) {
                // move backward
                hyperlinkObject.setAttribute('position', {
                    x: hyperlinkObject.getAttribute('position').x,
                    y: hyperlinkObject.getAttribute('position').y,
                    z: hyperlinkObject.getAttribute('position').z + 1,
                });
            }

            if (evt.keyCode === 87) {
                // move up
                hyperlinkObject.setAttribute('position', {
                    x: hyperlinkObject.getAttribute('position').x,
                    y: hyperlinkObject.getAttribute('position').y + 1,
                    z: hyperlinkObject.getAttribute('position').z,
                });
            }

            if (evt.keyCode === 83) {
                // move down
                hyperlinkObject.setAttribute('position', {
                    x: hyperlinkObject.getAttribute('position').x,
                    y: hyperlinkObject.getAttribute('position').y - 1,
                    z: hyperlinkObject.getAttribute('position').z,
                });
            }

            if (evt.keyCode === 81) {
                // rotate ccw
                hyperlinkObject.setAttribute('rotation', {
                    x: hyperlinkObject.getAttribute('rotation').x,
                    y: hyperlinkObject.getAttribute('rotation').y + 5,
                    z: hyperlinkObject.getAttribute('rotation').z,
                });
            }

            if (evt.keyCode === 69) {
                // rotate cw
                hyperlinkObject.setAttribute('rotation', {
                    x: hyperlinkObject.getAttribute('rotation').x,
                    y: hyperlinkObject.getAttribute('rotation').y - 5,
                    z: hyperlinkObject.getAttribute('rotation').z,
                });
            }

            if (evt.keyCode === 80) {
                // get current position and rotation
                // console.log('Position', hyperlinkObject.getAttribute('position'));
                // console.log('Rotation', hyperlinkObject.getAttribute('rotation'));
            }
        });
    }
};

