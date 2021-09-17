(function execute(inputs, outputs) {
    var ritm = GlideRecord('sc_req_item');
    ritm.get(inputs.ritmSysID);
    var stringArray1 = [];
    for (var i = 0; i < ritm.variable_pool.chooseboxes.getRowCount(); i++) {
        stringArray1[i] = ritm.variable_pool.chooseboxes[i].chooseboxReturn + '-' + ritm.variable_pool.chooseboxes[i].howMany;
    }
    outputs.sysida = stringArray1;
})(inputs, outputs);

/*(function execute(inputs, outputs) {
    var ritm = GlideRecord('sc_req_item');
    ritm.get(inputs.ritmSysID);

    outputs.answeredquestions = '';
    var count = 1;
    var ritmVars = ritm.variable_pool;
    for (var x in ritmVars) {
        if (x == 'chooseboxes') {
            try {
                outputs.answeredquestions += 'ritm.variable_pool.chooseboxes: ' + ritm.variable_pool.chooseboxes + '\r\n\r\n';
            } catch (error) { outputs.answeredquestions += 'bad line 1 \r\n\r\n' }
            try {
                outputs.answeredquestions += 'ritm.variable_pool.chooseboxes[0]: ' + ritm.variable_pool.chooseboxes[0] + '\r\n\r\n';
            } catch (error) { outputs.answeredquestions += 'bad line 2 \r\n\r\n' }
            try {
                outputs.answeredquestions += 'ritm.variable_pool.chooseboxes[0].chooseboxReturn: ' + ritm.variable_pool.chooseboxes[0].chooseboxReturn + '\r\n\r\n';
            } catch (error) { outputs.answeredquestions += 'bad line 3 \r\n\r\n' }
        }
    }
    outputs.answeredquestions += 'For Loop for the chooseboxes:\r\n\r\n';
    outputs.answeredquestions += 'ritm.variable_pool.chooseboxes.getRowCount(): ' + ritm.variable_pool.chooseboxes.getRowCount() + '\r\n\r\n';

    var outputArray = [];
    var stringArray1 = [];
    for (var i = 0; i < ritm.variable_pool.chooseboxes.getRowCount(); i++) {
        var chooseboxOutObject = {
            chooseboxReturnOut: ritm.variable_pool.chooseboxes[i].chooseboxReturn,
            howManyOut: ritm.variable_pool.chooseboxes[i].howMany
        };

        outputs.answeredquestions += 'ritm.variable_pool.chooseboxes[i]: ' + ritm.variable_pool.chooseboxes[i] + ' ritm.variable_pool.chooseboxes[i].chooseboxReturn: ' + ritm.variable_pool.chooseboxes[i].chooseboxReturn + ' ritm.variable_pool.chooseboxes[i].howMany : ' + ritm.variable_pool.chooseboxes[i].howMany + '\r\n\r\n';

        outputs.answeredquestions += 'chooseboxOutObject: ' + chooseboxOutObject + ' chooseboxOutObject.chooseboxReturnOut: ' + chooseboxOutObject.chooseboxReturnOut + ' chooseboxOutObject.howManyOut: ' + chooseboxOutObject.howManyOut + '\r\n\r\n';

        outputArray[i] = chooseboxOutObject;
        stringArray1[i] = ritm.variable_pool.chooseboxes[i].chooseboxReturn + '-' + ritm.variable_pool.chooseboxes[i].howMany;
    }
    for (var i = 0; i < ritm.variable_pool.chooseboxes.getRowCount(); i++) {
        outputs.answeredquestions += 'Object: ' + outputArray[i] + ' chooseboxReturnOut: ' + outputArray[i].chooseboxReturnOut + ' howManyOut: ' + outputArray[i].howManyOut + '\r\n\r\n';
    }
    outputs.chooseboxOut = outputArray;
    outputs.sysida = stringArray1;

    for (var i = 0; i < outputs.chooseboxOut.length; i++) {
        outputs.answeredquestions += 'Object: ' + outputs.chooseboxOut[i] + ' chooseboxReturnOut: ' + outputs.chooseboxOut[i].chooseboxReturnOut + ' howManyOut: ' + outputs.chooseboxOut[i].howManyOut + '\r\n\r\n';
    }

})(inputs, outputs);
*/
