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
                    file: 'R0010198.JPG',
                    previewFile: 'R0010198.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'test2',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: 'R0010237.JPG',
                    previewFile: 'R0010237.JPG'
                }
            ]
        }),
        new Scene({
            _id: 'test3',
            clientId: 'test',
            properties: [
                {
                    type: Scene.__properties.SKY,
                    file: 'R0010471.JPG',
                    previewFile: 'R0010471.JPG'
                }
            ]
        })
    ]
);
