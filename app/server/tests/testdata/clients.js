TestData.register(
    Clients,
    [
        new Client({
            _id: 'test',
            username: 'vensterworks',
            slug: 'v3n',
            logo: {
                file: '/images/logo-128x128.png',
                href: 'https://www.vensterworks.com'
            }
        }),
        new Client({
            _id: 'delft',
            username: 'delft',
            slug: 'delft'
        })
    ]
);
