/**
 * TestData is used for testing and development purposes.
 * To add a collection to the TestData you'll need to:
 *  - use the TestData.register function
 *  - add the testdata file to the imports in app/server/main.js
 *
 * @type {{data: Array, register: ((collection, data)), clearDatabase: (())}}
 */

TestData = {
    data: [],

    register(collection, data) {
        TestData.data.push({
            collection,
            data
        });
    },

    clearDatabase() {
        _.each(TestData.data, testData => {
            if (testData.collection === Accounts) {
                Meteor.users.remove({});
                return;
            }

            testData.collection.remove({});
        });
    }
};
