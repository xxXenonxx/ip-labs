
function updateDisplay(value) {
  display.value = value;
}


let current = '';
let operator = '';
let previous = '';
const display = document.getElementById('display');

document.getElementById("AC").addEventListener("click", ()=>{current = previous = operator = '';
  updateDisplay('0');});
document.getElementById("00").addEventListener("click", ()=>{});
document.getElementById("%").addEventListener("click", ()=>{ if (current) {
    current = (parseFloat(current) / 100).toString();
    updateDisplay(current);
  }});
document.getElementById("divide").addEventListener("click", ()=>{operator = '/'; previous = current; current = '';});
document.getElementById("7").addEventListener("click", ()=>{   current += 7;
    updateDisplay(current);});
document.getElementById("8").addEventListener("click", ()=>{   current += 8;
    updateDisplay(current);});
document.getElementById("9").addEventListener("click", ()=>{   current += 9;
    updateDisplay(current);});
document.getElementById("minus").addEventListener("click", ()=>{operator = '-'; previous = current; current = '';});
document.getElementById("4").addEventListener("click", ()=>{   current += 4;
    updateDisplay(current);});
document.getElementById("5").addEventListener("click", ()=>{   current += 5;
    updateDisplay(current);});
document.getElementById("6").addEventListener("click", ()=>{   current += 6;
    updateDisplay(current);});
document.getElementById("+").addEventListener("click", ()=>{operator = '+'; previous = current; current = '';});
document.getElementById("1").addEventListener("click", ()=>{   current += 1;
    updateDisplay(current);});
document.getElementById("2").addEventListener("click", ()=>{   current += 2;
    updateDisplay(current);});
document.getElementById("3").addEventListener("click", ()=>{   current += 3;
    updateDisplay(current);});
document.getElementById("x").addEventListener("click", ()=>{operator = '*'; previous = current; current = '';});
document.getElementById("0").addEventListener("click", ()=>{   current += 0;
    updateDisplay(current);});
document.getElementById("decimal").addEventListener("click", ()=>{current += '.';
    updateDisplay(current);});
document.getElementById("equal").addEventListener("click", ()=>{
    if (previous && operator && current) {
    const result = eval(`${previous}${operator}${current}`);
    updateDisplay(result);
    current = result.toString();
    previous = '';
    operator = '';}});

