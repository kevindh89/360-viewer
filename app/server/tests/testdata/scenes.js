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
                    file: '/360-viewer/hall.JPG',
                    previewFile: '/360-viewer/hall.JPG',
                    rotation: {
                        x: 0,
                        y: 90,
                        z: 0
                    }
                }
            ]
        }),
        new Scene({
            _id: 'kitchen',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/kitchen.JPG',
                    previewFile: '/360-viewer/kitchen.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'livingroom',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/livingroom.JPG',
                    previewFile: '/360-viewer/livingroom.JPG'
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
                    file: '/360-viewer/1.JPG',
                    previewFile: '/360-viewer/1.JPG',
                    rotation: {
                        x: 0,
                        y: -45,
                        z: 0
                    }
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
                    file: '/360-viewer/2.JPG',
                    previewFile: '/360-viewer/2.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft3',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/3.JPG',
                    previewFile: '/360-viewer/3.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft4',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/4.JPG',
                    previewFile: '/360-viewer/4.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'delft12',
            clientId: 'delft',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/12.JPG',
                    previewFile: '/360-viewer/12.JPG'
                }
            ]
        }),

        // GKV
        new Scene({
            _id: 'gkv-bezuidenhoutseweg',
            clientId: 'gkv',
            initialScene: true,
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/bezuidenhoutseweg.JPG',
                    previewFile: '/360-viewer/bezuidenhoutseweg.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-entree',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/entree.JPG',
                    previewFile: '/360-viewer/entree.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-terras',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/terras.JPG',
                    previewFile: '/360-viewer/terras.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-kantine',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/kantine.JPG',
                    previewFile: '/360-viewer/kantine.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-keuken',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/keuken.JPG',
                    previewFile: '/360-viewer/keuken.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-voorveld',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/voorveld.JPG',
                    previewFile: '/360-viewer/voorveld.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-kleedkamer',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/kleedkamer.JPG',
                    previewFile: '/360-viewer/kleedkamer.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-kunstgrasveld',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/kunstgrasveld.JPG',
                    previewFile: '/360-viewer/kunstgrasveld.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-achterveld',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-viewer/achterveld.JPG',
                    previewFile: '/360-viewer/achterveld.JPG'
                }
            ]
        })
    ]
);
