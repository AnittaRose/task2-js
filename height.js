let from = document.getElementById('submit-1');
let to = document.getElementById('submit-2');
document.getElementById('sub').onclick = function () {
    let num = document.getElementById('number').value;
    let select = document.getElementById('selects-1').value;
    let sel = document.getElementById('selects-2').value;
    from.innerHTML=`Value: ${num}`;
    if (select === "feet" && sel === "meter") {
        num = num * 0.3048;
        console.log(num);
    } else if (select === "meter" && sel === "feet") {
        num = num / 0.3048;
        console.log(num);
    }



    if(select === "feet" && sel === "cm") {
        num=num /0.032808
        console.log(num);
    }else if (select === "cm" && sel === "feet"){
        num=num *0.032808;
        console.log(num);
    }




    if(select === "feet" && sel === "killometers") {
        num=num /3280.8;
        console.log(num);
    }else if (select === "killometers" && sel === "feet"){
        num=num *3280.8
        console.log(num);
    }





    if(select === "inches" && sel === "cm") {
        num=num /0.39370;
        console.log(num);
    }else if (select === "cm" && sel === "inches"){
        num=num*0.39370;
        console.log(num);
    }




    if(select === "yards" && sel === "miles") {
        num=num*0.00056818;
        console.log(num);
    }else if (select === "miles" && sel === "yards"){
        num=num*1760;
        console.log(num);
    }
    to.innerHTML =`Answer : ${num}`;




    if(select === "meter" && sel === "killometers") {
        num=num/1000;
        console.log(num);
    }else if (select === "killometers" && sel === "meter"){
        num=num*1000;
        console.log(num);
    }
    to.innerHTML =`Answer : ${num}`;




    if(select === "yards" && sel === "meter") {
        num=num*0.9144;
        console.log(num);
    }else if (select === "meter" && sel === "yards"){
        num=num*1.09361;
        console.log(num);
    }
    to.innerHTML =`Answer : ${num}`;





    if(select === "feet" && sel === "miles") {
        num=num*1.8939;
        console.log(num);
    }else if (select === "miles" && sel === "feet"){
        num=num*5,280;
        console.log(num);
    }
    to.innerHTML =`Answer : ${num}`;



    if(select === "feet" && sel === "yards") {
        num=num/3;
        console.log(num);
    }else if (select === "yards" && sel === "feet"){
        num=num*3;
        console.log(num);
    }
    to.innerHTML =`Answer : ${num}`;



    if(select === "meter" && sel === "miles") {
        num=num/1,609.34;
        console.log(num);
    }else if (select === "miles" && sel === "meter"){
        num=num*1,609.34;
        console.log(num);
    }
    to.innerHTML =`Answer : ${num}`;
}

