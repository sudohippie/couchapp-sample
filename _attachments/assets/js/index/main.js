/**
 * Raghav Sidhanti
 * 2/4/15
 */
require(['../common-main'], function (Common) {
    require(['index/router'], function (Router) {
        app.addRegions({
            mainContainer: '#main-container'
        });

        app.addInitializer(function (options) {
           new Router();
        });

        app.start();
    });
});

