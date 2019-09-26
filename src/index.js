module.exports = function zeros(expression) {
  // your solution
  let multipliers = expression.split("*") || [expression];

  // counts [two, five, ten]
  let counts = [0, 0, 0];

  for (let i = 0; i < multipliers.length; i++) {
    let multiplier = multipliers[i].split("!");

    let factorialStep = multiplier.length - 1;
    let number = multiplier.length > 0 ? Number(multiplier[0]) : 0;

    counts[0] += countK(2, number, factorialStep);
    counts[1] += countK(5, number, factorialStep);
    counts[2] += countK(10, number, factorialStep);
  }

  return counts[2] + Math.min(counts[0], counts[1]);
};

function countK(k, n, step) {
  let result = 0;

  for (let i = n; i > 1; i -= step) {
    switch (k) {
      case 2:
        result += (i % 2 === 0) ? i / 2 : 0;
        break;
      case 5:
        result += (i % 5 === 0) ? 1 : 0;
        result += (((i / 5) % 5 === 0) && (i % 10 !== 0)) ? 1 : 0;
        break;
      default:
        result += (i % 50 === 0) ? 1 : 0;
        break;
    }
  }
  return result;
}
