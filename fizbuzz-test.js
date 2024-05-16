// Buat loop yang mencetak angka 1-100, JIKA kelipatan 3 maka outputnya "Fizz" , JIKA kelipatan 5 outputnya "Buzz" dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz'

// Langkah 1: Buat perulangan (loop) yang akan berjalan dari angka 1 hingga 100.
for (let i = 1; i <= 100; i++) {
  // Langkah 2: Periksa kelipatan 3 dan 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // Langkah 3: Periksa kelipatan 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // Langkah 4: Periksa kelipatan 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Langkah 5: Cetak angka jika tidak ada kondisi yang terpenuhi
  else {
    console.log(i);
  }
}

// Algorithm:
// 1. Buat loop yang mencetak angka 1-100
// 2. Jika i % 3 === 0 dan i % 5 === 0, maka outputnya FizzBuzz
// 3. Jika i % 3 === 0, maka outputnya Fizz
// 4. Jika i % 5 === 0, maka outputnya Buzz
// 5. Jika tidak memenuhi kondisi di atas, maka outputnya angka i
// 6. Ulangi langkah no 2-5 sampai i = 100
// 7. Selesai
