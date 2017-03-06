import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const isLandscapeOriented = new ReactiveVar(window.orientation === 90);
const activeSceneId = new ReactiveVar('test');
let mySwiper;
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

    window.addEventListener("orientationchange", function() {
        // Announce the new orientation number
        // 90 = landscape
            return;
            // 0 = portrait
            // > fix that it rerenders af rotating.
            updateLandscapeTrackers();

            Meteor.setTimeout(() => {
                mySwiper.update();
                $('.swiper-slide').css('width', screen.width);
            }, 100);
        }, false);
});

let vrMode = false;


function hideHUD() {
    $('#hud').fadeOut('fast', () => {
        vrMode = true;
    });
}

function showHUD() {
    $('#hud').fadeIn('fast', () => {
        vrMode = false;
    });
}

Template.main.onRendered(function() {
    updateLandscapeTrackers();

    mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    mySwiper.on('onSlideChangeStart', (event) => {
        $('.highlighted-by-swiper').addClass('hide');
        $('.highlighted-by-swiper').removeClass('highlighted-by-swiper');
        if (event.activeIndex === 2) {
            // highlight vr mode
            $('#vr-mode-text').addClass('highlighted-by-swiper');
            $('#vr-mode-text').removeClass('hide');
        }
    });

    const scene = document.querySelector('a-scene');
    scene.addEventListener('enter-vr', (event) => {
        hideHUD();
    });
    scene.addEventListener('exit-vr', (event) => {
        mySwiper.update();
        showHUD();
    });
    scene.addEventListener('click', (event) => {
        if (vrMode === false) {
            return;
        }
        if ($(event.target).hasClass('scene')) {
        }
        scene.exitVR();
    });

    const cursor = document.querySelector('#cursor');
    cursor.addEventListener('click', (event) => {
        console.log('click', event);
    });

    this.autorun(() => {
        if (!Clients.findOne()) {
            return;
        }
    });

    AFRAME.registerComponent('cursor-listener', {
        init: function() {
            this.el.addEventListener('click', function(evt) {
                const el = evt.detail.intersectedEl;
                let src = el.getAttribute('material').src.substring(4);
                src = src.substring(0, src.length - 1);
                $('#image').attr('src', src);
                const clientId = Clients.findOne()._id;
                activeSceneId.set(el.getAttribute('data-id'));
                evt.stopPropagation();
                cursor.setAttribute('scale', '0.30 0.30 0.30');
            });
            this.el.addEventListener('mouseleave', function(evt) {
                // Reset cursor size
                const cursor = evt.srcElement;
                cursor.setAttribute('scale', '0.30 0.30 0.30');
            });
            this.el.addEventListener('mouseenter', function(evt) {
                const cursor = evt.srcElement;
                const el = evt.detail.intersectedEl;

                let src = el.getAttribute('material').src.substring(4);
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
    activeImage: function() {
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
    getScene: function() {
        const sceneId = this.findOnClickEvents(Event.__types.HYPERLINK) !== undefined ? this.findOnClickEvents(Event.__types.HYPERLINK).data.navigateToSceneId : undefined;
        return Scenes.findOne({_id: sceneId});
    },
    getPosition: function() {
        return this.position.x + ' ' + this.position.y + ' ' + this.position.z;
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
        reader.onload = function(evt) {
            if (evt.target.readyState === FileReader.DONE) {
                document.querySelector('a-sky').setAttribute('src', evt.target.result);
            }
        };

        //var blob = file.slice(start, stop + 1);
        //reader.readAsBinaryString(blob);
        reader.readAsDataURL(file);
    }
});
