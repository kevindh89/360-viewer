import { Template } from 'meteor/templating';

import '../../../imports/client/components/tour/hyperlinkObject.html';
import '../../../imports/client/components/tour/hyperlinkObject.js';
import '../../../collections/models/hyperlinkObject.js';

Template.hyperlinkObject.helpers(
    MeteorContextInjector.wrap(HyperlinkObjectTemplate.hyperlinkObject_helpers, HyperlinkObject)
);
