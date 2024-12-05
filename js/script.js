// Ambil elemen yang dibutuhkan
const calculateBtn = document.getElementById("calculateBtn");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const bmiOutput = document.getElementById("bmiOutput");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const bmiMessage = document.getElementById("bmiMessage");

// Fungsi untuk menghitung BMI
function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Konversi cm ke meter

  if (!weight || !height || height <= 0) {
    alert("Silakan masukkan berat dan tinggi badan yang valid!");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);

  // Tampilkan hasil
  bmiValue.textContent = bmi;
  bmiOutput.style.display = "block";

  // Tentukan kategori BMI
  if (bmi < 18.5) {
    bmiCategory.textContent = "Kekurangan Berat Badan";
    bmiMessage.textContent = "Anda perlu menambah berat badan untuk mencapai berat ideal.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory.textContent = "Normal (Ideal)";
    bmiMessage.textContent = "Selamat! Berat badan Anda sudah ideal.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory.textContent = "Kelebihan Berat Badan";
    bmiMessage.textContent = "Anda perlu menjaga pola makan dan olahraga.";
  } else {
    bmiCategory.textContent = "Kegemukan (Obesitas)";
    bmiMessage.textContent = "Disarankan untuk konsultasi dengan dokter.";
  }
}

// Tambahkan event listener
calculateBtn.addEventListener("click", calculateBMI);
