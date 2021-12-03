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
                                return ["x", val];
                            case "down":
                            case "up":
                                return ["depth", val * (command[0] === "up" ? -1 : 1)];
                        }
                     });

const pos = { x: 0, depth: 0 };
commandArr.forEach(command => pos[command[0]] += command[1]);

console.log(pos.x * pos.depth);
