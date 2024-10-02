// Async
// console.log("Memulai proses...");
// setTimeout(() => {
//   console.log("Proses selesai setelah 2 detik!");
// }, 2000);
// console.log("Melanjutkan proses lainnya...");

//Callback
// function makeCoffee(callback) {
//   setTimeout(() => {
//     callback("Kopi siap!");
//   }, 2000);
// }

// console.log("Memesan kopi...");
// makeCoffee((message) => {
//   console.log(message); // Akan menampilkan "Kopi siap!" setelah 2 detik.
// });

// Error Callback
// function makeCoffee(order, callback) {
//   if (order === "Kopi") {
//     setTimeout(() => {
//       callback(null, "Kopi berhasil dibuat");
//     }, 2000);
//   } else {
//     callback("Pesanan tidak valid");
//   }
// }

// makeCoffee("Teh", (error, data) => {
//   if (error) {
//     console.error(error); // Menampilkan "Pesanan tidak valid"
//   } else {
//     console.log(data);
//   }
// });

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
