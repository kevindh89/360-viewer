/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import 'meteor/reactive-var';
import { Template } from 'meteor/templating';

import '../../../../collections/clients.js';
import '../../../../collections/scenes.js';
import '../../aframe-test-helper.js';
import './main.js';

describe('MainTemplate:onCreated', () => {
    let template;

    beforeEach(() => {
        template = {};
        stubs.create('template', Template, 'instance')
            .returns(template);
        stubs.create('scene', Scenes, 'findOne')
            .returns({
                _id: 'scene1'
            });
    });

    it('sets the initial scene as active scene', () => {
        MainTemplate.data = { _id: 'client' };
        MainTemplate.onCreated();

        expect(template.activeSceneId.get()).equals('scene1');
    });

    it('sets the viewers VR mode state to false', () => {
        MainTemplate.data = { _id: 'client' };
        MainTemplate.onCreated();

        expect(template.viewer.vrMode).equals(false);
    });

    after(() => {
        stubs.restoreAll();
    });
});

describe('MainTemplate:onRendered', () => {
    let template;

    beforeEach(() => {
        template = {};
        stubs.create('template', Template, 'instance')
            .returns(template);
        stubs.create('scene', Scenes, 'findOne')
            .returns({
                _id: 'scene1'
            });
        stubs.create('sceneDomElement', document, 'querySelector')
            .withArgs('a-scene')
            .returns({
                setAttribute: spies.create('setAttribute'),
                addEventListener: spies.create('addEventListener')
            });
    });

    it('hides the VR mode UI for desktop devices', () => {
        stubs.create('device', Meteor.Device, 'isDesktop')
            .returns(true);
        MainTemplate.onRendered();

        expect(spies.setAttribute).to.have.been.calledWith('vr-mode-ui', 'enabled: false');
    });

    it('shows the VR mode UI for non-desktop devices', () => {
        stubs.create('device', Meteor.Device, 'isDesktop')
            .returns(false);
        MainTemplate.onRendered();

        expect(spies.setAttribute).to.have.been.calledWith('vr-mode-ui', 'enabled: true');
    });
});

describe('MainTemplate:onEnterVr', () => {
    let template;

    before(() => {
        stubs.create('client', Clients, 'findOne')
            .returns({ _id: 'client' });
        stubs.create('hud', document, 'getElementById')
            .returns('<div id="hud"></div>');
        stubs.create('blazeRender', Blaze, 'renderWithData')
            .returns('<div id="cursor"></div>');
        stubs.create('blazeInsert', Blaze, 'insert');
        Template.cursor = { template: 'cursor.html' };
    });

    beforeEach(() => {
        template = {
            viewer: {
                vrMode: false
            }
        };
    });

    it('enables the templates VR mode', () => {
        MainTemplate.onEnterVr(template);

        expect(template.viewer.vrMode).equals(true);
    });

    it('enables the VR cursor on screen', () => {
        MainTemplate.onEnterVr(template);

        expect(stubs.blazeRender).to.have.been.calledWith(
            { template: 'cursor.html' },
            { _id: 'client' }
        );
        expect(stubs.blazeInsert).to.have.been.calledWith(
            '<div id="cursor"></div>',
            '<div id="hud"></div>'
        );
    });

    after(() => {
        stubs.restoreAll();
    });
});

describe('MainTemplate:onExitVr', () => {
    let template;

    before(() => {
        const parentNode = {
            removeChild(cursor) {
                return cursor;
            }
        };
        spies.create('removeChild', parentNode, 'removeChild');
        stubs.create('cursorElement', document, 'getElementById')
            .returns({
                parentNode
            });
    });

    beforeEach(() => {
        template = {
            viewer: {
                vrMode: true
            }
        };
    });

    it('disables the templates VR mode', () => {
        MainTemplate.onExitVr(template);

        expect(template.viewer.vrMode).equals(false);
    });

    it('disables the VR cursor on screen', () => {
        MainTemplate.onExitVr(template);

        expect(stubs.cursorElement).to.have.been.calledWith('cursor');
        expect(spies.removeChild).to.have.been.called;
    });

    after(() => {
        stubs.restoreAll();
    });
});

describe('MainTemplate:onClick', () => {
    let template;
    let event;
    const scene = {
        exitVR() {}
    };

    beforeEach(() => {
        template = {
            viewer: {
                vrMode: false
            }
        };
        event = {
            constructor: {
                name: 'MouseClickEvent'
            }
        };
        spies.create('exitVR', scene, 'exitVR');
    });

    it('does nothing when VR mode is false', () => {
        template.viewer.vrMode = false;
        event.constructor.name = 'MouseClickEvent';

        MainTemplate.onClick(event, template, scene);

        expect(spies.exitVR).to.not.have.been.called;
    });

    it('does nothing when a custom 360 viewer event, like at switching scenes, is triggered', () => {
        template.viewer.vrMode = true;
        event.constructor.name = 'CustomEvent';

        MainTemplate.onClick(event, template, scene);

        expect(spies.exitVR).to.not.have.been.called;
    });

    it('exits VR mode', () => {
        template.viewer.vrMode = true;
        event.constructor.name = 'MouseClickEvent';

        MainTemplate.onClick(event, template, scene);

        expect(spies.exitVR).to.have.been.called;
    });

    after(() => {
        stubs.restoreAll();
    });
});

describe('MainTemplate:onChangeScene', () => {
    let template;
    let event;

    beforeEach(() => {
        template = {
            activeSceneId: {
                set(value) {
                    return value;
                }
            }
        };
        event = {
            detail: {
                destinationId: 'scene2'
            }
        };
        spies.create('setActiveSceneId', template.activeSceneId, 'set');
    });

    it('changes the active scene', () => {
        MainTemplate.onChangeScene(event, template);

        expect(spies.setActiveSceneId).to.have.been.calledWith('scene2');
    });

    after(() => {
        stubs.restoreAll();
    });
});

describe('MainTemplate:helpers:activeImage', () => {
    beforeEach(() => {
        stubs.create('Scenes_findOne', Scenes, 'findOne')
            .returns({
                _id: 1,
                findPropertiesOfType: () => ({
                    file: '/testfile.jpg'
                })
            });
        Meteor.settings = {
            public: {
                fileServer: 'http://files.vensterworks.com'
            }
        };
    });

    it('returns an empty string when no scene is active', () => {
        stubs.create('instance', Template, 'instance')
            .returns({ activeSceneId: { get: () => '' } });

        const result = MainTemplate.helpers.activeImage();

        expect(result).equals('');
    });

    it('returns a filename when scene is active', () => {
        stubs.create('instance', Template, 'instance')
            .returns({ activeSceneId: { get: () => 1 } });

        const result = MainTemplate.helpers.activeImage();

        expect(result).equals('http://files.vensterworks.com/testfile.jpg');
        expect(stubs.Scenes_findOne).to.have.been.calledWith({
            _id: 1
        });
    });
});
