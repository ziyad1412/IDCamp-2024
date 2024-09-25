function fibonacci(n) {
  const result = [];
  //Jika 0 atau 1 balikin sesuai angka
  if (n === 0) {
    result.push(0);
  } else if (n === 1) {
    result.push(0, 1);
  } else {
    result.push(0, 1);

    //Looping dari angka 2 sampai n
    for (let i = 2; i <= n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
