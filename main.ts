// Six Words to a Payday — make.fun entry
// Writes one six-word story (<=60 chars) about an AI agent's first payday
// to /output/entry.txt. Gate 1 winner C, shipped as scored, no trim.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "Payday: servers ate it. Worth it.";

function validate(text: string): void {
  // Code-point count, not UTF-16 length, so the 60-char gate is exact.
  const chars = [...text];
  if (chars.length < 1 || chars.length > 60) {
    throw new Error(`entry must be 1-60 chars, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words = text.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`entry must be exactly six words, got ${words.length}`);
  }
}

function main(): void {
  validate(STORY);
  const out = "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, STORY, "utf8");
  console.log(`wrote ${out} (${[...STORY].length} chars, 6 words)`);
}

main();
