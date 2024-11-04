import path from 'path';
import fs from 'fs';
import { describe, it, expect } from 'vitest';

import { loadMockData } from '../common/test_helpers';
import { createTestCase, runTests, zip } from './test_helpers';
import { testCasesForZip } from './test_cases/zip';

describe('createTestCase', () => {
  it('expects to be created a test case object with the given name and value', () => {
    const name = 'the most simple test case with one argument';
    const value = 42;
    const testCase = createTestCase<number>(name)(value);

    expect(testCase).toEqual({ name, value });
  });
});

describe('runTests', () => {
  describe('expects to run multiple test cases with the given test function', () => {
    const testName = 'input value is multiplied by 2';
    const testCases = [
      { input: 1, expected: 2 },
      { input: 2, expected: 4 },
      { input: 3, expected: 6 },
    ];

    let executedTests = 0;

    runTests(testName, testCases, (testCase: { input: number; expected: number }) => {
      expect(testCase.input * 2).toBe(testCase.expected);

      executedTests++;

      if (executedTests === testCases.length) {
        expect(executedTests).toBe(testCases.length);
      }
    });
  });

  it('expects to be handled empty test cases array', () => {
    const testName = 'empty test cases';

    runTests(testName, [], () => {
      throw new Error('Expect not to be called');
    });
  });
});

describe('zip', () => {
  test.each(testCasesForZip)('$name', ({ first, second, expected }) => {
    expect(zip(first, second)).toEqual(expected);
  });

  it('expects to handle large arrays efficiently', () => {
    const size = 100000;
    const firstArray = Array.from({ length: size }, (_, i) => i);
    const secondArray = Array.from({ length: size }, (_, i) => `item${i}`);

    // Warm-up run
    zip(firstArray, secondArray);

    // Multiple iterations for more reliable timing
    const iterations = 10;
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const startTime = performance.now();
      const result = zip(firstArray, secondArray);
      const endTime = performance.now();
      times.push(endTime - startTime);

      expect(result.length).toBe(size);
    }

    const avgTime = times.reduce((a, b) => a + b) / times.length;
    expect(avgTime).toBeLessThan(100);
  });

  it('expects to throw an error when the first array is null', () => {
    const firstArray = null as unknown as number[];
    const secondArray = ['a', 'b', 'c'];

    expect(() => zip(firstArray, secondArray)).toThrow(
      'Both input arrays must be non-null and defined',
    );
  });

  it('expects to throw an error when the second array is null', () => {
    const firstArray = ['a', 'b', 'c'];
    const secondArray = null as unknown as number[];

    expect(() => zip(firstArray, secondArray)).toThrow(
      'Both input arrays must be non-null and defined',
    );
  });

  it('expects to throw an error when the first and second array are null', () => {
    const firstArray = null as unknown as number[];
    const secondArray = null as unknown as number[];

    expect(() => zip(firstArray, secondArray)).toThrow(
      'Both input arrays must be non-null and defined',
    );
  });

  it('expects to throw an error when the first array is not an array', () => {
    const firstArray = 'not an array' as unknown as string[];
    const secondArray = ['a', 'b', 'c'];

    expect(() => zip(firstArray, secondArray)).toThrow(
      'Both input arrays must be non-null and defined',
    );
  });

  it('expects to throw an error when the second array is not an array', () => {
    const firstArray = [1, 2, 3];
    const secondArray = 'not an array' as unknown as string[];

    expect(() => zip(firstArray, secondArray)).toThrow(
      'Both input arrays must be non-null and defined',
    );
  });
});

describe('loadMockData', () => {
  const mockFilePath = path.resolve(__dirname, 'mockData.json');
  const mockData = { key: 'value' };

  beforeAll(() => {
    fs.writeFileSync(mockFilePath, JSON.stringify(mockData));
  });

  afterAll(() => {
    fs.unlinkSync(mockFilePath);
  });

  it('expects to load and parse mock data from a file', () => {
    const data = loadMockData<typeof mockData>(mockFilePath);
    expect(data).toEqual(mockData);
  });

  it('expects to throw an error if the file does not exist', () => {
    const invalidFilePath = path.resolve(__dirname, 'nonExistentFile.json');
    expect(() => loadMockData<typeof mockData>(invalidFilePath)).toThrow();
  });

  it('expects to throw an error if the file content is not valid JSON', () => {
    const invalidJsonFilePath = path.resolve(__dirname, 'invalidJson.json');
    fs.writeFileSync(invalidJsonFilePath, 'invalid json');

    expect(() => loadMockData<typeof mockData>(invalidJsonFilePath)).toThrow();

    fs.unlinkSync(invalidJsonFilePath);
  });
});
