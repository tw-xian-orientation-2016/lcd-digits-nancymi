/**
 * Created by nancymi on 16/3/2.
 */
function printLCD(number) {
    var numberList = divide(number);
    var numberLCDList = translate(numberList, loadLCDResource);
    var numberLCDStr = getLCDStr(numberLCDList);

    return numberLCDStr;
}

function divide(number) {
    var numberList = [];
    numberStrList = number.split('');
    numberStrList.forEach(function(numberStr) {
        numberList.push(parseInt(numberStr));
    });
    return numberList;
}

function translate(numberList, loadLCDResource) {
    var numberLCDList = [];
    var numberLCDs = loadLCDResource();
    numberList.forEach(function(number) {
        numberLCDList.push(numberLCDs[number])
    });
    return numberLCDList;
}

function getLCDStr(numberLCDList) {
    var numberLEDStrList = [];

    for (var i = 0; i < 3; i ++) {
        var numberLEDLineStrList = [];
        for (var j = 0; j < numberLCDList.length; j ++) {
            numberLEDLineStrList.push(numberLCDList[j].line[i]);
        }
        var numberLEDLineStr = numberLEDLineStrList.join(' ');
        numberLEDStrList.push(numberLEDLineStr);
    }

    var numberLEDStr = numberLEDStrList.join('\n');
    return numberLEDStr;
}
