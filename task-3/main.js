const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let i=parseInt(result.input);
let a=(i**10);
console.log(a);
});
