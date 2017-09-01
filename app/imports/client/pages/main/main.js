import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';

import './main.styl';
import '../../components/tour/hyperlinkObject.js';
import '../../components/tour/textObject.js';

import '../../../lib/aframeComponents/mouseoverEffectHyperlinkObject.js';
import '../../../lib/aframeComponents/changeSceneOnClick.js';
import '../../../lib/aframeComponents/vrCursorAnimations.js';
import '../../../lib/aframeComponents/modelOpacity.js';
import '../../components/tour/vrModeInstructions.js';
import '../../components/tour/googleAnalyticsTracking.js';

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

        const vrModeUiEnabled = Meteor.Device.isDesktop() !== true ? 'true' : 'false';
        scene.setAttribute('vr-mode-ui', `enabled: ${vrModeUiEnabled}`);

        if (this.data.googleAnalyticsTrackingId &&
            Meteor.settings.public !== undefined &&
            Meteor.settings.public.enableGoogleAnalyticsTracking === true) {
            GoogleAnalyticsTracking.initialize(template);
        }
    },

    onEnterVr(template) {
        GoogleAnalyticsTracking.trackEvent('Button', 'click', 'Enter VR mode');

        template.viewer.vrMode = true;
        Blaze.renderWithData(Template.cursor, Clients.findOne(), document.getElementById('hud'));
        $('#scene').hide();
        $('#vrModeInstructions').show();
    },

    onExitVr(template) {
        GoogleAnalyticsTracking.trackEvent('Action', 'click', 'Exit VR mode');

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
        if (!this.isExitVrModeScreenClick(evt)) {
            return;
        }
        scene.exitVR();
    },

    isExitVrModeScreenClick(evt) {
        // prevent exiting vr mode when the click event is a CustomEvent (click to do something in the VR world)
        // or when the click event is triggered at entering VR mode.
        return evt.constructor.name !== 'CustomEvent' && (evt.target.className).indexOf('a-enter-vr-button') <= -1;
    },

    onChangeScene(evt, template) {
        GoogleAnalyticsTracking.trackEvent(
            'HyperlinkObject',
            'click',
            `Go from scene "${template.activeSceneId.get()}" to "${evt.detail.destinationId}"`
        );

        template.activeSceneId.set(evt.detail.destinationId);
    },

    trackEventAnalytics(category, action, label) {
        if (ga !== undefined) {
            ga('send', 'event', category, action, label);
        }
    },

    helpers: {
        activeImage() {
            if (!Template.instance().activeSceneId.get()) {
                return '';
            }
            const scene = Scenes.findOne({
                _id: Template.instance().activeSceneId.get()
            });
            const fileServer = Meteor.settings.public !== undefined && Meteor.settings.public.fileServer !== undefined ?
                Meteor.settings.public.fileServer :
                '';
            return `${fileServer}${scene.findPropertiesOfType(Scene.__properties.SKY).file}`;
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
        hyperlinkObjects() {
            return HyperlinkObjects.find({
                sceneId: Template.instance().activeSceneId.get()
            });
        },
        textObjects() {
            return TextObjects.find({
                sceneId: Template.instance().activeSceneId.get()
            });
        },
        showFullscreenButton() {
            return Router.current().params.query.embedded !== undefined;
        }
    },

    hyperlinkObject_helpers: {
        getDestinationSceneSkyImage(hyperlinkObject) {
            const scene = Scenes.findOne({ _id: hyperlinkObject.getDestinationSceneId() });
            if (!scene) {
                return '';
            }
            const fileServer = Meteor.settings.public !== undefined && Meteor.settings.public.fileServer !== undefined ?
                Meteor.settings.public.fileServer :
                '';
            return `${fileServer}${scene.findPropertiesOfType(Scene.__properties.SKY).file}`;
        }
    },

    events: {
        'click .fullscreen-button': () => {
            GoogleAnalyticsTracking.trackEvent('Button', 'click', 'Fullscreen button (in embedded viewer)');

            window.parent.postMessage('message', '*');
        },

        'click #client-logo-hyperlink': evt => {
            GoogleAnalyticsTracking.trackEvent('Hyperlink', 'click', 'Client logo hyperlink');

            window.open(evt.currentTarget.getAttribute('data-url'), '_blank');
        },

        'click #made-by-vensterworks-hyperlink': () => {
            GoogleAnalyticsTracking.trackEvent('Hyperlink', 'click', 'Made by Vensterworks footer hyperlink');

            window.open('https://www.vensterworks.com', '_blank');
        }
    }
};
