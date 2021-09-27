function SearchSysIDRecord(querySysID){
  var gr = new GlideRecord('sys_db_object');
  gr.addQuery('sys_update_nameISNOTEMPTY');
  gr.query();
  while(gr.next()) {
    try{
      if(
        gr.name.toString() != '' &&
        gr.name.toString() != 'sn_m2m_note_template_for_table' &&
        gr.name.toString() != 'sn_templated_snip_note_template' &&
        gr.name.toString() != 'sys_kmf_instance_key'
      ){
        var gr2 = new GlideRecord(gr.name.toString());
        if(gr2.get('sys_id', querySysID)){
          gs.log('jh21341'+ln15);
          return gr2;  
        }
      }
    }catch(error){}
  }
  return null;
}
