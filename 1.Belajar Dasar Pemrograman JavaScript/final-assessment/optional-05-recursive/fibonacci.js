function fibonacci(n) {
  // Fungsi rekursif untuk menghitung angka Fibonacci
  function fib(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }

  const result = [];

  // Mengisi array result dengan angka Fibonacci dari 0 sampai n
  for (let i = 0; i <= n; i++) {
    result.push(fib(i));
  }

  return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
