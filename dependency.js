// We can import direct from the internet
import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";

assertEquals("hello", "hello");
assertEquals("world", "world");
console.log(
  "✅  Asserted " +
    "using direct import!",
);

// We can centralize our dependencies in a 'global' file
import { assertStringContains } from "./app-imports.js";

assertStringContains(
  "There's different ways to handle dependencies in Deno",
  "different",
);
console.log(
  "✅  String found " +
    "using utility import!",
);

import { blue } from "fmt/colors.ts";

console.log(blue("✅  Printing some blue text with an import-map import!"));
