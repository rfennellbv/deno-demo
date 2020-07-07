import { assertArrayContains } from "https://deno.land/std@0.60.0/testing/asserts.ts";

// See https://deno.land/std/testing
Deno.test("basket of fruit should contain apples", () => {
  const fruits = ["🍌", "🍎", "🍍", "🍓"];
  assertArrayContains(fruits, ["🍎"]);
});

// Deno can also run tests remotely, meaning you can run your test suite without pulling it down (CI).
// deno test https://raw.githubusercontent.com/denoland/deno/master/std/fmt/colors_test.ts
