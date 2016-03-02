/**
 * Created by nancymi on 16/3/2.
 */
describe('printLCD(): a number print a LCD string', function() {
   it('given a number:string then print LCD:string', function() {
       var output = '._. ... ._.\n|_| ..| |.|\n..| ..| |_|';
       expect(printLCD('910')).toEqual(output);
   });
});