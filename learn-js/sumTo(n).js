//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// через цикл

function sumTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
console.log(sumTo(100));

// через рекурсию

function sumToRec(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumToRec(n - 1);
  }
}
console.log(sumToRec(100));
