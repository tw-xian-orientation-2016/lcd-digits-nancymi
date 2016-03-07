/**
 * Created by nancymi on 16/3/2.
 */
describe('getLEDStr(): get LED string', function() {
   it('give a numberLED:object list then print a numberLEDStr:string', function() {
       var input = [new numberLCD('._.', '|_|', '..|'),
           new numberLCD('...', '..|', '..|'),
           new numberLCD('._.', '|.|', '|_|')];

       var output = '._. ... ._.\n|_| ..| |.|\n..| ..| |_|';

       expect(getLEDStr(input)).toEqual(output);
   })
});