#! /usr/bin/env node
import { init } from "./cmd/init.js";

const [_, __, ...args] = process.argv;

const [$cmd, $target] = args;

if (!$cmd || $cmd !== "init") {
  console.log("Please provide a valid command");
  process.exit(1);
}

if (!$target) {
  console.log("Please provide a target");
  process.exit(1);
}

if ($cmd === "init") {
  init($target);
}
