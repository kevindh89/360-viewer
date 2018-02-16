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
        }),
        new Client({
            _id: 'gkv',
            username: 'gkv',
            slug: 'gkv',
            logo: {
                file: '/images/gkv-logo.png',
                href: 'https://www.gkvdenhaag.nl'
            },
            tripodStamp: {
                image: '/images/gkv-tripod-stamp.png'
            },
            customCss: 'button.client-logo { min-width: 50px !important; min-height: 39px !important; }',
            googleAnalyticsTrackingId: 'UA-83007301-2'
        })
    ]
);
