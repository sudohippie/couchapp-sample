/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(function (require) {
    var Obj = {};

    Obj.table = {};
    Obj.table.event = require('text!index/html/event-table.html');
    Obj.table.eventRow = require('text!index/html/event-table-row.html');

    return Obj;
})
