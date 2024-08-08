//task counter

console.log("\n\n\n\n\n\n\n");

let count = 0;

document.getElementById('decrBtn').onclick = function() {
  count -= 1;
  document.getElementById('numbers').innerHTML = count;
}

document.getElementById('res').onclick = function() {
  count = 0;
  document.getElementById('numbers').innerHTML = count;
}

document.getElementById('inc').onclick = function() {
  count += 1;
  document.getElementById('numbers').innerHTML = count;
}
console.log("\n\n\n\n\n\n\n");

let count2 = 0;

document.getElementById('decrBtn2').onclick = function() {
  count2 -= 1;
  document.getElementById('numbers2').innerHTML = count2;
}

document.getElementById('res2').onclick = function() {
  count2 = 0;
  document.getElementById('numbers2').innerHTML = count2;
}

document.getElementById('inc2').onclick = function() {
  count2 += 1;
  document.getElementById('numbers2').innerHTML = count2;
}

