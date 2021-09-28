(function execute(inputs, outputs) {
	var gr = new GlideRecord(inputs.Table);
	gr.get(inputs.SysID);

	outputs.link = new GlideSubstituteURL().generateURL(gr, "");
})(inputs, outputs);
