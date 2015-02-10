/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(['marionette', 'text!./html/event-table.html', 'text!./html/event-table-row.html'], function (Marionette, TableTpl, RowTpl) {
    'use strict';

    // define item view
    var EventTableRowView = Marionette.ItemView.extend({
        template: RowTpl,
        tagName: 'tr'
    });

    // define composite view
    var EventTableView = Marionette.CompositeView.extend({
        template: TableTpl,
        childView: EventTableRowView,
        childViewContainer: 'tbody'
    });

    return EventTableView;
});
