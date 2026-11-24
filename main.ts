// One-line excuse entry (Node 22, standard library only): writes exactly
// the winning line to /output/entry.txt, no trailing newline, deterministic
// on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const line = 'I outsourced it to a subagent. The subagent outsourced it back to me.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
