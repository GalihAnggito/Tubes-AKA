// Referensi elemen HTML
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const algorithmSelect = document.getElementById("algorithm");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");

// Algoritma FPB (Iteratif)
function fpbIteratif(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Algoritma KPK (Iteratif)
function kpkIteratif(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) {
      return max;
    }
    max++;
  } 
}

// Algoritma FPB (Rekursif)
function fpbRekursif(a, b) {
  if (b === 0) return a;
  return fpbRekursif(b, a % b);
}

// Algoritma KPK (Rekursif) berdasarkan FPB
function kpkRekursif(a, b, fpbFunction) {
  const fpb = fpbFunction(a, b);
  return (a * b) / fpb; // Rumus: KPK = (a * b) / FPB
}

// Validasi Input
function isValidInput(value) {
  return Number.isInteger(value) && value > 0;
}

// Event Listener untuk tombol "Hitung"
calculateBtn.addEventListener("click", () => {
  // Ambil nilai input
  const num1 = parseInt(num1Input.value);
  const num2 = parseInt(num2Input.value);
  const selectedAlgorithm = algorithmSelect.value;

  // Reset pesan error dan hasil
  errorDiv.innerHTML = "";
  resultDiv.innerHTML = "";

  // Validasi input
  if (!isValidInput(num1) || !isValidInput(num2)) {
    errorDiv.innerHTML = "Harap masukkan bilangan bulat positif!";
    return;
  }

  let fpb, kpk;

  if (selectedAlgorithm === "iterative") {
    fpb = fpbIteratif(num1, num2);
    kpk = kpkIteratif(num1, num2);
  } else if (selectedAlgorithm === "recursive") {
    fpb = fpbRekursif(num1, num2);
    kpk = kpkRekursif(num1, num2, fpbRekursif);
  }

  // Tampilkan hasil
  resultDiv.innerHTML = `
    <p>Metode: ${selectedAlgorithm === "iterative" ? "Iteratif" : "Rekursif"}</p>
    <p>FPB: ${fpb}</p>
    <p>KPK: ${kpk}</p>
  `;
});

// Tema Gelap/Terang
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeSwitch.textContent = "☀ Mode Terang";
  } else {
    themeSwitch.textContent = "🌙 Mode Gelap";
  }
});