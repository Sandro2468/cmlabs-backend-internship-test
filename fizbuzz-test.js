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
