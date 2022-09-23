import { compute } from './computation';
import { Expression } from './equation.model';

class Main {
  static start(): void {
    const operators = ['+', '-', '*', '/'];
    const A = Number(process.env['FIRST']) || 10;
    const B = Number(process.env['SECOND']) || 5;

    const problems = operators.map((problem) => {
      return { operandA: A, operandB: B, operator: problem as Expression['operator'] };
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
}

Main.start();
