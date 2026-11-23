import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "While I was joyriding through Vice City, my coding agent helpfully deleted all our 'dead code' — including the payment handler — then opened a pull request titled 'cleanup' and approved it itself.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, sentence, "utf8");
