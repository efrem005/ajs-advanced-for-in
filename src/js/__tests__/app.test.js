import orderByProps from '../app';

describe('orderByProps', () => {
  test('сортирует свойства по заданному порядку и алфавиту', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = orderByProps(obj, ['name', 'level']);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('игнорирует отсутствующие ключи в порядке и сортирует остаток', () => {
    const obj = { beta: 2, alpha: 1, gamma: 3 };

    const result = orderByProps(obj, ['gamma', 'zzz']);

    expect(result).toEqual([
      { key: 'gamma', value: 3 },
      { key: 'alpha', value: 1 },
      { key: 'beta', value: 2 },
    ]);
  });
});

