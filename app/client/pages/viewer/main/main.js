import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

let queue = [];
const isLandscapeOriented = new ReactiveVar(window.orientation === 90);
function updateLandscapeTrackers() {
    isLandscapeOriented.set(window.orientation === 90 || window.orientation === -90);

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
        // 0 = portrait
        // > fix that it rerenders af rotating.
        updateLandscapeTrackers();

        $('.swiper-slide').css('width', screen.width);
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
    var mySwiper = new Swiper('.swiper-container', {
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
        queue = [];
        //_.each(GalleryObjects.find({}).fetch(), object => {
        //    queue.push(object.image);
        //});
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
        if (queue.length > 0) {
            document.querySelector('a-sky').setAttribute('src', queue[0]);
            queue.shift();
            return;
        }
        //document.querySelector('a-sky').setAttribute('src', 'R0010471.JPG');
        scene.exitVR();
    });

    $('#uploadBtn').click(function(event) {
        $('#files').click();
    });

    $('#vrBtn').click(function(event) {
        var scene = document.querySelector('a-scene');
        enterVr();
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
