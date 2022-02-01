function getLabelList(table) {
    var tableList = "";
    var searchTable = table;
    var hasNext = true;
    while (hasNext) {
        var gr = new GlideRecord('sys_db_object');
        gr .addQuery('name=' + searchTable);
        tableList += ((tableList.length == 0) ? "^name=" : "^ORname=") + searchTable;
        gr.query();

        if (gr.next()) {
            if (gr.super_class.name) {
                searchTable = gr.super_class.name;
            } else {
                hasNext = false;
            }
        } else {
            hasNext = false;
        }
    }

    var gr = new GlideRecord(table);
    gr.query();
    if (gr.next()) {
        var keyList = Object.keys(gr);
        var output = "Labels and Elements for " + table + "\r\n";
        for (var i = 0; i < keyList.length; i++) {
            var gr2 = new GlideRecord('sys_documentation');
            gr2.addQuery('element=' + keyList[i] + tableList);
            gr2.query();
            if (gr2.next()) {
                output += "Label: " + gr2.label + " Element: " + keyList[i] + '\r\n';
            }
        }
        return output;
    }
}
