
exports.min = function min (array) {
  if(!array || array==''){return 0}else{
  array.sort(function(a, b) {
    return a - b;
  })
  return array[0];
}
}

exports.max = function max (array) {
  if(!array || array==''){return 0}else{
  array.sort(function(a, b) {
    return a - b;
  })
  return array[array.length-1];
}
}

exports.avg = function avg (array) {
  let sum =0
  if(!array || array==''){return 0}else{
   
    array.map((element)=>{
    sum = sum+element
  })
  return sum/array.length
  }
}
