function factorial(n) {
  //Jika 0 atau 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    //Jika bukan 0 atau 1, return n * factorial(n - 1)
    return n * factorial(n - 1);
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;
