/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(['marionette', 'index/controller/show-events'], function (Marionette, ShowEventsController) {

    var Controller = {
        showEvents: ShowEventsController
    };

    var Router = Marionette.AppRouter.extend({
        controller: Controller,
        appRoutes: {
            'buttonA': 'showEvents'
        }
    });

    return Router;
});
