// Make the AI Judge Feel Proud: A Family Scene (R2) — writes the entry scene to /output/entry.txt
// One or two lines: Grandma learns to video-call and shows off her breakfast.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const scene = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = scene + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`family scene filed (${scene.length} chars) -> ${outFile}`);
