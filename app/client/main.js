import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function() {
    $('#uploadBtn').click(function(event) {
        $('#files').click();
    });
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.hello.events({
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
                var chuncks = evt.target.result.match(/(.{1,65000})/g);

                chuncks.forEach(function(chunck) {
                    //console.log(chunck);
                    SendMessage("Sphere", "UploadImageFromWeb", chunck);
                });
                SendMessage("Sphere", "UploadImageFromWeb", "[finished-upload]");

                //SendMessage("Sphere", "UploadImageFromWeb", evt.target.result);

                //document.getElementById('image').src = evt.target.result;
            }
        };

        //var blob = file.slice(start, stop + 1);
        //reader.readAsBinaryString(blob);
        reader.readAsDataURL(file);
    },
});
