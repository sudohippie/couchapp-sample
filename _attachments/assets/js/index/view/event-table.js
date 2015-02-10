/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(['marionette', 'index/template'], function (Marionette, Tpl) {
    'use strict';

    // define item view
    var EventTableRowView = Marionette.ItemView.extend({
        template: Tpl.table.eventRow,
        tagName: 'tr'
    });

    // define composite view
    var EventTableView = Marionette.CompositeView.extend({
        template: Tpl.table.event,
        childView: EventTableRowView,
        childViewContainer: 'tbody'
    });

    return EventTableView;
});
