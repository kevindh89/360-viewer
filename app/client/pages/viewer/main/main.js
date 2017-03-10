import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

const isLandscapeOriented = new ReactiveVar(window.orientation === 90);
const activeSceneId = new ReactiveVar('test');
let vrMode = false;

// let mySwiper;
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

    // mySwiper = new Swiper('.swiper-container', {
    //     speed: 400,
    //     spaceBetween: 100,
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true
    // });
    //
    // mySwiper.on('onSlideChangeStart', (event) => {
    //     $('.highlighted-by-swiper').addClass('hide');
    //     $('.highlighted-by-swiper').removeClass('highlighted-by-swiper');
    //     if (event.activeIndex === 2) {
    //         // highlight vr mode
    //         $('#vr-mode-text').addClass('highlighted-by-swiper');
    //         $('#vr-mode-text').removeClass('hide');
    //     }
    // });

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

    $(document).delegate('.hyperlink-object', 'click', (event) => {
        if (event.target === undefined) return;
        const el = event.target;
        let src = el.getAttribute('data-src').substring(4);
        src = src.substring(0, src.length - 1);
        $('#image').attr('src', src);
        activeSceneId.set(el.getAttribute('data-id'));
    });

    this.autorun(() => {
        if (!Clients.findOne()) {
            return;
        }
    });

    AFRAME.registerComponent('cursor-listener', {
        init: function () {
            this.el.addEventListener('click', function (evt) {
                const el = evt.detail.intersectedEl;
                let src = el.getAttribute('data-src').substring(4);
                src = src.substring(0, src.length - 1);
                $('#image').attr('src', src);
                activeSceneId.set(el.getAttribute('data-id'));
                evt.stopPropagation();
                cursor.setAttribute('scale', '0.30 0.30 0.30');
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
                if (el === undefined) {
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
    getRotation: function () {
        if (this.rotation === undefined) {
            return 0 + ' ' + 0 + ' ' + 0;
        }
        return this.rotation.x + ' ' + this.rotation.y + ' ' + this.rotation.z;
    }
});

Template.main.events({
    'change #files'(event, instance) {
        // increment the counter when button is clicked

        //var startByte = event.target.getAttribute('data-startbyte');
        //var endByte = event.target.getAttribute('data-endbyte');

        var files = document.getElementById('files').files;
        if (!files.length) {
            alert('Please select a file!');
            return;
        }

        var file = files[0];
        //var start = parseInt(startByte) || 0;
        //var stop = parseInt(endByte) || file.size - 1;

        var reader = new FileReader();
        reader.onload = function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
                document.querySelector('a-sky').setAttribute('src', evt.target.result);
            }
        };

        //var blob = file.slice(start, stop + 1);
        //reader.readAsBinaryString(blob);
        reader.readAsDataURL(file);
    }
});
