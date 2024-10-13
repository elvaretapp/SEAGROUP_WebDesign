// Total target donasi
const targetAmount = 165000000;

// Total donasi yang telah terkumpul
let collectedAmount = 26815893;

// Element progress bar
const progressBar = document.querySelector('.progress');
const donationInput = document.getElementById('donationAmount');
const submitButton = document.getElementById('submitDonation');

// Fungsi untuk menghitung persentase donasi yang terkumpul
function calculateProgress() {
    return (collectedAmount / targetAmount) * 100;
}

// Fungsi untuk memperbarui tampilan progress bar
function updateProgressBar() {
    const progressPercentage = calculateProgress();
    progressBar.style.width = progressPercentage + '%';
}

// Fungsi untuk memproses donasi baru
function processDonation() {
    const donationAmount = parseInt(donationInput.value);
    
    if (donationAmount > 0) {
        collectedAmount += donationAmount;
        updateProgressBar();
        
        // Update informasi di halaman
        document.querySelector('.donation-section p').textContent = 
            `Terkumpul: Rp${collectedAmount.toLocaleString()} dari Rp${targetAmount.toLocaleString()}`;
        
        // Reset input field
        donationInput.value = '';
    } else {
        alert('Masukkan jumlah donasi yang valid.');
    }
}

// Tambahkan event listener pada tombol submit
submitButton.addEventListener('click', processDonation);

// Inisialisasi progress bar saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', updateProgressBar);
