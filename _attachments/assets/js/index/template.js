/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(function (require) {
    var Obj = {};

    Obj.table = {};
    Obj.table.event = require('text!index/view/html/event-table.html');
    Obj.table.eventRow = require('text!index/view/html/event-table-row.html');

    return Obj;
})
