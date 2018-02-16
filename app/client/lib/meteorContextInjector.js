/**
 * This class can be used to wrap around Meteor helpers to make explicitly clear what type of context (this) a helper
 * is expecting.
 */
MeteorContextInjector = {
    wrap(helpers, contextClass) {
        const wrappedHelpers = {};
        _.each(helpers, (helperFunction, helper) => {
            wrappedHelpers[helper] = function () {
                if (this.constructor.name !== contextClass.name) {
                    throw new Error(`Incorrect context type for ${helper}. got ${this.constructor.name} where ${contextClass.name} expected`);
                }

                return helperFunction(this);
            };
        });
        return wrappedHelpers;
    }
};
