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
          if(gr2.sys_id==querySysID){
            return gr2;  
          }
        }
      }
    }catch(error){}
  }
  return null;
}


//temp
/*
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
          if(gr2.sys_id==querySysID){
            return gr2;  
          }
        }
      }
    }catch(error){}
  }
  return null;
}

SearchSysIDRecord('b89096930b211200b0b02c6317673a2c');
*/

//var gr = new GlideRecord('sc_req_item');
//_ = gr.get('number', 'RITM0755298');
//gr.toString();
//var output = gr.number.toString()+'\r\n';
//output += gr['number'].toString();
//output;
/*
function SearchAllByLabel(recordLabel, labelValue){
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
        var gr2 = new GlideRecord('sc_req_item');//gr.name.toString());
        if(gr2.get(labelValue, recordLabel)){
          if(gr2[labelValue].toString()==recordLabel.toString()){
            return gr2;  
          }
        }
      }
    }catch(error){}
  }
  return null;
}

SearchAllByLabel('number', 'RITM0755298');
*/
