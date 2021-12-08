function SearchTextRecord(target, target2, start, end) {
    var output = "start" + '\r\n';
    var output2 = "start 2 \r\n";
    var output3 = "start 3 \r\n";
    var gr = new GlideRecord('sys_db_object');
    gr.addQuery('sys_update_nameISNOTEMPTY^sys_scope=global^name!=v_metadata_parent^name!=v_metadata_descendant');
    gr.query();
    var test2 = 0;
    while (gr.next()) {
        if (++test2 >= start && test2 <= end) {
            var gr2 = new GlideRecord(gr.name.toString());
            gr2.addQuery('GOTO123TEXTQUERY321=' + target + '^sys_updated_on>javascript:gs.dateGenerate("2015-01-01","00:00:00")');
            gr2.query();
            while (gr2.next()) {
                output += test2 + ": " + gr.name.toString() + ' ' + gr2.sys_id + '\r\n';
                Labels = Object.keys(gr2);
                for (var i = 0; i < Labels.length; i++) {
                    if (gr2[Labels[i]].toLowerCase().includes(target.toLowerCase())) {
                        output2 += 'On table: ' + gr.name.toString() + ' Record Sys ID: ' + gr2.sys_id + ' Label: ' + Labels[i] + 'Contains: ' + target + '\r\n';
                        if (gr2[Labels[i]].toLowerCase().includes(target2.toLowerCase())) {
                            output3 += 'On table: ' + gr.name.toString() + ' Record Sys ID: ' + gr2.sys_id + ' Label: ' + Labels[i] + 'Contains: "' + target + '" and "' + target2 +'"\r\n';
                        }
                    }
                }
            }
        }
    }
    return output + '\r\n' + output2 + '\r\n' + output3;
}
