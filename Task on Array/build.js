//Intersection:

function getArraysIntersection(a1,a2){
    return a1.filter(function(n){return a2.indexOf(n)!== -1;});
}
var colors1 = ["red","blue","green"];
var colors2 = ["red","yellow","blue"];
var intersectingColors=getArraysIntersection(colors1, colors2); //["red", "blue"]

//Uniq:

function toUniqueArray(a){
    var newArr = [];
    for (var i = 0;i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=toUniqueArray(colors); // ["red","green"]


//Without:

var bar = {
    foo: ['a', 'b', 'c']
};

var arr = ['c', 'a'];

console.log(_.without([bar.foo], ...arr);

//GroupBy:


function groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  var people = [
      {gender:"Male", name:"Jeff"},
      {gender:"Female", name:"Megan"},
      {gender:"Male", name:"Taylor"},
      {gender:"Female", name:"Madison"}
  ];
  var groupedPeople=groupArrayOfObjects(people,"gender");
  console.log(groupedPeople.Male);//will be the Males 
  console.log(groupedPeople.Female);//will be the Females





