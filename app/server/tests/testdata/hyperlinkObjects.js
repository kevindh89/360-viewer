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
                text: 'THE KITCHEN',
                position: {
                    x: 2,
                    y: 4,
                    z: 8
                },
                rotation: {
                    x: 0,
                    y: 90,
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
                x: 5,
                y: 3,
                z: 30
            },
            rotation: {
                x: 0,
                y: 100,
                z: 0
            },
            label: {
                text: 'THE LIVINGROOM',
                position: {
                    x: 10.3,
                    y: 5,
                    z: 28.8
                },
                rotation: {
                    x: 0,
                    y: 190,
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
                text: 'THE HALL',
                position: {
                    x: 22,
                    y: 4,
                    z: -6
                },
                rotation: {
                    x: 0,
                    y: -90,
                    z: 0
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
            label: {
                text: 'THE HALL',
                position: {
                    x: -6.50,
                    y: 4,
                    z: -28
                },
                rotation: {
                    x: 0,
                    y: 10,
                    z: 0
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
            _id: 'delft3_1',
            sceneId: 'delft3',
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
                        navigateToSceneId: 'delft2'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'delft3_2',
            sceneId: 'delft3',
            position: {
                x: 20,
                y: 1,
                z: -23
            },
            rotation: {
                x: 0,
                y: -170,
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
                x: -27,
                y: 1,
                z: -20
            },
            rotation: {
                x: 0,
                y: -70,
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
                x: 22,
                y: 1,
                z: 13.5
            },
            rotation: {
                x: 0,
                y: 105,
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
                x: -6,
                y: 1,
                z: 32.5
            },
            rotation: {
                x: 0,
                y: 45,
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
