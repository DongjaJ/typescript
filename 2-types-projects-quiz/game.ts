/**
 * Let's make a game 🕹
 */

type Position = {
  x: number;
  y: number;
};

const position: Position = { x: 0, y: 0 };

type Command = "up" | "down" | "left" | "right";
function move(command: Command) {
  if (command === "up") {
    position.y++;
    return;
  }
  if (command === "down") {
    position.y--;
    return;
  }
  if (command === "left") {
    position.y++;
    return;
  }
  if (command === "right") {
    position.y--;
    return;
  }
  throw new Error(`unknown error: ${command}`);
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
