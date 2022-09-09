import { Expression } from './equation.model';

export function compute({ operandA: a, operandB: b, operator }: Expression): number | never {
  if (operator === '/' && b === 0) throw new Error('Cannot divide by zero.');
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}
