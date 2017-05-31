/**
 * Created by kevindeheer on 26/02/2017.
 */

TestData.register(
    Scenes,
    [
        new Scene({
            _id: 'hall',
            clientId: 'test',
            initialScene: true,
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/hall.JPG',
                    previewFile: '/360-photos/hall.JPG',
                    rotation: 90
                }
            ]
        }),
        new Scene({
            _id: 'kitchen',
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
            _id: 'livingroom',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/livingroom.JPG',
                    previewFile: '/360-photos/livingroom.JPG'
                }
            ]
        }),

        // Delft
        new Scene({
            _id: 'delft1',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/delft/1.JPG',
                    previewFile: '/360-photos/delft/1.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft2',
            clientId: 'delft',
            initialScene: true,
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/delft/2.JPG',
                    previewFile: '/360-photos/delft/2.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft3',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/delft/3.JPG',
                    previewFile: '/360-photos/delft/3.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft4',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/delft/4.JPG',
                    previewFile: '/360-photos/delft/4.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft12',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/delft/12.JPG',
                    previewFile: '/360-photos/delft/12.JPG'
                }
            ]
        })
    ]
);
