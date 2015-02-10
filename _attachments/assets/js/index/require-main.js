/**
 * Raghav Sidhanti
 * 2/4/15
 */
require(['../common-require-main'], function (Common) {
    'use strict';

    var app = Common.app;

    require(['router'], function (Router) {

        app.on('before:start', function (options) {
           new Router();
        });

        app.start();
    });
});

