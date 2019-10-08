import DataConvert from './DataConvert';

describe('DataConvert', () => {
  test('values()', () => {
    // TDD: Test Driven Development
    const values = DataConvert.values({ a: 'value1', b: 'value2' });
    expect(values).toEqual(['values1', 'values2']);

    const values = DataConvert.values({ a: { a1: 'value2' }, b: 'value2' });
    expect(values).toEqual([{ a1: 'value2' }, 'values2']);
  });
});
