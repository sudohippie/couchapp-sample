/**
 * Raghav Sidhanti
 * 2/4/15
 */
require(['db']);

define(['backbone', 'marionette'], function (Backbone, Marionette) {
    'use strict';

    require(['bootstrap']);

    var Obj = {};

    var app = new Marionette.Application();

    app.on('start', function (options) {
        Backbone.history.start();
    })

    Obj.app = window.app = app;

    return Obj;
});
