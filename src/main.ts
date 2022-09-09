import { Expression } from './equation.model';
import { compute } from './computation';

function Main() {
  const operators = ['+', '-', '*', '/'];
  const A = 10;
  const B = 5;

  const problems = operators.map((problem) => {
    return { operandA: A, operandB: B, operator: problem } as Expression;
  });

  problems.push({
    operandA: 50,
    operandB: 0,
    operator: '/',
  });

  problems.forEach((result) => {
    let value: number;
    try {
      value = compute(result);
      console.log(result.operandA, result.operator, result.operandB, '=', value);
    } catch (error: unknown) {
      if (error instanceof Error) console.error(error.message);
    }
  });
}

Main();
