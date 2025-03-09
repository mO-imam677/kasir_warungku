let total = 0;

function tambahBarang() {
    let hargaBarang = parseInt(document.getElementById("hargaBarang").value);
    let jumlahBarang = parseInt(document.getElementById("jumlahBarang").value);

    if (isNaN(hargaBarang) || hargaBarang <= 0 || isNaN(jumlahBarang) || jumlahBarang < 1) {
        alert("Masukkan harga dan jumlah barang yang valid!");
        return;
    }

    let subtotal = hargaBarang * jumlahBarang;
    total += subtotal;
    document.getElementById("totalHarga").textContent = total;

    // Kosongkan input setelah ditambahkan
    document.getElementById("hargaBarang").value = "";
    document.getElementById("jumlahBarang").value = "1";
}

function resetKeranjang() {
    total = 0; // Reset total harga
    document.getElementById("totalHarga").textContent = total;
    document.getElementById("kembalian").textContent = "0"; // Reset kembalian
    document.getElementById("uang").value = ""; // Kosongkan input uang
    document.getElementById("pesanTerimaKasih").style.display = "none"; // Sembunyikan pesan terima kasih
}

function hitungKembalian() {
    let uangDiberikan = parseInt(document.getElementById("uang").value);

    if (isNaN(uangDiberikan) || uangDiberikan < total) {
        alert("Uang tidak cukup atau belum dimasukkan!");
        document.getElementById("kembalian").textContent = "0";
        document.getElementById("pesanTerimaKasih").style.display = "none"; // Sembunyikan pesan
    } else {
        let kembalian = uangDiberikan - total;
        document.getElementById("kembalian").textContent = kembalian;
        document.getElementById("pesanTerimaKasih").style.display = "block"; // Tampilkan pesan terima kasih
    }
}
