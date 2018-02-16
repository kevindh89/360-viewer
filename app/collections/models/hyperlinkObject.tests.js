/* eslint-disable func-names, prefer-arrow-callback */
import './hyperlinkObject.js';

describe('HyperlinkObject:getLabelPositon', function () {
    let hyperlinkObject;
    beforeEach(() => {
        hyperlinkObject = new HyperlinkObject({
            label: {
                text: 'test',
                position: {
                    x: 0,
                    y: 1,
                    z: 2
                }
            }
        });
    });

    it('returns label position when it is available', function () {
        chai.assert.deepEqual(hyperlinkObject.getLabelPosition(), { x: 0, y: 1, z: 2 });
    });

    it('returns default position with z based on text length when label is available but without position', function () {
        hyperlinkObject.label.position = undefined;
        chai.assert.deepEqual(hyperlinkObject.getLabelPosition(), { x: 0, y: 2, z: 1 });
    });

    it('returns default position when no label is defined', function () {
        hyperlinkObject.label = undefined;
        chai.assert.deepEqual(hyperlinkObject.getLabelPosition(), { x: 0, y: 2, z: 0 });
    });
});

describe('HyperlinkObject:getLabelRotation', function () {
    let hyperlinkObject;
    beforeEach(() => {
        hyperlinkObject = new HyperlinkObject({
            label: {
                text: 'test',
                position: {
                    x: 0,
                    y: 1,
                    z: 2
                },
                rotation: {
                    x: 10,
                    y: 10,
                    z: 4
                }
            }
        });
    });

    it('returns default position when label or label rotation is not defined', function () {
        hyperlinkObject.label.rotation = undefined;
        chai.assert.deepEqual(hyperlinkObject.getLabelRotation(), { x: 0, y: 90, z: 0 });
    });

    it('returns label position when it is defined', function () {
        chai.assert.deepEqual(hyperlinkObject.getLabelRotation(), { x: 10, y: 10, z: 4 });
    });
});
