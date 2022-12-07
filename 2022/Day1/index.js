// https://adventofcode.com/2022/day/1
// test

const fs = require('fs');

const calories = fs.readFileSync('text1.txt', 'utf8').trimEnd();
// console.log(calories);

function sol(calories) {
  const elves = calories
    .split('\n\n')
    .map((elf) =>
      elf
        .split('\n')
        .map(Number)
        .reduce ((acc, n) => acc + n)
      )
    .sort((a, b) => b - a);
  console.log(elves[0]);

  console.log(elves.slice(0, 3).reduce((acc, n) => acc + n));
}

sol(calories)