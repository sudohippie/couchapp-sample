/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(['backbone'], function (Backbone) {
    var Obj = {};

    Obj.Event = Backbone.Model.extend({
        defaults: {
            name: null,
            createDate: null
        }
    });

    Obj.EventList = Backbone.Collection.extend({
        model: Obj.Event
    });

    return Obj;
});
