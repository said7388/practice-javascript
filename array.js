var familyMembers = ["akter hossain", "saleha begum", "mizanur rahman", "sharmin akter"];
// add elements in an array;
familyMembers.push("farvin akter");
familyMembers.push("abu said", "raihan", "salma akter", "ayan");
familyMembers.unshift("ayesha begum");
// remove an element from an array;
familyMembers.pop();
familyMembers.shift();
familyMembers.splice(7);
console.log(familyMembers);
// index of an array
console.log(familyMembers.indexOf("sharmin akter"));
console.log(familyMembers[3]);
//  length of an array
var len = familyMembers.length;
console.log(len);