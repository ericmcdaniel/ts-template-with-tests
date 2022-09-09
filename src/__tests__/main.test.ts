import { compute } from '../computation';

describe('compute', () => {
  test('it should add the two operands', () => {
    expect(compute({ operandA: 10, operandB: 5, operator: '+' })).toBe(15);
    expect(compute({ operandA: -40, operandB: 50, operator: '+' })).toBe(10);
    expect(compute({ operandA: -10, operandB: 5, operator: '+' })).toBe(-5);
  });
  test('it should subtract the two operands', () => {
    expect(compute({ operandA: 20, operandB: 15, operator: '-' })).toBe(5);
    expect(compute({ operandA: 50, operandB: -20, operator: '-' })).toBe(70);
    expect(compute({ operandA: -10, operandB: 50, operator: '-' })).toBe(-60);
  });
  test.todo('it should multiple the two operands');
  test.todo('it should divide the two operands (where the denominator is not zero)');
  test('it should throw an error when dividing by zero', () => {
    expect(() => compute({ operandA: 10, operandB: 0, operator: '/' })).toThrowError(/zero/);
    expect(() => compute({ operandA: -40, operandB: 0, operator: '/' })).toThrowError(/zero/);
    expect(() => compute({ operandA: -10, operandB: 0, operator: '/' })).toThrowError(/zero/);
  });
});
