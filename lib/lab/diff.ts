export type DiffMark = "same" | "add" | "remove" | "change";

export function diffLines(oldStr: string, newStr: string): DiffMark[] {
  const a = oldStr.replace(/\r\n/g, "\n").split("\n");
  const b = newStr.replace(/\r\n/g, "\n").split("\n");
  const n = a.length, m = b.length;
  // simple LCS dp for reasonable sizes
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const marksB: DiffMark[] = Array(m).fill("same");
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { marksB[j] = "same"; i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { i++; } // removed from old
    else { marksB[j] = "add"; j++; }
  }
  while (j < m) { marksB[j] = "add"; j++; }
  // mark changed where adjacent remove+add heuristically -> treat adds as change if counts similar
  return marksB;
}
