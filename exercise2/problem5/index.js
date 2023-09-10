function getBudgets(people) {
  let totalBudget = 0;
  for (let person of people) {
    totalBudget += person.budget;
  }
  return totalBudget;
}

module.exports = getBudgets;
