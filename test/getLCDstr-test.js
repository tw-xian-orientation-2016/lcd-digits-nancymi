/**
 * Created by nancymi on 16/3/2.
 */
describe('getLCDStr(): get LCD string', function() {
   it('give a numberLCD:object list then print a numberLCDStr:string', function() {
       var input = [new numberLCD('._.', '|_|', '..|'),
           new numberLCD('...', '..|', '..|'),
           new numberLCD('._.', '|.|', '|_|')];

       var output = '._. ... ._.\n|_| ..| |.|\n..| ..| |_|';

       expect(getLCDStr(input)).toEqual(output);
   })
});