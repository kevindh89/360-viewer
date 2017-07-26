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

describe('MainTemplate:onEnterVr', () => {
    let template;

    before(() => {
        Template.cursor = { template: 'cursor.html' };
        stubs.create('client', Clients, 'findOne')
            .returns({ _id: 'client' });
        stubs.create('hud', document, 'getElementById')
            .returns('<div id="hud"></div>');
        stubs.create('blazeRenderWithData', Blaze, 'renderWithData')
            .returns('<div id="cursor"></div>');
        $ = stubs.create('$', window, '$');
        $.withArgs('#scene').returns({
            hide: spies.create('sceneHide')
        });
        $.withArgs('#vrModeInstructions').returns({
            show: spies.create('vrModeInstructionsShow')
        });
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

    it('adds the VR cursor on screen', () => {
        MainTemplate.onEnterVr(template);

        expect(stubs.blazeRenderWithData).to.have.been.calledWith(
            { template: 'cursor.html' },
            { _id: 'client' },
            '<div id="hud"></div>'
        );
    });

    it('shows an instruction popup about VR mode', () => {
        MainTemplate.onEnterVr(template);

        expect(spies.sceneHide).to.have.been.called;
        expect(spies.vrModeInstructionsShow).to.have.been.called;
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
        $ = stubs.create('$', window, '$');
        $.withArgs('#scene').returns({
            show: spies.create('sceneShow')
        });
        $.withArgs('#vrModeInstructions').returns({
            hide: spies.create('vrModeInstructionsHide')
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

    it('removes the VR cursor from screen', () => {
        MainTemplate.onExitVr(template);

        expect(stubs.cursorElement).to.have.been.calledWith('cursor');
        expect(spies.removeChild).to.have.been.called;
    });

    it('removes VR mode instructions and enables the 3D scene', () => {
        MainTemplate.onExitVr(template);

        expect(spies.sceneShow).to.have.been.called;
        expect(spies.vrModeInstructionsHide).to.have.been.called;
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
        stubs.create('isExitVrModeScreenClick', MainTemplate, 'isExitVrModeScreenClick')
            .returns(true);
        spies.create('exitVR', scene, 'exitVR');
    });

    it('does nothing when VR mode is false', () => {
        template.viewer.vrMode = false;

        MainTemplate.onClick(event, template, scene);

        expect(spies.exitVR).to.not.have.been.called;
    });

    it('does nothing when onClick was triggered by click on which VR mode shouldn\'t be exited', () => {
        template.viewer.vrMode = true;
        stubs.isExitVrModeScreenClick.returns(false);

        MainTemplate.onClick(event, template, scene);

        expect(spies.exitVR).to.not.have.been.called;
    });

    it('exits VR mode', () => {
        template.viewer.vrMode = true;

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
                    file: 'testfile.jpg'
                })
            });
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

        expect(result).equals('testfile.jpg');
        expect(stubs.Scenes_findOne).to.have.been.calledWith({
            _id: 1
        });
    });
});
