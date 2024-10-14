window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Membuat elemen audio secara dinamis dan memutarnya
    const audio = new Audio("path/Song.mp3");
    audio.play();

    // Lirik lagu per baris dan durasi dalam milidetik sesuai tempo
    const lyrics = [
      { text: "I hope he buys you flowers", duration: 1000 },
      { text: "I hope he holds your hand", duration: 1000 },
      { text: "Give you all his hours", duration: 1000 },
      { text: "When he has the chance", duration: 2000 },
      { text: "Take to every party", duration: 2000 },
      { text: "'Cause I remember how much you loved to dance", duration: 1000 },
      { text: "Do all the things I should have done", duration: 1000 },
      { text: "When I was your man", duration: 1000 },
      { text: "Do all the things I should have done", duration: 1000 },
      { text: "When I was your man", duration: 2000 }
    ];

    const titleElement = document.getElementById('title');
    let index = 0;

    function typeLyric(text, duration) {
      titleElement.innerHTML = ""; // Clear previous text
      titleElement.style.fontSize = "2rem"; // Ukuran teks
      titleElement.style.lineHeight = "1.5"; // Jarak antar baris
      titleElement.style.color = "white"; // Warna teks
      titleElement.style.textAlign = "center"; // Rata tengah

      let charIndex = 0;
      let typingInterval;

      function typeCharacter() {
        if (charIndex < text.length) {
          titleElement.innerHTML += text.charAt(charIndex); // Tambahkan karakter
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Setelah selesai mengetik, tunggu durasi sebelum melanjutkan ke lirik berikutnya
          setTimeout(() => {
            index = (index + 1) % lyrics.length; // Pindah ke lirik berikutnya
            typeLyric(lyrics[index].text, lyrics[index].duration); // Panggil lagi untuk lirik berikutnya
          }, duration);
        }
      }

      // Mulai mengetik dengan interval yang lebih pendek untuk tampilan lebih smooth
      typingInterval = setInterval(typeCharacter, 80);
    }

    // Mulai animasi lirik
    typeLyric(lyrics[index].text, lyrics[index].duration);

    clearTimeout(c);
  }, 1000);
};
