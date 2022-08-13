const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 let input=result.input;
    let number=input.split(',');
    let m=parseInt(number[0]);
    let n=parseInt(number[1]);
    let res=parseInt(m/n);
    console.log(res);


  
});
