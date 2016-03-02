/**
 * Created by nancymi on 16/3/2.
 */
describe('translate(): traslate a number list to a number lcd list', function() {
   it('when give a number:int list then print a numberLCD:object list', function() {
       var input = [9, 1, 0];
       var output = [new numberLCD('._.', '|_|', '..|'),
           new numberLCD('...', '..|', '..|'),
           new numberLCD('._.', '|.|', '|_|')];

       expect(translate(input, loadLCDResource)).toEqual(output);
   }) ;
});