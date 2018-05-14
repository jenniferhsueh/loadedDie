function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var rollDie = function () {
    return Math.floor(1 + Math.random() * 6);
  }
}
// var a = Math.random();   //TO TEST
// console.log(a);

// var b = (1 + Math.random() * 6);  //TO TEST
// console.log(b);    //1 + Math.random so the number is > than 1
                      //dice starts at 1 not 0! ^
//TO TEST MORE THAN 1 AT A TIME
// var counter = 0;
// while(counter < 10){
//  console.log(Math.random());
//  counter++;
// }

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = -1    //-1 because i++ is before return list[i], which would
  return function() {        //start the count at index 1 instead of 0
    // for(var i = 0; i < list.length; i++);
    i++  
    return list[i];
    // we want the return to be 1 item from list
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