/**
 * Raghav Sidhanti
 * 2/10/15
 */
define(['marionette', 'index/template'], function (Marionette, Tpl) {

    var MainLayoutView = Marionette.LayoutView.extend({
        el: '#main-container',
        template: Tpl.layout.event,
        regions: {
            events: '#events'
        }
    });

    return MainLayoutView;
});
