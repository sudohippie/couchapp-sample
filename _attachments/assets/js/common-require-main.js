/**
 * Raghav Sidhanti
 * 2/4/15
 */
require(['backbone', 'marionette'], function (Backbone, Marionette) {
    'use strict';

    require(['bootstrap']);

    var app = new Marionette.Application();

    app.on('start', function (options) {
        Backbone.history.start();
    })

    window.app = app;
});
