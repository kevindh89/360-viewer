import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.onCreated(function mainOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);

    Meteor.subscribe('galleryObjects', 'v3n');

    console.log(GalleryObjects.find({clientId: 'v3n'}).fetch());
});

let vrMode = false;

function enterVr() {
    var scene = document.querySelector('a-scene');
    if (scene) {
        if (scene.hasLoaded) {
            scene.enterVR();
        } else {
            scene.addEventListener('loaded', scene.enterVR);
        }
    }
}

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
    const scene = document.querySelector('a-scene');
    scene.addEventListener('enter-vr', (event) => {
        hideHUD();
    });
    scene.addEventListener('exit-vr', (event) => {
        showHUD();
    });
    scene.addEventListener('click', (event) => {
        if (vrMode === false) {
            return;
        }
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
    counter() {
        return Template.instance().counter.get();
    },
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
    },
    'click #galleryBtn': () => {
        if ($('#quickSelector').css('display') === 'none') {
            $('#quickSelector').fadeIn();
            return;
        }
        $('#quickSelector').fadeOut();
    }
});
