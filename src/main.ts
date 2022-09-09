import { Expression } from './equation.model';
import { compute } from './computation';

function Main() {
  const operators = ['+', '-', '*', '/'];
  const A = 10;
  const B = 5;

  const problems = operators.map((problem) => {
    return { operandA: A, operandB: B, operator: problem } as Expression;
  });

  problems.forEach((result) => {
    console.log(result.operandA, result.operator, result.operandB, '=', compute(result));
  });
}

Main();
