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
        }),

        // GKV
        new HyperlinkObject({
            _id: 'gkv-bezuidenhoutseweg-entree',
            sceneId: 'gkv-bezuidenhoutseweg',
            position: {
                x: 2,
                y: 1,
                z: -29
            },
            rotation: {
                x: 0,
                y: -100,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-entree'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-entree-terras',
            sceneId: 'gkv-entree',
            position: {
                x: 26,
                y: 1,
                z: -18
            },
            rotation: {
                x: 0,
                y: -140,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-terras'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-entree-bezuidenhoutseweg',
            sceneId: 'gkv-entree',
            position: {
                x: -8.5,
                y: 3,
                z: 20
            },
            rotation: {
                x: 0,
                y: 90,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-bezuidenhoutseweg'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-terras-entree',
            sceneId: 'gkv-terras',
            position: {
                x: -4.79,
                y: 1.38,
                z: 11
            },
            rotation: {
                x: 0,
                y: 50,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-entree'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-terras-kantine',
            sceneId: 'gkv-terras',
            position: {
                x: 7.57,
                y: 3,
                z: -11
            },
            rotation: {
                x: 0,
                y: -127,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-kantine'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-terras-voorveld',
            sceneId: 'gkv-terras',
            position: {
                x: 16.1,
                y: 2,
                z: -0.1
            },
            rotation: {
                x: 0,
                y: -180,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-voorveld'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-kantine-keuken',
            sceneId: 'gkv-kantine',
            position: {
                x: -33,
                y: 2,
                z: 13
            },
            rotation: {
                x: 0,
                y: 25,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-keuken'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-kantine-terras',
            sceneId: 'gkv-kantine',
            position: {
                x: 4,
                y: -7,
                z: 24
            },
            rotation: {
                x: 0,
                y: 90,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-terras'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-voorveld-terras',
            sceneId: 'gkv-voorveld',
            position: {
                x: -21,
                y: 3,
                z: 17.5
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
                        navigateToSceneId: 'gkv-terras'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-voorveld-kleedkamer',
            sceneId: 'gkv-voorveld',
            position: {
                x: -22,
                y: 1.5,
                z: -21.5
            },
            rotation: {
                x: 0,
                y: -45,
                z: 0
            },
            label: {
                text: 'De kleedkamers'
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-kleedkamer'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-voorveld-kunstgrasveld',
            sceneId: 'gkv-voorveld',
            position: {
                x: 34,
                y: 0,
                z: 0
            },
            rotation: {
                x: 0,
                y: 180,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-kunstgrasveld'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-kunstgrasveld-achterveld',
            sceneId: 'gkv-kunstgrasveld',
            position: {
                x: 30,
                y: 0,
                z: -2.4
            },
            rotation: {
                x: 0,
                y: 185,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-achterveld'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-kunstgrasveld-voorveld',
            sceneId: 'gkv-kunstgrasveld',
            position: {
                x: -28,
                y: 1,
                z: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-voorveld'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-achterveld-kunstgrasveld',
            sceneId: 'gkv-achterveld',
            position: {
                x: -29,
                y: 1,
                z: -2.5
            },
            rotation: {
                x: 0,
                y: -7,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-kunstgrasveld'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-keuken-kantine',
            sceneId: 'gkv-keuken',
            position: {
                x: 23.5,
                y: -1.7,
                z: 2.8
            },
            rotation: {
                x: 0,
                y: 180,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-kantine'
                    }
                }
            ]
        }),
        new HyperlinkObject({
            _id: 'gkv-kleedkamer-voorveld',
            sceneId: 'gkv-kleedkamer',
            position: {
                x: 7.5,
                y: 0.5,
                z: 2.8
            },
            rotation: {
                x: 0,
                y: 152,
                z: 0
            },
            onClickEvents: [
                {
                    type: ViewerEvent.__types.HYPERLINK,
                    data: {
                        navigateToSceneId: 'gkv-voorveld'
                    }
                }
            ]
        })
    ]
);
