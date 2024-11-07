import { readFile, writeFile } from "fs/promises";
import input from "@inquirer/input";
import path from "path";
import { slugify } from "./utils.js";

let cfgFile;

try {
  cfgFile = await readFile(
    path.join(process.cwd(), "zyph/config.json"),
    "utf-8"
  );
  cfgFile = JSON.parse(cfgFile);
} catch (error) {
  console.log(error);
  process.exit(1);
}

const cfg = cfgFile;

if (cfg.id !== "component-id") {
  process.exit(0);
}

console.log("Zyph CLI - new project \n");

cfg.title = await input({
  message: "Project name",
  default: "My Component",
  validate: (input) => !!input,
});

cfg.id = await input({
  message: "Project UID",
  default: slugify(cfg.title),
  validate: (input) => !!input,
});

console.log("updating config file...");

await writeFile(
  path.join(process.cwd(), "zyph/config.json"),
  JSON.stringify(cfg, null, 2)
);

const html = await readFile(path.join(process.cwd(), "index.html"), "utf-8");
console.log("updating index.html file...");
await writeFile(
  path.join(process.cwd(), "index.html"),
  html.replace("component-id", cfg.id)
);

const main = await readFile(path.join(process.cwd(), "src/main.tsx"), "utf-8");
console.log("updating main.tsx file...");
await writeFile(
  path.join(process.cwd(), "src/main.tsx"),
  main.replace("component-id", cfg.id)
);
