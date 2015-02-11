/**
 * Raghav Sidhanti
 * 2/9/15
 */

define(['model/event', 'view/event-layout', 'view/event-table'], function (EventModel, EventLayoutView, EventTableView) {
    'use strict';

    return function () {
        //  render the layout
        var eventLayoutView = new EventLayoutView();
        eventLayoutView.render();

        // model
        var motionList = new EventModel.MotionList();

        // create instance of the view
        var eventTableView = new EventTableView({
            collection: motionList
        });

        // render it
        eventLayoutView.getRegion('events').show(eventTableView);

        motionList.fetch();
    };
});
