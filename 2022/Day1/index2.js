//https://www.youtube.com/watch?v=jY3nhz3pelc&t=4s&ab_channel=CodingSerenity

// https://adventofcode.com/2022/day/1

// read textfile + trim blanks at the end
const fs = require('fs');

const calorie = fs.readFileSync('text.txt', 'utf8').trimEnd();

// sum each group (step by step)
//const calorieSum = (group) => {
//    const strCalorieList = group.split('\r\n');
//    const calorieList = strCalorieList.map(Number);
//    const sum = calorieList.reduce((sum, num) => sum + num, 0);
//    return sum;
//}

// sum
const getCalorieSum = (group) =>
    group
        .split('\n')
        .map(Number)
        .reduce((sum, num) => sum + num, 0);

// divide into groups
const calorieGroup = calorie.split('\n\n');

// sum per group
const calorieSumGroup = calorieGroup.map(getCalorieSum);

// largest sum
const maxCalorie = Math.max(...calorieSumGroup);

console.log(calorieSumGroup);
//console.log(caloriesGroup);