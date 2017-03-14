/**
 * Created by kevindeheer on 26/02/2017.
 */

TestData.register(
    HyperlinkObjects,
    [
        new HyperlinkObject({
            _id: 'test',
            sceneId: 'test',
            position: {
                x: -15,
                y: 2,
                z: -22
            },
            rotation: {
                x: 0,
                y: -105,
                z: 0
            },
            onClickEvents: [
                {
                    type: Event.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'test2'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'test1',
            sceneId: 'test',
            position: {
                x: -27,
                y: 2,
                z: 12
            },
            rotation: {
                x: 0,
                y: -10,
                z: 0
            },
            onClickEvents: [
                {
                    type: Event.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'test3'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'test2',
            sceneId: 'test2',
            position: {
                x: 22,
                y: 1,
                z: -11
            },
            rotation: {
                x: 0,
                y: -195,
                z: 0
            },
            onClickEvents: [
                {
                    type: Event.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'test'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'test3',
            sceneId: 'test3',
            position: {
                x: -11,
                y: 1,
                z: -28
            },
            rotation: {
                x: 0,
                y: -105,
                z: 0
            },
            onClickEvents: [
                {
                    type: Event.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'test'
                    }
                }
            ]
        })
    ]
);