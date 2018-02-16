import { Logger } from 'meteor/ostrio:logger';

Meteor.startup(() => {
    if (Meteor.settings.public !== undefined && Meteor.settings.public.logglyEnabled === true) {
        const log = new Logger();

        log.add('LogglyAdapter', () => {}, () => {}, false, false);
        log.rule('LogglyAdapter', {
            enable: true,
            filter: ['ERROR', 'FATAL'],
            client: true,
            server: true
        });

        const _GlobalErrorHandler = window.onerror;
        window.onerror = (msg, url, line, columnNo, error) => {
            log.error(msg, { file: url, onLine: line, stack: error.stack });
            if (_GlobalErrorHandler) {
                _GlobalErrorHandler.apply(this, arguments);
            }
        };
    }
});
