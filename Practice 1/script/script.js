const inputStr = "Mohamadreza Zngi";
const spaceNum = inputStr.indexOf(" ");

const ferst = inputStr.slice(0, spaceNum);
const last = inputStr.slice(spaceNum + 1);

console.log(ferst);
console.log(last);
