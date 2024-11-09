import { expect } from 'vitest';

import { runTests } from '../common/test_helpers';
import * as TestCasesForContestType from './test_cases/contest_type';
import { type TestCaseForContestType } from './test_cases/contest_type';
import * as TestCasesForContestNameLabel from './test_cases/contest_name_labels';
import { type TestCaseForContestNameLabel } from './test_cases/contest_name_labels';
import * as TestCasesForContestNameAndTaskIndex from './test_cases/contest_name_and_task_index';
import { type TestCaseForContestNameAndTaskIndex } from './test_cases/contest_name_and_task_index';
import {
  classifyContest,
  getContestPriority,
  contestTypePriorities,
  getContestNameLabel,
  addContestNameToTaskIndex,
} from '$lib/utils/contest';

describe('Contest', () => {
  describe('classify contest', () => {
    describe('AtCoder', () => {
      describe('when contest_id is abs', () => {
        TestCasesForContestType.abs.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains abc', () => {
        TestCasesForContestType.abc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id starts with APG4b', () => {
        TestCasesForContestType.apg4b.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is typical90', () => {
        TestCasesForContestType.typical90.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is dp (EDPC)', () => {
        TestCasesForContestType.edpc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is tdpc', () => {
        TestCasesForContestType.tdpc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains past', () => {
        TestCasesForContestType.past.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is practice2 (ACL practice)', () => {
        TestCasesForContestType.aclPractice.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains joi', () => {
        TestCasesForContestType.joi.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is tessoku-book', () => {
        TestCasesForContestType.tessokuBook.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is math_and_algorithm', () => {
        TestCasesForContestType.mathAndAlgorithm.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains arc', () => {
        TestCasesForContestType.arc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains agc', () => {
        TestCasesForContestType.agc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id mean arc-like', () => {
        TestCasesForContestType.arcLike.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id mean agc-like', () => {
        TestCasesForContestType.agcLike.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id mean contests held by university students', () => {
        TestCasesForContestType.universities.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id mean AtCoder others', () => {
        TestCasesForContestType.atCoderOthers.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });
    });

    describe('AOJ', () => {
      describe('when contest_id mean AOJ courses', () => {
        TestCasesForContestType.aojCourses.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id mean AOJ PCK (prelim and final) ', () => {
        TestCasesForContestType.aojPck.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(classifyContest(contestId)).toEqual(expected);
          });
        });
      });
    });
  });

  describe('get contest priority', () => {
    describe('AtCoder', () => {
      describe('when contest_id is abs', () => {
        TestCasesForContestType.abs.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id contains abc', () => {
        TestCasesForContestType.abc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id starts with APG4b', () => {
        TestCasesForContestType.apg4b.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id is typical90', () => {
        TestCasesForContestType.typical90.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id is dp (EDPC)', () => {
        TestCasesForContestType.edpc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id is tdpc', () => {
        TestCasesForContestType.tdpc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id contains past', () => {
        TestCasesForContestType.past.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id is practice2 (ACL practice)', () => {
        TestCasesForContestType.aclPractice.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id contains joi', () => {
        TestCasesForContestType.joi.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id is tessoku-book', () => {
        TestCasesForContestType.tessokuBook.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id is math-and-algorithm', () => {
        TestCasesForContestType.mathAndAlgorithm.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id contains arc', () => {
        TestCasesForContestType.arc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id contains agc', () => {
        TestCasesForContestType.agc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id means arc-like', () => {
        TestCasesForContestType.arcLike.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id means agc-like', () => {
        TestCasesForContestType.agcLike.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id mean contests held by university students', () => {
        TestCasesForContestType.universities.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id means AtCoder others', () => {
        TestCasesForContestType.atCoderOthers.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });
    });

    describe('AOJ', () => {
      describe('when contest_id means AOJ courses', () => {
        TestCasesForContestType.aojCourses.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });

      describe('when contest_id means AOJ PCK (prelim and final)', () => {
        TestCasesForContestType.aojPck.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestType) => {
            expect(getContestPriority(contestId)).toEqual(contestTypePriorities.get(expected));
          });
        });
      });
    });
  });

  describe('get contest name label', () => {
    describe('AtCoder', () => {
      describe('when contest_id contains abc', () => {
        TestCasesForContestNameLabel.abc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id starts with APG4b', () => {
        TestCasesForContestNameLabel.apg4b.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is typical90', () => {
        TestCasesForContestNameLabel.typical90.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is dp (EDPC)', () => {
        TestCasesForContestNameLabel.edpc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is tdpc', () => {
        TestCasesForContestNameLabel.tdpc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      // TODO(#issue): Skipped until notational inconsistencies are resolved.
      // Current issues:
      // 1. Contest names use inconsistent formats (e.g., "past201912-open" vs "past17-open")
      // 2. Need to standardize naming conventions across all contests
      describe.skip('when contest_id contains past', () => {
        TestCasesForContestNameLabel.past.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is practice2 (ACL practice)', () => {
        TestCasesForContestNameLabel.aclPractice.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      // TODO(#issue): Skipped until notational inconsistencies are resolved.
      // Current issues:
      // 1. Contest names use inconsistent formats
      // 2. Need to standardize naming conventions across all contests
      describe.skip('when contest_id contains joi', () => {
        TestCasesForContestNameLabel.joi.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is tessoku-book', () => {
        TestCasesForContestNameLabel.tessokuBook.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id is math-and-algorithm', () => {
        TestCasesForContestNameLabel.mathAndAlgorithm.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains arc', () => {
        TestCasesForContestNameLabel.arc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains agc', () => {
        TestCasesForContestNameLabel.agc.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id contains chokudai_S', () => {
        TestCasesForContestNameLabel.atCoderOthers.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });
    });

    describe('AOJ', () => {
      describe('when contest_id means AOJ courses', () => {
        TestCasesForContestNameLabel.aojCourses.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });

      describe('when contest_id means AOJ PCK (prelim and final)', () => {
        TestCasesForContestNameLabel.aojPck.forEach(({ name, value }) => {
          runTests(`${name}`, [value], ({ contestId, expected }: TestCaseForContestNameLabel) => {
            expect(getContestNameLabel(contestId)).toEqual(expected);
          });
        });
      });
    });
  });

  describe('add contest name to task index', () => {
    describe('AtCoder', () => {
      describe('when contest_id contains abc', () => {
        TestCasesForContestNameAndTaskIndex.abc.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id starts with APG4b', () => {
        TestCasesForContestNameAndTaskIndex.apg4b.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id is typical90', () => {
        TestCasesForContestNameAndTaskIndex.typical90.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id is tessoku-book', () => {
        TestCasesForContestNameAndTaskIndex.tessokuBook.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id is math-and-algorithm', () => {
        TestCasesForContestNameAndTaskIndex.mathAndAlgorithm.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id contains arc', () => {
        TestCasesForContestNameAndTaskIndex.arc.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id contains agc', () => {
        TestCasesForContestNameAndTaskIndex.agc.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });
    });

    describe('AOJ', () => {
      describe('when contest_id means AOJ courses', () => {
        TestCasesForContestNameAndTaskIndex.aojCourses.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });

      describe('when contest_id means AOJ PCK (prelim and final)', () => {
        TestCasesForContestNameAndTaskIndex.aojPck.forEach(({ name, value }) => {
          runTests(
            `${name}`,
            [value],
            ({ contestId, taskTableIndex, expected }: TestCaseForContestNameAndTaskIndex) => {
              expect(addContestNameToTaskIndex(contestId, taskTableIndex)).toEqual(expected);
            },
          );
        });
      });
    });
  });
});
