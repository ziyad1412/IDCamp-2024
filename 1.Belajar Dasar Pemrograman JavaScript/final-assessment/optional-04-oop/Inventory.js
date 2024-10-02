/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = [];
  }

  //Implementasi method addItem
  addItem(item) {
    this.items.push(item);
  }

  //Implementasi method removeItem
  removeItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }

  //Implementasi method listItems
  listItems() {
    let details = "";
    //Loop gabungin string hasil setiap item
    for (let i = 0; i < this.items.length; i++) {
      details += this.items[i].displayDetails();
      //Cek apakah item terakhir atau bukan
      if (i < this.items.length - 1) {
        details += "\n";
      }
    }
    return details;
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
