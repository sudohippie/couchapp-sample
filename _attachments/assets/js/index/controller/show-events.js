/**
 * Raghav Sidhanti
 * 2/9/15
 */

define(['index/model', 'index/view/event-layout', 'index/view/event-table'], function (Model, EventLayoutView, EventTableView) {
    'use strict';

    return function () {
        //  render the layout
        var eventLayoutView = new EventLayoutView();
        eventLayoutView.render();

        // create instance of the view
        var eventTableView = new EventTableView({
            collection: new Model.EventList([
                {id: 1, name: 'event 1', createDate: '2015-02-09 16:33:10'},
                {id: 2, name: 'event 2', createDate: '2015-02-09 16:41:22'},
                {id: 3, name: 'event 3', createDate: '2015-02-09 17:20:15'},
                {id: 4, name: 'event 4', createDate: '2015-02-09 17:25:50'}
            ])
        });

        // render it
        eventLayoutView.getRegion('events').show(eventTableView);
    };
});
