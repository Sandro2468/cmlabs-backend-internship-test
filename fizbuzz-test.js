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

// Penjelasan:
// 1. Jika i = 1, maka i % 3 = 1 dan i % 5 = 1, maka outputnya 1
// 2. Jika i = 2, maka i % 3 = 2 dan i % 5 = 2, maka outputnya 2
// 3. Jika i = 3, maka i % 3 = 0 dan i % 5 = 3, maka outputnya Fizz
// 4. Jika i = 4, maka i % 3 = 1 dan i % 5 = 4, maka outputnya 4
// 5. Jika i = 5, maka i % 3 = 2 dan i % 5 = 0, maka outputnya Buzz
// 6. Jika i = 6, maka i % 3 = 0 dan i % 5 = 1, maka outputnya Fizz
// 7. Jika i = 7, maka i % 3 = 1 dan i % 5 = 2, maka outputnya 7
// 8. Jika i = 8, maka i % 3 = 2 dan i % 5 = 3, maka outputnya 8
// 9. Jika i = 9, maka i % 3 = 0 dan i % 5 = 4, maka outputnya Fizz
// 10. Jika i = 10, maka i % 3 = 1 dan i % 5 = 0, maka outputnya Buzz
// 11. Jika i = 11, maka i % 3 = 2 dan i % 5 = 1, maka outputnya 11
// 12. Jika i = 12, maka i % 3 = 0 dan i % 5 = 2, maka outputnya Fizz
// 13. Jika i = 13, maka i % 3 = 1 dan i % 5 = 3, maka outputnya 13
// 14. Jika i = 14, maka i % 3 = 2 dan i % 5 = 4, maka outputnya 14
// 15. Jika i = 15, maka i % 3 = 0 dan i % 5 = 0, maka outputnya FizzBuzz
// 16. Jika i = 16, maka i % 3 = 1 dan i % 5 = 1, maka outputnya 16
// 17. Jika i = 17, maka i % 3 = 2 dan i % 5 = 2, maka outputnya 17
// 18. Jika i = 18, maka i % 3 = 0 dan i % 5 = 3, maka outputnya Fizz
// 19. Jika i = 19, maka i % 3 = 1 dan i % 5 = 4, maka outputnya 19
// 20. Jika i = 20, maka i % 3 = 2 dan i % 5 = 0, maka outputnya Buzz
// dan seterusnya sampai i = 100