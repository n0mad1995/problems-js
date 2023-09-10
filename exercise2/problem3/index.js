function numbersSum(arr) {
  let sum = 0;
  for (let element of arr) {
    if (typeof element === "number") {
      sum += element;
    } else if (!isNaN(element) && typeof element !== "boolean") {
      // Check if the element can be converted to a number and it's not a boolean
      sum += parseFloat(element);
    }
  }
  return sum;
}

module.exports = numbersSum;
