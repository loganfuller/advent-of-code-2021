import { readFileSync } from "fs";

const inputArr = readFileSync("./input.txt")
                     .toString()
                     .split("\n")
                     .map(val => parseInt(val, 10));

let inc = 0;
for (let i = 0; i < inputArr.length; i++) {
    if (!i) continue;

    if (inputArr[i] > inputArr[i - 1]) {
        inc++;
    }
}

console.log(inc);
