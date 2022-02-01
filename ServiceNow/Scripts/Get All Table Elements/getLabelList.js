function getLabelList(table) {
    var gr = new GlideRecord(table);
    gr.query();
    if (gr.next()) {
        var keyList = Object.keys(gr);
        var output = "Labels and Elements for " + table + "\r\n";
        for (var i = 0; i < keyList.length; i++) {
            var gr2 = new GlideRecord('sys_documentation');
            gr2.addQuery('element=' + keyList[i] + '^name=' + table);
            gr2.query();
            if (gr2.next()) {
                output += "Label: " + gr2.label + " Element: " + keyList[i] + '\r\n';
            }
        }
        return output;
    }
}
