/**
 * Raghav Sidhanti
 * 2/10/15
 */
define(['backbone'], function (Backbone) {
    'use strict';

    var Obj = {};

    Obj.Motion = Backbone.Model.extend({
        defaults: {
            name: null,
            createDate: null
        }
    });

    Obj.MotionList = Backbone.Collection.extend({
        model: Obj.Motion
    });

    return Obj;
});
