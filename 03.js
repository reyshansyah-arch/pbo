class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(this.nama + " sedang belajar.");
  }

  info() {
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}`);
  }
}

class MahasiswaS1 extends Mahasiswa {
  ujian() {
    console.log(this.nama + " sedang ujian skripsi.");
  }
}

class MahasiswaS2 extends Mahasiswa {
  tugas() {
    console.log(this.nama + " sedang mengerjakan tugas penelitian.");
  }
}

// Membuat object
const mhs1 = new Mahasiswa("reyshan syah", "0016", "Informatika");
const mhs2 = new MahasiswaS1("madi abdulah", "0089", "Sistem Informasi");
const mhs3 = new MahasiswaS2("siti maulidia", "0067", "Teknik Komputer");

// Pemanggilan method
mhs1.belajar();   // Ilqi sedang belajar.
mhs1.info();      // Nama: reyshan, NIM: 0016, Jurusan: Informatika

mhs2.ujian();     // Budi sedang ujian skripsi.
mhs3.tugas();     // Sari sedang mengerjakan tugas penelitian.
