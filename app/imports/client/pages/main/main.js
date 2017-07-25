import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

import './main.styl';

import '../../../lib/aframeComponents/mouseoverEffectHyperlinkObject.js';
import '../../../lib/aframeComponents/changeSceneOnClick.js';
import '../../../lib/aframeComponents/vrCursorAnimations.js';
import '../../../lib/aframeComponents/modelOpacity.js';
import '../../components/tour/vrModeInstructions.js';

export default MainTemplate = {
    onCreated: function onCreated() {
        const template = Template.instance();
        const initialScene = Scenes.findOne({
            clientId: this.data._id,
            initialScene: true
        });

        template.activeSceneId = new ReactiveVar(initialScene._id);
        template.viewer = {
            vrMode: false
        };
    },

    onRendered: function onRendered() {
        const template = Template.instance();
        const scene = document.querySelector('a-scene');

        scene.addEventListener('enter-vr', () => MainTemplate.onEnterVr(template));
        scene.addEventListener('exit-vr', () => MainTemplate.onExitVr(template));
        scene.addEventListener('click', evt => MainTemplate.onClick(evt, template, scene));
        scene.addEventListener('change-scene', evt => MainTemplate.onChangeScene(evt, template, scene));
    },

    onEnterVr(template) {
        template.viewer.vrMode = true;
        Blaze.renderWithData(Template.cursor, Clients.findOne(), document.getElementById('hud'));
        $('#scene').hide();
        $('#vrModeInstructions').show();
    },

    onExitVr(template) {
        template.viewer.vrMode = false;
        const cursor = document.getElementById('cursor');
        cursor.parentNode.removeChild(cursor);
        $('#scene').show();
        $('#vrModeInstructions').hide();
    },

    onClick(evt, template, scene) {
        if (template.viewer.vrMode === false) {
            return;
        }
        if (evt.constructor.name === 'CustomEvent') {
            return;
        }
        scene.exitVR();
    },

    onChangeScene(evt, template) {
        template.activeSceneId.set(evt.detail.destinationId);
    },

    helpers: {
        activeImage() {
            if (!Template.instance().activeSceneId.get()) {
                return '';
            }
            const scene = Scenes.findOne({
                _id: Template.instance().activeSceneId.get()
            });
            return scene.findPropertiesOfType(Scene.__properties.SKY).file;
        },
        sceneRotation() {
            if (!Template.instance().activeSceneId.get()) {
                return '0 0 0';
            }
            const scene = Scenes.findOne({
                _id: Template.instance().activeSceneId.get()
            });
            const sceneRotation = scene.findPropertiesOfType(Scene.__properties.SKY).rotation;
            if (!sceneRotation) {
                return '0 0 0';
            }
            return `${sceneRotation.x} ${sceneRotation.y} ${sceneRotation.z}`;
        },
        hyperlinkObjects: () => {
            if (!Template.instance().activeSceneId.get()) {
                return '';
            }
            return HyperlinkObjects.find({
                sceneId: Template.instance().activeSceneId.get()
            });
        }
    },

    hyperlinkObject_helpers: {
        getDestinationSceneSkyImage(hyperlinkObject) {
            const scene = Scenes.findOne({ _id: hyperlinkObject.getDestinationSceneId() });
            if (!scene) {
                return '';
            }
            return scene.findPropertiesOfType(Scene.__properties.SKY).file;
        }
    }
};
