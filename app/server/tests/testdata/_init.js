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
