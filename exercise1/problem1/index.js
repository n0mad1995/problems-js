function numOfDigits(int) {
  let result = 0;
  int = Math.abs(int);
  let numStr = int.toString();
  if (int < 0){
    return 0
  }
  for (let i = 0; i < numStr.length; i++){
    result++;
  }
 return result
}


module.exports = numOfDigits;
