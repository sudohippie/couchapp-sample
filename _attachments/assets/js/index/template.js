/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(function (require) {
    'use strict';

    var Obj = {};

    Obj.table = {};
    Obj.table.event = require('text!index/view/html/event-table.html');
    Obj.table.eventRow = require('text!index/view/html/event-table-row.html');

    Obj.layout = {};
    Obj.layout.event = require('text!index/view/html/event-layout.html');

    return Obj;
})
