import './vrModeInstructions.styl';
import './vrModeInstructions.html';
import './googleAnalyticsTracking.js';

Template.vrModeInstructions.events({
    'click #vr-mode-explanation-button': () => {
        GoogleAnalyticsTracking.trackEvent('Button', 'click', 'VR mode: View instructions');
    },

    'click #vr-mode-start-button': () => {
        GoogleAnalyticsTracking.trackEvent('Button', 'click', 'VR mode: Start');
    },

    'click #vr-mode-back-button': () => {
        GoogleAnalyticsTracking.trackEvent('Button', 'click', 'VR mode: Back');
    }
});
