/**
 * Raghav Sidhanti
 * 2/10/15
 */
function(doc) {
    if (doc.collection) {
        emit(doc.collection, doc);
    }
};