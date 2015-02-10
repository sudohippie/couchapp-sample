/**
 * Raghav Sidhanti
 * 2/10/15
 */
define(['marionette', 'text!./html/event-layout.html'], function (Marionette, layoutTpl) {
    'use strict';

    var LayoutView = Marionette.LayoutView.extend({
        el: '#main-container',
        template: layoutTpl,
        regions: {
            events: '#events'
        }
    });

    return LayoutView;
});
