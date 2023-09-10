function afterNYears(people, n) {
  const result = {};
  for (let person in people) {
    result[person] = people[person] + Math.abs(n);
  }
  return result;
}

module.exports = afterNYears;
