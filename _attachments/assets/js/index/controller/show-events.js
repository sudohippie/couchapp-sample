/**
 * Raghav Sidhanti
 * 2/9/15
 */

define(['index/model', 'index/view/event-table'], function (Model, EventTableView) {
    return function () {
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
            app.mainContainer.show(eventTableView);
        };
});
