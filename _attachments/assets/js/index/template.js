/**
 * Raghav Sidhanti
 * 2/9/15
 */
define(['text!index/html/event-table.html', 'text!index/html/event-table-row.html'], function (EventTable, EventTableRow) {
    var Obj = {};

    Obj.table = {};
    Obj.table.event = EventTable;
    Obj.table.eventRow = EventTableRow;

    return Obj;
})
