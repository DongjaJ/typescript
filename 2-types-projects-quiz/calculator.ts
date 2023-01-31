/**
 * Let's make a calculator 🧮
 */

// 1. 내가 한 방법
type Action = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(action: Action, x: number, y: number) {
  if (action === "add") return x + y;
  if (action === "substract") return x - y;
  if (action === "multiply") return x * y;
  if (action === "divide") return x / y;
  return x % y;
}

// 2. 다른 방법
// function calculate(action: Action, x: number, y: number):number {
//     switch(action){
//         case 'add': return x+y;
//         case 'substract': return x-y;
//         case 'multiply': return x*y;
//         case 'divide': return x/y;
//         case 'remainder': return x%y;
//         default: throw new Error('unknown error');
//     }
//   }

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
