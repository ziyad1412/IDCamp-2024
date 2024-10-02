import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// Test 1: penjumlahan angka positif
test("1 + 2 = 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

// Test 2: penjumlahan angka negatif
test("-1 + -2 = -3", () => {
  assert.strictEqual(sum(-1, -2), -3);
});

// Test 3: penjumlahan angka positif negatif
test("1 + -1 = 0", () => {
  assert.strictEqual(sum(1, -1), 0);
});

// Test 4: penjumlahan angka 0
test("0 + 0 = 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});
