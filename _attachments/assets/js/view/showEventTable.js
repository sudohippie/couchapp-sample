/**
 * Raghav Sidhanti
 * 2/5/15
 */
define(['marionette', 'template/table'], function (Marionette, TableTpl) {
    var obj = {};

    obj.View = Marionette.CompositeView.extend({
        template: TableTpl.eventTable,
        childView: Marionette.ItemView.extend({
          template: TableTpl.eventTableRow
        }),
        childViewContainer: 'tbody'
    });

    return obj;
});
