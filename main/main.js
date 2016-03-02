/**
 * Created by nancymi on 16/3/2.
 */
function getLCDStr(number) {
    var numberList = divide(number);
    var numberLCDList = translate(numberList, loadLCDResource);
    var numberLEDStr = getLEDStr(numberLCDList);
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

}
