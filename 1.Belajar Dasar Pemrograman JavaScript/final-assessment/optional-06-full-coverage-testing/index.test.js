import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Testing sum function", async (t) => {
  // Menguji penjumlahan dua bilangan positif
  assert.strictEqual(sum(2, 3), 5, "2 + 3 = 5");

  // Menguji penjumlahan dengan nol
  assert.strictEqual(sum(0, 0), 0, "0 + 0 = 0");
  assert.strictEqual(sum(0, 5), 5, "0 + 5 = 5");
  assert.strictEqual(sum(5, 0), 5, "5 + 0 = 5");

  // Menguji penjumlahan dengan bilangan negatif
  assert.strictEqual(sum(-1, 5), 0, "-1 + 5 = 0 (karena negatif)");
  assert.strictEqual(sum(5, -1), 0, "5 + -1 = 0 (karena negatif)");
  assert.strictEqual(sum(-5, -3), 0, "-5 + -3 = 0 (karena negatif)");

  // Menguji dengan parameter bukan angka
  assert.strictEqual(sum("2", 3), 0, '"2" + 3 = 0 (bukan angka)');
  assert.strictEqual(sum(2, "3"), 0, '2 + "3" = 0 (bukan angka)');
  assert.strictEqual(sum("a", "b"), 0, '"a" + "b" = 0 (bukan angka)');
});
