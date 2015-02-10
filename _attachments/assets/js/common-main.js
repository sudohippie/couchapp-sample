/**
 * Raghav Sidhanti
 * 2/4/15
 */

require.config({
    baseUrl: 'assets/js',
    paths: {
        $: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
        _: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        marionette: '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.3.1/backbone.marionette.min',
        text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text'
    },
    shim: {
        bootstrap: {
            deps: ['$']
        },
        backbone: {
            deps: ['$', '_']
        },
        marionette: {
            deps: ['backbone']
        }
    }
});

require(['bootstrap']);

define(['backbone', 'marionette'], function (Backbone, Marionette) {
    'use strict';

    var app = new Marionette.Application();

    app.on('start', function (options) {
        Backbone.history.start();
    })

    return window.app = app;

});