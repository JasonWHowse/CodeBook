var original = new GlideRecord('sc_req_item');
var newR = new GlideRecord('sc_req_item');

_ = original.get('sys_id','b4bc2ce31b7e7418da3b0e966e4bcb77');
_ = newR.get('sys_id', '0b19e17b1bbab818da3b0e966e4bcb90');

var differences = '';
var similarities = '';
var keylist = Object.keys(original);
for(var i = 0; i<keylist.length; i++){
 var theKey = keylist[i].toString();
  if(original[theKey].getDisplayValue() != newR[theKey].getDisplayValue()){
    differences += theKey+ ': ' + original[theKey].getDisplayValue() + ' ' + newR[theKey].getDisplayValue() +'\r\n';
  }else{
    similarities += theKey+ ': ' + original[theKey].getDisplayValue() +'\r\n';
  }
}
'Differences:\r\n' + differences + '\r\nSimilarities:\r\n'+similarities;
