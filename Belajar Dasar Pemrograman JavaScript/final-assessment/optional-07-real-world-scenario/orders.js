// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  let totalPrice = 0;
  // Hitung total harga menggunakan loop for
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      orders[i].status = status; // Update status
      break; // Hentikan loop setelah menemukan dan memperbarui
    }
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let totalRevenue = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "Selesai") {
      totalRevenue += orders[i].totalPrice; // Tambahkan totalPrice
    }
  }
  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const newOrders = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id !== id) {
      newOrders.push(orders[i]); // Tambahkan order yang tidak dihapus
    }
  }
  orders = newOrders; // Perbarui orders dengan yang baru
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
