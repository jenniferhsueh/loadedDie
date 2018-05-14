function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var rollDie = function () {
    return Math.floor(1 + Math.random() * 6);
  }
}
// var a = Math.random();   //TO TEST
// console.log(a);

// var b = (1 + Math.random() * 6);  //TO TEST
// console.log(b);

//TO TEST MORE THAN 1 AT A TIME
// var counter = 0;
// while(counter < 10){
//  console.log(Math.random());
//  counter++;
// }

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = -1
  return function() {
    // for(var i = 0; i < list.length; i++);
    i++  
    return list[i];
    // we want the return to be 1 item from list
    // return one_item_from_list;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// function printLine(string){
//   console.log(string);
//   //return function(){
//     //console.log(string);
//   //}
//  }
//  var some_name = printLine("hello js"); 
          //Funciton is called cause no closure happening?