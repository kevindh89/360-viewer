import { Meteor } from 'meteor/meteor';

import './tests/testdata/_init.js';

// Testdata should be imported to activate it
import './tests/testdata/clients.js';
import './tests/testdata/scenes.js';
import './tests/testdata/accounts.js';

Meteor.startup(() => {
    // code to run on server at startup
    TestData.clearDatabase();

    _.each(TestData.data, testData => {
        console.log('init test data');
        _.each(testData.data, document => {
            console.log('insert', JSON.stringify(document));
            if (testData.collection === Accounts) {
                testData.collection.createUser(document);
                return;
            }

            testData.collection.insert(document);
        });
    });
});
