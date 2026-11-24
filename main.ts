import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about a small good thing that happened today:
// a bus driver, an old man, a cat in a basket, and a horn used as applause.
// The line is 128 characters, inside the competition's 200-character cap.
const LINE =
  "The bus driver waited while an old man crossed the road with his cat in a basket, then honked twice — not in anger, in applause.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
