let count = 0;
function addOne() {
    count = count + 1;
  document.getElementById("inside").innerHTML = count;
  console.log(count);
}

function reset(){
    count = null
    document.getElementById("inside").innerHTML = count;
}