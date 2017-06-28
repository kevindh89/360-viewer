import { Template } from 'meteor/templating';

import '../../../imports/client/components/tour/hyperlinkObject.html';
import '../../../imports/client/components/tour/hyperlinkObject.js';
import '../../../collections/models/hyperlinkObject.js';

Template.hyperlinkObject.helpers(
    _.extend(
        MeteorContextInjector.wrap(HyperlinkObjectTemplate.hyperlinkObjectHelpers, HyperlinkObject),
        HyperlinkObjectTemplate.helpers
    )
);
