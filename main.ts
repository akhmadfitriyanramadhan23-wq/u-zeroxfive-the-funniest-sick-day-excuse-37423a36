import { mkdirSync, writeFileSync } from "node:fs";

// A sick-day excuse: one half-believable domestic disaster, told as a
// real typed message, with the twist landing in the last clause — the
// cat supervising from the fridge, not the flood itself, is the laugh.
const lines = [
  "Sorry, can't come in — the boiler burst at 5 a.m. and I've been bailing out the kitchen with a teacup while the cat supervises from the top of the fridge.",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
