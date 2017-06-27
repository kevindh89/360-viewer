/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */
import 'meteor/reactive-var';
import { Template } from 'meteor/templating';

import '../../../../collections/scenes.js';
import '../../aframe-test-helper.js';
import './main.js';

describe('MainTemplate:helpers:activeImage', function () {
    beforeEach(() => {
        stubs.create('Scenes_findOne', Scenes, 'findOne')
            .returns({
                _id: 1,
                findPropertiesOfType: () => ({
                    file: 'testfile.jpg'
                })
            });
    });

    it('returns an empty string when no scene is active', function () {
        stubs.create('instance', Template, 'instance')
            .returns({ activeSceneId: { get: () => '' } });

        const result = MainTemplate.helpers.activeImage();

        expect(result).equals('');
    });

    it('returns a filename when scene is active', function () {
        stubs.create('instance', Template, 'instance')
            .returns({ activeSceneId: { get: () => 1 } });

        const result = MainTemplate.helpers.activeImage();

        expect(result).equals('testfile.jpg');
        expect(stubs.Scenes_findOne).to.have.been.calledWith({
            _id: 1
        });
    });
});
