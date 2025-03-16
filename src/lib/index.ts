// place files you want to import through the `$lib` alias in this folder.

import type { Block } from "../types/blocks";

const numbers: string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];

export function numToString(num: number): string {
  if (num < 1 || num > 20) {
    throw new Error(
      "Number out of range. Please use a number between 1 and 20."
    );
  }
  return numbers[num - 1];
}

export function getBlock(
  totalBlocks: number,
  comps: string[],
  category: string
): Block[] {
  let temp = [];
  for (let i = 1; i < totalBlocks + 1; i++) {
    temp.push({
      slug: category,
      title: numToString(i),
      category: category,
      preview: `/preview/${category}/${numToString(i)}`,
      code: comps[i - 1],
    });
  }
  return temp;
}
