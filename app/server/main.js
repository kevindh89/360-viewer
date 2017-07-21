import { Meteor } from 'meteor/meteor';
import { Logger } from 'meteor/ostrio:logger';
import winston from 'winston';

import './tests/testdata/_init.js';

// Testdata should be imported to activate it
import './tests/testdata/clients.js';
import './tests/testdata/scenes.js';
import './tests/testdata/accounts.js';
import './tests/testdata/hyperlinkObjects.js';

require('winston-loggly-bulk');

Meteor.startup(() => {
    // code to run on server at startup
    TestData.clearDatabase();

    _.each(TestData.data, testData => {
        _.each(testData.data, document => {
            // console.log('insert', JSON.stringify(document));
            if (testData.collection === Accounts) {
                testData.collection.createUser(document);
                return;
            }

            testData.collection.insert(document);
        });
    });

    if (Meteor.settings.private !== undefined && Meteor.settings.private.loggly !== undefined) {
        const log = new Logger();

        const emitter = (level, message, data) => {
            winston.log('error', {
                message,
                data: {
                    file: `view-source:${data.file}`,
                    line: data.onLine,
                    stack: data.stack
                }
            });
        };

        const init = () => {
            winston.remove(winston.transports.Console);
            winston.add(winston.transports.Loggly, {
                token: Meteor.settings.private.loggly.token,
                subdomain: 'vensterworks',
                tags: [Meteor.settings.private.loggly.tag],
                json: true
            });
        };

        log.add('LogglyAdapter', emitter, init, false, false);
        log.rule('LogglyAdapter', {
            enable: true,
            filter: ['ERROR', 'FATAL'],
            client: false,
            server: false
        });
    }
});
