let date = new Date();
// console.log(date);

let day = date.getDate();
// console.log(day);
let month = date.getMonth() +1;
// console.log(month);
let year = date.getFullYear();
// console.log(year);

console.log(`${day}.${month}.${year}`);

// let current = document.getElementById('Current-1');
 document.getElementById('Current-1').innerHTML = (`${day}.${month}.${year}`);


 let submit = document.getElementById('Submit').onclick = function(){
    let input=document.getElementById('input').value;
    console.log('input',input);

    let inputarr = input.split(`-`);
    console.log('inputarr',inputarr);
   if(inputarr == 0){
      agedisplay.innerHTML = inputarr;
   }
    else{
      let age = '';
      let agedisplay = document.getElementById('age-display');
      age=year-inputarr[0];
      console.log('age',age);
      agedisplay.innerHTML=age;
   }
   console.log(input.value);
 }
 

