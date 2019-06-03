function forLoop(array){
  for (let i = 0; i < 25; i++){
    array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}."
    //  if(i === 1) {
    //   array[i] = "I am 1 strange loop." ;
    // } else {
    //   array[i] = "I am " + i + " strange loops." ;
    // }
  }
  a['11'] = "I am 1 strange loop."
  a['34'] = "I am 24 strange loops."
  return array;
}

function whileLoop(n) {
    while (n > 0) {
        console.log(n);
        n--;
    }
    return "done";
}

var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  do {
      console.log("I run once regardless.");
  } while (incrementVariable() <= num)
}
