const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let input= result.input; // "6,3"
    let numbers=input.split(',');
    let a=6
    let b=3
    let s=parseInt(numbers[0]);  //6
    let v=parseInt(numbers[1]); //3
    let sam=a*b**2
    let sum=b**3
  console.log(sam);
    console.log(sum);
});
