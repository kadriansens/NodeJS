// https://adventofcode.com/2022/day/1
// test

const fs = require('fs');

const calories = fs.readFileSync('text.txt', 'utf8').trimEnd();
// console.log(calories);

function sol(calories) {
  const elf = calories
    .split('\n\n')

  console.log(elf)
}

sol(calories)