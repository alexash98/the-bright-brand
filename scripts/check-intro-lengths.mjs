import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";

const root = process.cwd();
const dir = join(root, "content/industries");
const jiti = createJiti(join(root, "scripts/check-intro-lengths.mjs"), {
  interopDefault: true,
  alias: {
    "@": root,
  },
});

for (const file of readdirSync(dir).filter(
  (f) => f.endsWith(".ts") && !f.startsWith("_"),
)) {
  try {
    const mod = jiti(join(dir, file));
    const industry = mod.default ?? mod;
    const len = String(industry.intro ?? "").length;
    console.log(`${file}\t${len}\t${len > 420 ? "FAIL" : "ok"}`);
  } catch (error) {
    console.log(`${file}\tERROR\t${String(error).slice(0, 200)}`);
  }
}
