import type { WorkBookType as WorkBookTypeOrigin } from '@prisma/client';

export type WorkBook = {
  userId: string;
  title: string;
  isPublished: boolean;
  isOfficial: boolean;
  workBookType: WorkBookType;
};

// HACK: enumを使うときは毎回書いているので、もっと簡略化できないか?
export const WorkBookType: { [key in WorkBookTypeOrigin]: key } = {
  CREATED_BY_USER: 'CREATED_BY_USER', // (デフォルト) ユーザ作成: サービスの利用者がさまざまなコンセプトで作成
  TEXTBOOK: 'TEXTBOOK', // 教科書: 例題の解法を理解すれば、その本質部分を真似することで解ける類題
  SOLUTION: 'SOLUTION', // 解法別: 使い方をマスターしたいアルゴリズム・データ構造・考え方・実装方針 (総称して解法と表記) をさまざまなパターンで考察しながら練習できる
  GENRE: 'GENRE', // ジャンル別: 考察なしで問題文から読み取れる内容に基づいてまとめている。ネタバレなし
  THEME: 'THEME', // テーマ別: さまざまな解法 (解法別より狭義) を横断し得るものをまとめている
} as const;

// Re-exporting the original type with the original name.
export type WorkBookType = WorkBookTypeOrigin;
