import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

function deepUnwrap(obj) {
  let cur = obj;
  let guard = 0;
  while (
    cur &&
    typeof cur === "object" &&
    cur.default &&
    typeof cur.default === "object" &&
    guard < 5
  ) {
    cur = cur.default;
    guard += 1;
  }
  return cur;
}

function fixDir(dir, typeImport, typeName, varName) {
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") {
      continue;
    }
    const abs = join(dir, file);
    const raw = readFileSync(abs, "utf8");
    const match = raw.match(
      new RegExp(`const ${varName}: ${typeName} = (\\{[\\s\\S]*\\});\\s*export default`),
    );
    if (!match) {
      console.error("no match", abs);
      continue;
    }
    const obj = Function(`"use strict"; return (${match[1]});`)();
    const data = deepUnwrap(obj);
    if (!data.slug) {
      console.error("no slug after unwrap", abs);
      continue;
    }
    writeFileSync(
      abs,
      `import type { ${typeName} } from "${typeImport}";\n\nconst ${varName}: ${typeName} = ${JSON.stringify(
        data,
        null,
        2,
      )};\n\nexport default ${varName};\n`,
      "utf8",
    );
    console.log("unwrapped", data.slug);
  }
}

const root = process.cwd();
fixDir(
  join(root, "content/tools"),
  "@/content/tools/types",
  "ToolPage",
  "tool",
);
fixDir(
  join(root, "content/integrations"),
  "@/content/integrations/types",
  "IntegrationGuide",
  "guide",
);
fixDir(
  join(root, "content/resources"),
  "@/content/resources/types",
  "ResourcePage",
  "resource",
);
