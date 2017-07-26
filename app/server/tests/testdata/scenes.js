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
                    file: '/360-photos/vensterworks/hall.JPG',
                    previewFile: '/360-photos/vensterworks/hall.JPG',
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
                    file: '/360-photos/vensterworks/kitchen.JPG',
                    previewFile: '/360-photos/vensterworks/kitchen.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'livingroom',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/vensterworks/livingroom.JPG',
                    previewFile: '/360-photos/vensterworks/livingroom.JPG'
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
                    previewFile: '/360-photos/delft/1.JPG',
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
        }),

        // GKV
        new Scene({
            _id: 'gkv-bezuidenhoutseweg',
            clientId: 'gkv',
            initialScene: true,
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/bezuidenhoutseweg.JPG',
                    previewFile: '/360-photos/gkv/bezuidenhoutseweg.JPG',
                    rotation: {
                        x: 0,
                        y: 0,
                        z: -3.5
                    }
                }
            ]
        }),
        new Scene({
            _id: 'gkv-entree',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/entree.JPG',
                    previewFile: '/360-photos/gkv/entree.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-terras',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/terras.JPG',
                    previewFile: '/360-photos/gkv/terras.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-kantine',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/kantine.JPG',
                    previewFile: '/360-photos/gkv/kantine.JPG',
                    rotation: {
                        x: -4.3,
                        y: 0,
                        z: -0.7
                    }
                }
            ]
        }),
        new Scene({
            _id: 'gkv-keuken',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/keuken.JPG',
                    previewFile: '/360-photos/gkv/keuken.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-voorveld',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/voorveld.JPG',
                    previewFile: '/360-photos/gkv/voorveld.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'gkv-kleedkamer',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/kleedkamer.JPG',
                    previewFile: '/360-photos/gkv/kleedkamer.JPG',
                    rotation: {
                        x: -3.5,
                        y: 0,
                        z: -4.5
                    }
                }
            ]
        }),
        new Scene({
            _id: 'gkv-kunstgrasveld',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/kunstgrasveld.JPG',
                    previewFile: '/360-photos/gkv/kunstgrasveld.JPG',
                    rotation: {
                        x: -0.7,
                        y: 0,
                        z: -1.7
                    }
                }
            ]
        }),
        new Scene({
            _id: 'gkv-achterveld',
            clientId: 'gkv',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: '/360-photos/gkv/achterveld.JPG',
                    previewFile: '/360-photos/gkv/achterveld.JPG',
                    rotation: {
                        x: -3.5,
                        y: 0,
                        z: -3.3
                    }
                }
            ]
        })
    ]
);
