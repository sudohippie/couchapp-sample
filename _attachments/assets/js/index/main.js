/**
 * Raghav Sidhanti
 * 2/4/15
 */
require(['require', '../common-main'], function (require) {
    'use strict';

    require(['index/router'], function (Router) {

        app.on('before:start', function (options) {
           new Router();
        });

        app.start();
    });
});

