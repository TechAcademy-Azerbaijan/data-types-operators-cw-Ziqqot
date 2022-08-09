const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
let i=parseInt(result.input)
let n=parseInt(i**3);
console.log(n);
});

