function SearchTextRecord(target, target2, start, end) {
    var output = "start" + '\r\n';
    var gr = new GlideRecord('sys_db_object');
    gr.addQuery('sys_update_nameISNOTEMPTY^sys_scope=global^name!=v_metadata_parent^name!=v_metadata_descendant');
    gr.query();
    var Indexer = 0;
    while (gr.next()) {
        if (++Indexer >= start && Indexer <= end) {
            var gr2 = new GlideRecord(gr.name.toString());
            gr2.addQuery('GOTO123TEXTQUERY321=' + target + '^sys_updated_on>javascript:gs.dateGenerate("2015-01-01","00:00:00")');
            gr2.query();
            while (gr2.next()) {
                Labels = Object.keys(gr2);
                for (var i = 0; i < Labels.length; i++) {
                    if (gr2[Labels[i]].toLowerCase().includes(target.toLowerCase())) {
                        if (gr2[Labels[i]].toLowerCase().includes(target2.toLowerCase())) {
                            output += 'On table: ' + gr.name.toString() + ' Record Sys ID: ' + gr2.sys_id + ' Label: ' + Labels[i] + ' Contains: "' + target + '" and "' + target2 + '"\r\n';
                        }
                    }
                }
            }
        }
    }
    return output;
}
