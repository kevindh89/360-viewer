import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../../../imports/lib/listener/movementKeyListener.js';
import '../../../../imports/lib/listener/clickListener.js';
import '../../../../imports/lib/listener/vrModeListener.js';

import '../../../../imports/lib/aframeComponents/mouseenterTracking.js';
import '../../../../imports/lib/aframeComponents/setImage.js';
import '../../../../imports/lib/aframeComponents/cursorListener.js';

import './main.html';
import '../tour/hyperlinkObject.js';

require('aframe-animation-component');

const activeSceneId = new ReactiveVar('delft1');
let vrMode = false;

Template.main.onCreated(function main() {
    const initialScene = Scenes.findOne({
        clientId: this.data._id,
        initialScene: true
    });
    activeSceneId.set(initialScene._id);

    // counter starts at 0
    this.counter = new ReactiveVar(0);

    const images = [];
    _.each(HyperlinkObjects.find({}).fetch(), hyperlinkObject => {
        const sceneId = hyperlinkObject.findOnClickEvents(ViewerEvent.__types.HYPERLINK) !== undefined
            ? hyperlinkObject.findOnClickEvents(ViewerEvent.__types.HYPERLINK).data.navigateToSceneId
            : undefined;
        if (!sceneId) return;
        const scene = Scenes.findOne({ _id: sceneId });
        const image = (scene.findPropertiesOfType(Scene.__properties.SKY).file).replace(/(\r\n|\n|\r)/gm, ' ');

        const img = new Image();
        img.src = image;
        images.push(img);
    });
});

Template.main.onRendered(() => {
    const movementListener = new MovementKeyListener(window, document);
    movementListener.register('.hyperlink-object');

    const scene = document.querySelector('a-scene');
    const vrModeListener = new VRModeListener(scene);
    vrModeListener.onEnter(() => {
        vrMode = true;
        Blaze.insert(
            Blaze.renderWithData(Template.cursor, Clients.findOne()),
            document.getElementById('hud')
        );
    });
    vrModeListener.onExit(() => {
        vrMode = false;
        const cursor = document.getElementById('cursor');
        cursor.parentNode.removeChild(cursor);
    });

    const clickListener = new ClickListener(scene);
    clickListener.onClick(evt => {
        if (vrMode === false) {
            return;
        }
        if ($(evt.target).hasClass('hyperlink-object')) {
            return;
        }
        this.scene.exitVR();
    });

    // TODO: the fade effect wears off after one animation. That has to be fixed (https://github.com/ngokevin/kframe/issues/58)
    document.getElementById('black-plane').addEventListener('animation__fade-in-complete', evt => {
        activeSceneId.set(evt.target.getAttribute('data-transition-to-scene-id'));
    });
    document.getElementById('black-plane').addEventListener('animation__fade-out-complete', () => {
        document.getElementById('black-plane').setAttribute('position', { x: 0, y: 0, z: 1 });
    });
    $(document).delegate('.hyperlink-object', 'click-hyperlink', evt => {
        document.getElementById('black-plane').setAttribute('position', { x: 0, y: 0, z: -1 });
        document.getElementById('black-plane').setAttribute('data-transition-to-scene-id', evt.target.getAttribute('data-id'));
        document.getElementById('black-plane').emit('black-plane-fade');
    });
});

Template.main.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    client() {
        return Clients.findOne({});
    },
    activeImage() {
        if (!activeSceneId.get()) { return ''; }
        const scene = Scenes.findOne({
            _id: activeSceneId.get()
        });
        return scene.findPropertiesOfType(Scene.__properties.SKY).file;
    },

    hyperlinkObjects: () => {
        if (!activeSceneId.get()) { return ''; }
        return HyperlinkObjects.find({
            sceneId: activeSceneId.get()
        });
    }
});
