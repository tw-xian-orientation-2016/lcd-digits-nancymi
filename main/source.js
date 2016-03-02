/**
 * Created by nancymi on 16/3/2.
 *
 * ._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
 * |.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
 * |_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
 *
 */

function numberLCD(firstLine, secondLine, thirdLine) {
    this.line = [firstLine, secondLine, thirdLine];
}

function loadLCDResource() {
    var numberLCDList = [
        new numberLCD('._.', '|.|', '|_|'),
        new numberLCD('...', '..|', '..|'),
        new numberLCD('._.', '._|', '|_.'),
        new numberLCD('._.', '._|', '._|'),
        new numberLCD('...', '|_|', '..|'),
        new numberLCD('._.', '|_.', '._|'),
        new numberLCD('._.', '|_.', '|_|'),
        new numberLCD('._.', '..|', '..|'),
        new numberLCD('._.', '|_|', '|_|'),
        new numberLCD('._.', '|_|', '..|')
    ];
    return numberLCDList;
}