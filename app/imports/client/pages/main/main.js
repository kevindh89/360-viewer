import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

import '../../../lib/listener/sceneClickListener.js';
import '../../../lib/listener/vrModeListener.js';

import '../../../lib/aframeComponents/mouseoverEffectHyperlinkObject.js';
import '../../../lib/aframeComponents/changeSceneOnClick.js';
import '../../../lib/aframeComponents/vrCursorAnimations.js';
import '../../../lib/aframeComponents/modelOpacity.js';

let vrMode = false;

export default MainTemplate = {
    onCreated: function onCreated() {
        Template.instance().activeSceneId = new ReactiveVar('delft1');
        const initialScene = Scenes.findOne({
            clientId: this.data._id,
            initialScene: true
        });
        Template.instance().activeSceneId.set(initialScene._id);
    },

    onRendered: function onRendered() {
        const template = Template.instance();
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

        const clickListener = new SceneClickListener(scene);
        clickListener.onClick(function (evt) {
            if (vrMode === false) {
                return;
            }
            if (evt.constructor.name === 'CustomEvent') {
                return;
            }
            this.scene.exitVR();
        });

        document.getElementById('scene').addEventListener('change-scene', evt => {
            template.activeSceneId.set(evt.detail.destinationId);
        });
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
            return scene.findPropertiesOfType(Scene.__properties.SKY).rotation ?
                `0 ${scene.findPropertiesOfType(Scene.__properties.SKY).rotation} 0` :
                '0 0 0';
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
