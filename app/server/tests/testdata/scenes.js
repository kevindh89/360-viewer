/**
 * Created by kevindeheer on 26/02/2017.
 */

TestData.register(
    Scenes,
    [
        new Scene({
            _id: 'test',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/hall.JPG',
                    previewFile: '/360-photos/hall.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'test2',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/kitchen.JPG',
                    previewFile: '/360-photos/kitchen.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'test3',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/livingroom.JPG',
                    previewFile: '/360-photos/livingroom.JPG'
                }
            ]
        })
    ]
);
