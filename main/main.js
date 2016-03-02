/**
 * Created by nancymi on 16/3/2.
 */
function getLEDStr(number) {
    var numberList = divide(number);
    var numberLEDList = translate(numberList, loadLCDResource);
    var numberLEDStr = getLEDStr(numberLEDList);
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

}

function getLEDStr(numberLEDList) {

}
