const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input=(result.input);"27,10"
let numbers=input.split(',');['27','10']
let m=parseInt(numbers[0]);"27"
let n=parseInt(numbers[1]);"10"

let sum=m/n;

console.log(sum);
  
});
