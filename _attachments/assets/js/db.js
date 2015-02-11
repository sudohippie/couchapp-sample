/**
 * Raghav Sidhanti
 * 2/10/15
 */
define(['backbone', 'couchdb_conn'], function (Backbone) {
    Backbone.couch_connector.config.db_name = 'sample-couchdb';
    Backbone.couch_connector.config.ddoc_name = 'couchapp-sample'
    Backbone.couch_connector.config.global_changes = false;

    return {};
});
