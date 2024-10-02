const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  // Membuat objek employee baru berdasarkan nilai argumen fungsi
  const newEmployee = {
    name: name,
    email: email,
    joinYear: joinYear,
  };

  // Menambahkan objek employee baru ke dalam array employees
  employees.push(newEmployee);
}

addEmployee("Ziyad", "ziyad@dicoding.com", 2022);

// Menampilkan array employees setelah penambahan
console.log(employees);
