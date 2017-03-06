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
                x: 10,
                y: 3.50,
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
        })
    ]
);
