/**
 * Created by nancymi on 16/3/2.
 */
function getLCDStr(number) {
    var numberList = divide(number);
    var numberLCDList = translate(numberList, loadLCDResource);
    var numberLEDStr = getLEDStr(numberLCDList);

    return numberLEDStr;
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

function getLEDStr(numberLEDList) {
    var numberLEDStrList = [];
    var numberLEDLineStrList = [];
    for (var i = 0; i < numberLEDList.length; i ++) {
        numberLEDLineStrList.push(numberLEDList[i].firstLine)
    }
    var numberLEDLineStr = numberLEDLineStrList.join(' ');
    numberLEDStrList.push(numberLEDLineStr);

    var numberLEDLineStrList = [];
    for (var i = 0; i < numberLEDList.length; i ++) {
        numberLEDLineStrList.push(numberLEDList[i].secondLine)
    }
    var numberLEDLineStr = numberLEDLineStrList.join(' ');
    numberLEDStrList.push(numberLEDLineStr);

    var numberLEDLineStrList = [];
    for (var i = 0; i < numberLEDList.length; i ++) {
        numberLEDLineStrList.push(numberLEDList[i].thirdLine)
    }
    var numberLEDLineStr = numberLEDLineStrList.join(' ');
    numberLEDStrList.push(numberLEDLineStr);

    var numberLEDStr = numberLEDStrList.join('\n');
    return numberLEDStr;
}
