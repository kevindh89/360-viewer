import { Template } from 'meteor/templating';

import '../../../imports/client/pages/main/main.html';
import '../../../imports/client/pages/main/main.js';

require('aframe-animation-component');

Template.main.onCreated(MainTemplate.onCreated);
Template.main.onRendered(MainTemplate.onRendered);
Template.main.helpers(
    _.extend(
        MeteorContextInjector.wrap(MainTemplate.hyperlinkObject_helpers, HyperlinkObject),
        MainTemplate.helpers
    )
);
