import { resolve, dirname } from "path";
import { readFileSync } from "fs";

const commandArr = readFileSync(resolve(dirname(new URL(import.meta.url).pathname), "./input.txt"))
                     .toString()
                     .split("\n")
                     .map(line => {
                        const command = line.split(" ");
                        const val = parseInt(command[1], 10);
                        switch(command[0]) {
                            case "forward":
                                return ["execute", val];
                            case "down":
                            case "up":
                                return ["aim", val * (command[0] === "up" ? -1 : 1)];
                        }
                     });

const pos = { x: 0, depth: 0 };
let aim = 0;
commandArr.forEach(command => {
    if (command[0] === "aim") {
        aim += command[1];
    } else {
        // execute
        pos.x += command[1];
        pos.depth += aim * command[1];
    }
});

console.log(pos.x * pos.depth);
