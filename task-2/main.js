const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    var input= result.input; // "6,3"
  var numbers=input.split(',');
  var s=parseInt(numbers[0]);  //6
  var v=parseInt(numbers[1]); //3
  var sum=s*v**2
  var sam=v**3
  console.log(sum,sam);
});
