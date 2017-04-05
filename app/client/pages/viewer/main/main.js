import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

const isLandscapeOriented = new ReactiveVar(window.orientation === 90);
const activeSceneId = new ReactiveVar('test');
let vrMode = false;

function updateLandscapeTrackers() {
    isLandscapeOriented.set(window.orientation === 90 || window.orientation === -90);

    if (screen.width > 969) {
        // at desktop screens never hide the cursor.
        return;
    }
    if (window.orientation === 90 || window.orientation === -90) {
        document.getElementById('cursor').setAttribute('visible', true);
    } else {
        document.getElementById('cursor').setAttribute('visible', false);
    }
}

Template.main.onCreated(function mainOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);

    window.addEventListener("orientationchange", function () {
        // Announce the new orientation number
        // 90 = landscape
        return;
        // 0 = portrait
        // > fix that it rerenders af rotating.
        updateLandscapeTrackers();

        Meteor.setTimeout(() => {
            // mySwiper.update();
            // $('.swiper-slide').css('width', screen.width);
        }, 100);
    }, false);

    // window.addEventListener("keydown", (evt) => {
    //     const hyperlinkObject = document.querySelector(".hyperlink-object");
    //     if (evt.keyCode === 37) {
    //         // move left
    //         hyperlinkObject.setAttribute('position', {
    //             x: hyperlinkObject.getAttribute('position').x - 1,
    //             y: hyperlinkObject.getAttribute('position').y,
    //             z: hyperlinkObject.getAttribute('position').z,
    //         });
    //     }
    //
    //     if (evt.keyCode === 38) {
    //         // move forward
    //         hyperlinkObject.setAttribute('position', {
    //             x: hyperlinkObject.getAttribute('position').x,
    //             y: hyperlinkObject.getAttribute('position').y,
    //             z: hyperlinkObject.getAttribute('position').z - 1,
    //         });
    //     }
    //
    //     if (evt.keyCode === 39) {
    //         // move right
    //         hyperlinkObject.setAttribute('position', {
    //             x: hyperlinkObject.getAttribute('position').x + 1,
    //             y: hyperlinkObject.getAttribute('position').y,
    //             z: hyperlinkObject.getAttribute('position').z,
    //         });
    //     }
    //
    //     if (evt.keyCode === 40) {
    //         // move backward
    //         hyperlinkObject.setAttribute('position', {
    //             x: hyperlinkObject.getAttribute('position').x,
    //             y: hyperlinkObject.getAttribute('position').y,
    //             z: hyperlinkObject.getAttribute('position').z + 1,
    //         });
    //     }
    //
    //     if (evt.keyCode === 87) {
    //         // move up
    //         hyperlinkObject.setAttribute('position', {
    //             x: hyperlinkObject.getAttribute('position').x,
    //             y: hyperlinkObject.getAttribute('position').y + 1,
    //             z: hyperlinkObject.getAttribute('position').z,
    //         });
    //     }
    //
    //     if (evt.keyCode === 83) {
    //         // move down
    //         hyperlinkObject.setAttribute('position', {
    //             x: hyperlinkObject.getAttribute('position').x,
    //             y: hyperlinkObject.getAttribute('position').y - 1,
    //             z: hyperlinkObject.getAttribute('position').z,
    //         });
    //     }
    //
    //     if (evt.keyCode === 81) {
    //         // rotate ccw
    //         hyperlinkObject.setAttribute('rotation', {
    //             x: hyperlinkObject.getAttribute('rotation').x,
    //             y: hyperlinkObject.getAttribute('rotation').y + 5,
    //             z: hyperlinkObject.getAttribute('rotation').z,
    //         });
    //     }
    //
    //     if (evt.keyCode === 69) {
    //         // rotate cw
    //         hyperlinkObject.setAttribute('rotation', {
    //             x: hyperlinkObject.getAttribute('rotation').x,
    //             y: hyperlinkObject.getAttribute('rotation').y - 5,
    //             z: hyperlinkObject.getAttribute('rotation').z,
    //         });
    //     }
    //
    //     if (evt.keyCode === 80) {
    //         // get current position and rotation
    //         console.log('Position', hyperlinkObject.getAttribute('position'));
    //         console.log('Rotation', hyperlinkObject.getAttribute('rotation'));
    //     }
    // });
});

function hideHUD() {
    document.getElementById('cursor').setAttribute('visible', false);
}

function showHUD() {
    document.getElementById('cursor').setAttribute('visible', true);
}

Template.main.onRendered(function () {
    hideHUD();

    const scene = document.querySelector('a-scene');

    scene.addEventListener('enter-vr', (event) => {
        vrMode = true;
        showHUD();
    });
    scene.addEventListener('exit-vr', (event) => {
        vrMode = false;
        hideHUD();
    });
    scene.addEventListener('click', (event) => {
        if (vrMode === false) {
            return;
        }
        if ($(event.target).hasClass('hyperlink-object')) {
            return;
        }
        scene.exitVR();
    });

    this.autorun(() => {
        if (!Clients.findOne()) {
            return;
        }
    });

    AFRAME.registerComponent('mouseenter-tracking', {
        init: function () {
            let locked = false;

            this.el.addEventListener('mouseenter', function (evt) {
                if (locked === true ) { return; }

                const hyperlinkObject = evt.srcElement;
                hyperlinkObject.setAttribute('collada-model', 'url(/models/pointer2.dae)');

                locked = true;
                setTimeout(function() { locked = false; }, 50);
            });
            this.el.addEventListener('mouseleave', function (evt) {
                if (locked === true ) { return; }

                const hyperlinkObject = evt.srcElement;
                hyperlinkObject.setAttribute('collada-model', 'url(/models/pointer.dae)');
                locked = true;
                setTimeout(function() { locked = false; }, 50);
            });
        }
    });

    AFRAME.registerComponent('cursor-listener', {
        init: function () {
            this.el.addEventListener('click', function (evt) {
                // const el = evt.detail.intersectedEl;
                // let src = el.getAttribute('data-src').substring(4);
                // src = src.substring(0, src.length - 1);
                // $('#image').attr('src', src);
                // activeSceneId.set(el.getAttribute('data-id'));
                evt.stopPropagation();
                // cursor.setAttribute('scale', '0.30 0.30 0.30');
            });
            this.el.addEventListener('mouseleave', function (evt) {
                // Reset cursor size
                const cursor = evt.srcElement;
                cursor.emit('mouseleave-clickable');
                cursor.setAttribute('scale', '0.30 0.30 0.30');
            });
            this.el.addEventListener('mouseenter', function (evt) {
                const cursor = evt.srcElement;
                const el = evt.detail.intersectedEl;

                // Apparently the mouseenter event gets triggered without a intersect element sometimes.
                if (el === undefined || el.getAttribute('data-src') === null) {
                    return;
                }

                let src = el.getAttribute('data-src').substring(4);
                src = src.substring(0, src.length - 1);

                if ($('#image').attr('src') === src) {
                    // If the image is currently active, don't trigger the animation.
                    return;
                }
                cursor.emit('mouseover-clickable');
            });
        }
    });

    AFRAME.registerComponent('set-image', {
        schema: {
            on: {
                type: 'string'
            },
            target: {
                type: 'selector'
            },
            src: {
                type: 'string'
            },
            dur: {
                type: 'number',
                default: 300
            }
        },
        init: function() {
            var data = this.data;
            var el = this.el;
            el.addEventListener('click', function() {
                data.target.emit('set-image-fade');
                _.each(document.querySelectorAll('.hyperlink-object'), obj => {
                    obj.setAttribute('visible', false);
                });
                setTimeout(function() {
                    data.target.setAttribute('material', 'src', data.src);
                    activeSceneId.set(el.getAttribute('data-id'));
                }, 1000);
            });
        }
    });

});

Template.main.helpers({
    isPortraitOriented() {
        return !isLandscapeOriented.get();
    },
    counter() {
        return Template.instance().counter.get();
    },
    client() {
        return Clients.findOne({});
    },
    activeImage: function () {
        const scene = Scenes.findOne({
            _id: activeSceneId.get()
        });
        return scene.findPropertiesOfType(Scene.__properties.SKY).file;
    },

    hyperlinkObjects: () => {
        return HyperlinkObjects.find({
            sceneId: activeSceneId.get()
        });
    },
    getImage: (scene) => {
        return (scene.findPropertiesOfType(Scene.__properties.SKY).file).replace(/(\r\n|\n|\r)/gm," ");
    },
    skyImage: (scene) => {
        return 'src: url(' + scene.findPropertiesOfType(Scene.__properties.SKY).file + ')';
    },

    // this == HyperlinkObject
    getScene: function () {
        const sceneId = this.findOnClickEvents(Event.__types.HYPERLINK) !== undefined ? this.findOnClickEvents(Event.__types.HYPERLINK).data.navigateToSceneId : undefined;
        return Scenes.findOne({_id: sceneId});
    },
    getPosition: function () {
        return this.position.x + ' ' + this.position.y + ' ' + this.position.z;
    },
    getPositionStart: function () {
        return this.position.x + ',' + this.position.y + ',' + this.position.z;
    },
    getPositionEnd: function () {
        return this.position.x + ',' + (parseFloat(this.position.y)+0.15) + ',' + this.position.z;
    },
    getRotation: function () {
        if (this.rotation === undefined) {
            return 0 + ' ' + 0 + ' ' + 0;
        }
        return this.rotation.x + ' ' + this.rotation.y + ' ' + this.rotation.z;
    }
});
