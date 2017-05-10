/**
 * Created by kevindeheer on 26/02/2017.
 */

TestData.register(
    HyperlinkObjects,
    [
        new HyperlinkObject({
            _id: 'test',
            sceneId: 'hall',
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
            label: {
                text: 'DE KEUKEN',
                position: {
                    x: -10.5,
                    y: 5,
                    z: -22
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'kitchen'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'test1',
            sceneId: 'hall',
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
            label: {
                text: 'DE WOONKAMER',
                position: {
                    x: -27,
                    y: 5,
                    z: 9
                },
                rotation: {
                    x: 0,
                    y: 105,
                    z: 0
                }
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'livingroom'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'test2',
            sceneId: 'kitchen',
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
            label: {
                text: 'DE GANG',
                position: {
                    x: 22,
                    y: 4,
                    z: -8
                }
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'hall'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'test3',
            sceneId: 'livingroom',
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
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'hall'
                    }
                }
            ]
        }),

        // Delft
        new HyperlinkObject({
            _id: 'delft1',
            sceneId: 'delft1',
            position: {
                x: 29,
                y: 1,
                z: 11
            },
            rotation: {
                x: 0,
                y: -235,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'delft2'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'delft2',
            sceneId: 'delft2',
            position: {
                x: 29,
                y: 1,
                z: 24
            },
            rotation: {
                x: 0,
                y: -255,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'delft3'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'delft2_2',
            sceneId: 'delft2',
            position: {
                x: -22,
                y: 1,
                z: -22
            },
            rotation: {
                x: 0,
                y: -80,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'delft1'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'delft3',
            sceneId: 'delft3',
            position: {
                x: 29,
                y: 1,
                z: 24
            },
            rotation: {
                x: 0,
                y: -255,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'delft4'
                    }
                }
            ]
        })
    ]
);
