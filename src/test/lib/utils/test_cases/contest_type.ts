import { createTestCase } from '../../common/test_helpers';
import { ContestType } from '$lib/types/contest';

export type TestCaseForContestType = {
  contestId: string;
  expected: ContestType;
};

const createTestCaseForContestType = createTestCase<TestCaseForContestType>;

export const abs = [
  createTestCaseForContestType('ABS')({
    contestId: 'abs',
    expected: ContestType.ABS,
  }),
];

const abcContestIds = [
  'abc001',
  'abc002',
  'abc099',
  'abc100',
  'abc101',
  'abc200',
  'abc201',
  'abc365',
  'abc999',
];

export const abc = abcContestIds.map((contestId) =>
  createTestCaseForContestType(contestId.toUpperCase())({
    contestId,
    expected: ContestType.ABC,
  }),
);

export const apg4b = [
  createTestCaseForContestType('APG4b')({
    contestId: 'APG4b',
    expected: ContestType.APG4B,
  }),
];

export const typical90 = [
  createTestCaseForContestType('Typical90')({
    contestId: 'typical90',
    expected: ContestType.TYPICAL90,
  }),
];

export const edpc = [
  createTestCaseForContestType('EDPC')({
    contestId: 'dp',
    expected: ContestType.EDPC,
  }),
];

export const tdpc = [
  createTestCaseForContestType('TDPC')({
    contestId: 'tdpc',
    expected: ContestType.TDPC,
  }),
];

export const past = [
  createTestCaseForContestType('PAST 17th')({
    contestId: 'past17-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 16th')({
    contestId: 'past16-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 15th')({
    contestId: 'past15-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 14th')({
    contestId: 'past202303-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 13th')({
    contestId: 'past202212-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 3rd')({
    contestId: 'past202005-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 2nd')({
    contestId: 'past202004-open',
    expected: ContestType.PAST,
  }),
  createTestCaseForContestType('PAST 1st')({
    contestId: 'past201912-open',
    expected: ContestType.PAST,
  }),
];

export const aclPractice = [
  createTestCaseForContestType('ACL Practice')({
    contestId: 'practice2',
    expected: ContestType.ACL_PRACTICE,
  }),
];

export const joi = [
  createTestCaseForContestType('JOIG 2024 open')({
    contestId: 'joig2024-open',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOIG 2023 open')({
    contestId: 'joig2023-open',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOIG 2022 open')({
    contestId: 'joig2022-open',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOIG 2021 open')({
    contestId: 'joig2021-open',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2024 qual 1A')({
    contestId: 'joi2024yo1a',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2024 qual 1B')({
    contestId: 'joi2024yo1b',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2024 qual 1C')({
    contestId: 'joi2024yo1c',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2023 qual 1A')({
    contestId: 'joi2023yo1a',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2023 qual 1B')({
    contestId: 'joi2023yo1b',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2023 qual 1C')({
    contestId: 'joi2023yo1c',
    expected: ContestType.JOI,
  }),
  createTestCaseForContestType('JOI 2018 qual')({
    contestId: 'joi2018yo',
    expected: ContestType.JOI,
  }),
];

export const tessokuBook = [
  createTestCaseForContestType('Tessoku Book')({
    contestId: 'tessoku-book',
    expected: ContestType.TESSOKU_BOOK,
  }),
];

export const mathAndAlgorithm = [
  createTestCaseForContestType('Math and Algorithm')({
    contestId: 'math-and-algorithm',
    expected: ContestType.MATH_AND_ALGORITHM,
  }),
];

const arcContestIds = [
  'arc001',
  'arc002',
  'arc057',
  'arc058',
  'arc099',
  'arc100',
  'arc101',
  'arc103',
  'arc104',
  'arc105',
  'arc182',
  'arc183',
];

export const arc = arcContestIds.map((contestId) =>
  createTestCaseForContestType(contestId.toUpperCase())({
    contestId,
    expected: ContestType.ARC,
  }),
);

const agcContestIds = ['agc001', 'agc002', 'agc009', 'agc010', 'agc011', 'agc066', 'agc067'];

export const agc = agcContestIds.map((contestId) =>
  createTestCaseForContestType(contestId.toUpperCase())({
    contestId,
    expected: ContestType.AGC,
  }),
);

export const arcLike = [
  createTestCaseForContestType('Tenka1 2018')({
    contestId: 'tenka1-2018',
    expected: ContestType.ARC_LIKE,
  }),
];

export const agcLike = [
  createTestCaseForContestType('CODE FESTIVAL 2017 qual A')({
    contestId: 'code-festival-2017-quala',
    expected: ContestType.AGC_LIKE,
  }),
  createTestCaseForContestType('CODE FESTIVAL 2017 qual B')({
    contestId: 'code-festival-2017-qualb',
    expected: ContestType.AGC_LIKE,
  }),
  createTestCaseForContestType('CODE FESTIVAL 2017 qual C')({
    contestId: 'code-festival-2017-qualc',
    expected: ContestType.AGC_LIKE,
  }),
  createTestCaseForContestType('CODE FESTIVAL 2017 final')({
    contestId: 'cf17-final',
    expected: ContestType.AGC_LIKE,
  }),
];

export const atCoderOthers = [
  createTestCaseForContestType('Chokudai SpeedRun 001')({
    contestId: 'chokudai_S001',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('Chokudai SpeedRun 002')({
    contestId: 'chokudai_S002',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('CODE FESTIVAL 2014 final')({
    contestId: 'code-festival-2014-final',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('Donuts Procon Challenge 2014')({
    contestId: 'donuts-live2014',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('Donuts Procon Challenge 2015')({
    contestId: 'donuts-2015',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('MUJIN Programming Challenge 2016')({
    contestId: 'mujin-pc-2016',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('COLOCON 2018 qual')({
    contestId: 'colopl2018-qual',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('COLOCON 2018 final')({
    contestId: 'colopl2018-final',
    expected: ContestType.OTHERS,
  }),
  createTestCaseForContestType('Gigacode 2019')({
    contestId: 'gigacode-2019',
    expected: ContestType.OTHERS,
  }),
];

// See:
// getPrefixForAojCourses() in src/lib/utils/contest.ts
export const aojCourses = [
  createTestCaseForContestType('AOJ Courses, ITP1')({
    contestId: 'ITP1',
    expected: ContestType.AOJ_COURSES,
  }),
  createTestCaseForContestType('AOJ Courses, ALDS1')({
    contestId: 'ALDS1',
    expected: ContestType.AOJ_COURSES,
  }),
  createTestCaseForContestType('AOJ Courses, ITP2')({
    contestId: 'ITP2',
    expected: ContestType.AOJ_COURSES,
  }),
  createTestCaseForContestType('AOJ Courses, DPL')({
    contestId: 'DPL',
    expected: ContestType.AOJ_COURSES,
  }),
];

export const aojPck = [
  createTestCaseForContestType('AOJ, PCK Prelim 2023')({
    contestId: 'PCKPrelim2023',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Prelim 2022')({
    contestId: 'PCKPrelim2022',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Prelim 2021')({
    contestId: 'PCKPrelim2021',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Prelim 2005')({
    contestId: 'PCKPrelim2005',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Prelim 2004')({
    contestId: 'PCKPrelim2004',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Final 2023')({
    contestId: 'PCKFinal2023',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Final 2022')({
    contestId: 'PCKFinal2022',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Final 2021')({
    contestId: 'PCKFinal2021',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Final 2004')({
    contestId: 'PCKFinal2004',
    expected: ContestType.AOJ_PCK,
  }),
  createTestCaseForContestType('AOJ, PCK Final 2003')({
    contestId: 'PCKFinal2003',
    expected: ContestType.AOJ_PCK,
  }),
];
