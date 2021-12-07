function SearchTextRecord(target, start, end) {
    var output = "start" + '\r\n';
    var gr = new GlideRecord('sys_db_object');
    gr.addQuery('sys_update_nameISNOTEMPTY^sys_scope=global^name!=v_metadata_parent^name!=v_metadata_descendant');
    gr.query();
    var test2 = 0;
    while (gr.next()) {
        if (++test2 >= start && test2 <= end) {
            //output += test2 + ' ' + gr.name.toString() + '\r\n';
            var gr2 = new GlideRecord(gr.name.toString());
            gr2.addQuery('GOTO123TEXTQUERY321=' + target);
            gr2.query();
            //if (gr2.next()) {
            while (gr2.next()) {
                output += test2 + ": " + gr.name.toString() + ' ' + gr2.sys_id + '\r\n';
            }
        }
    }
    return output;
}

SearchTextRecord('base64DecodeAsBytes' , 0, 6000);
//106
//v_metadata_parent
//5204
//v_metadata_descendant
