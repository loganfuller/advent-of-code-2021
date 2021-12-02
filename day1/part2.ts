import { readFileSync } from "fs";

const WINDOW_SIZE = 3;

const inputArr = readFileSync("./input.txt").toString()
                                            .split("\n")
                                            .map(val => parseInt(val, 10));

let sumsArr = [];
for (let i = 0; (i + WINDOW_SIZE - 1) < inputArr.length; i++) {
    sumsArr.push(
        inputArr.slice(i, i + WINDOW_SIZE)
                .reduce((currVal, prevVal) => currVal += prevVal)
    );
}

let inc = 0;
for (let i = 0; i < sumsArr.length; i++) {
    if (!i) continue;

    if (sumsArr[i] > sumsArr[i - 1]) {
        inc++;
    }
}

console.log(inc);
