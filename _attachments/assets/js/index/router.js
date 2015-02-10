/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(['marionette', './controller/handler'], function (Marionette, Controller) {
    'use strict'

    var Router = Marionette.AppRouter.extend({
        controller: Controller,
        appRoutes: {
            'buttonA': 'showEvents'
        }
    });

    return Router;
});
