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
                x: -21,
                y: 2.5,
                z: 7
            },
            rotation: {
                x: 0,
                y: 10,
                z: 0
            },
            label: {
                text: 'THE KITCHEN'
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
                x: 5,
                y: 3,
                z: 28
            },
            rotation: {
                x: 0,
                y: 100,
                z: 0
            },
            label: {
                text: 'THE LIVINGROOM'
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
                x: 25,
                y: 0,
                z: -4.5
            },
            rotation: {
                x: 0,
                y: 186,
                z: 0
            },
            label: {
                text: 'THE HALL'
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
                x: -4,
                y: 0,
                z: -30.5
            },
            rotation: {
                x: 0,
                y: -85,
                z: 0
            },
            label: {
                text: 'THE HALL'
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
                x: 5,
                y: 1,
                z: 28
            },
            rotation: {
                x: 0,
                y: 100,
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
                x: 21,
                y: 1,
                z: 24
            },
            rotation: {
                x: 0,
                y: 125,
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
                x: -15.5,
                y: 1,
                z: -27
            },
            rotation: {
                x: 0,
                y: -55.5,
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
            _id: 'delft3_1',
            sceneId: 'delft3',
            position: {
                x: -14.5,
                y: 1,
                z: -25
            },
            rotation: {
                x: 0,
                y: -56.5,
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
            _id: 'delft3_2',
            sceneId: 'delft3',
            position: {
                x: 21.5,
                y: 1,
                z: -15
            },
            rotation: {
                x: 0,
                y: -145,
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
        }),
        new HyperlinkObject({
            _id: 'delft4_1',
            sceneId: 'delft4',
            position: {
                x: -21,
                y: 1,
                z: -24
            },
            rotation: {
                x: 0,
                y: -45,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'delft12'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'delft4_2',
            sceneId: 'delft4',
            position: {
                x: 19,
                y: 1,
                z: 19.5
            },
            rotation: {
                x: 0,
                y: 130,
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
            _id: 'delft12_1',
            sceneId: 'delft12',
            position: {
                x: -11,
                y: 1,
                z: 24.5
            },
            rotation: {
                x: 0,
                y: 65,
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
