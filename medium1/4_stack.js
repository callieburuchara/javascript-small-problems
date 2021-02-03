/*
PROBLEM
- Stack: list of values that grows and shrinks dynamically
- Register: current value (not part of the stack)
- Each operation operations on the register
- An operation that requires two values pops the topmost item from the
  stack (the most recently pushed value) and operates on the popped
  value and the register value, and stores the result back in the 
  register
- 

ALGORITHM
- create an array for the stack
- create a register initially set to 0
- split the input by spaces 
- iterate over the commands
  - a number, set the register to it (use Number.isNaN)
  - PUSH, copy the reg value into the array
  - PRINT: print the register value
  - ADD: remove the last value from the stack and add it to the 
         register. That new sum will now be the register.
  - SUB: same thing as add but subtraction.
  - MULT: same as add, but multiplication
  - DIV: same as add, but division. Save the INTEGER, not a float.
  - MOD: same as add, but modulo.
  - POP: remove the last item from the stack and put it in the register



*/

function minilang(commands) {
  let stack = [];
  let register = 0;

  commands.split(' ').forEach(command => {
    if (/[0-9]/g.test(command)) {
      register = Number(command);
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'PRINT') {
      console.log(register);
    } else if (command === 'ADD') {
      register = (stack.pop() + register);
    } else if (command === 'SUB') {
      register = (register - stack.pop());
    } else if (command === 'MULT') {
      register = (register * stack.pop())
    } else if (command === 'DIV') {
      register = Math.round(register / stack.pop())
    } else if (command === 'MOD') {
      register = Math.round(register % stack.pop())
    } else if (command === 'POP') {
      register = stack.pop()
    }
  });

}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
