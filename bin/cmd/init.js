import { writeFile, readdir, mkdir } from "fs/promises";
import input from "@inquirer/input";
import path from "path";
import { slugify } from "../utils.js";
export async function init($target) {
  const target = path.join(process.cwd(), $target);
  try {
    await readdir(path.join(target, "zyph"));
  } catch (error) {
    mkdir(path.join(target, "zyph"));
  }

  const cfg = {
    id: "component-id",
    title: "My Component",
    props: {},
    colors: {},
  };

  console.log("Zyph CLI ⚛ - configure \n");

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

  console.log("generating config file...");

  await writeFile(
    path.join(target, "zyph/config.json"),
    JSON.stringify(cfg, null, 2)
  );
}
