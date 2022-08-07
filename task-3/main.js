const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let input=(result.input);"2,10"
let numbers=input.split(',');['2','10']

let a=parseInt(numbers[0]);"2"
let n=parseInt(numbers[1]);"10"

let sum=a**n;

console.log(sum);
  
});
