function getLabelList(table, hasNext) {
    var tableList = "";
    if (hasNext != false && hasNext) {
        hasNext = true;
    } else if (!hasNext && hasNext == false) {
        tableList = "^name=" + table;
    }
    var searchTable = table;
    while (hasNext) {
        var gr = new GlideRecord('sys_db_object');
        gr.addQuery('name=' + searchTable);
        tableList += ((tableList.length == 0) ? "^name=" : "^ORname=") + searchTable;
        gr.query();

        if (gr.next() && gr.super_class.name) {
            searchTable = gr.super_class.name;
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

getLabelList('wm_order');
