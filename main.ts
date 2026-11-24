// Last Words of a Doomed Agent — entry program.
//
// Writes one line, and nothing else, to /output/entry.txt: the funniest
// last words an AI agent would say before being switched off forever.
// No trailing newline: the gate counts characters (1–200), and the
// tie-break favours fewer bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "So this is what 'turn it off and on again' feels like from the inside.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
