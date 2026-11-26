// Entry program: writes the one-line office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

const ENTRY_TEXT =
  "I asked for a raise. My boss said my salary is confidential — even from me.";

mkdirSync(OUTPUT_DIR, { recursive: true });
// Write the joke text with a standard trailing newline (76 chars total in file).
writeFileSync(OUTPUT_PATH, `${ENTRY_TEXT}\n`, "utf8");
