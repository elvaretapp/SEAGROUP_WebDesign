document.addEventListener('DOMContentLoaded', function() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const donationTotal = document.getElementById('donationTotal');
    const totalDonationDisplay = document.getElementById('totalDonationDisplay');
    const customAmountInput = document.getElementById('customAmount');
    const paymentMethodSelect = document.getElementById('paymentMethod');

    // Update payment method based on donation amount
    function updatePaymentMethods(amount) {
        if (amount >= 10000) {
            // Enable bank transfer options if amount >= 10,000
            paymentMethodSelect.querySelector('option[value="bca"]').disabled = false;
            paymentMethodSelect.querySelector('option[value="mandiri"]').disabled = false;
            paymentMethodSelect.querySelector('option[value="bri"]').disabled = false;
            paymentMethodSelect.querySelector('option[value="bni"]').disabled = false;
        } else {
            // Disable bank transfer options if amount < 10,000
            paymentMethodSelect.querySelector('option[value="bca"]').disabled = true;
            paymentMethodSelect.querySelector('option[value="mandiri"]').disabled = true;
            paymentMethodSelect.querySelector('option[value="bri"]').disabled = true;
            paymentMethodSelect.querySelector('option[value="bni"]').disabled = true;

            // Automatically switch to a non-bank option if currently selected
            if (['bca', 'mandiri', 'bri', 'bni'].includes(paymentMethodSelect.value)) {
                paymentMethodSelect.value = 'gopay'; // Default to GoPay
            }
        }
    }

    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const selectedAmount = this.getAttribute('data-amount');
            donationTotal.innerText = selectedAmount;
            totalDonationDisplay.innerText = 'Rp' + selectedAmount;
            updatePaymentMethods(parseInt(selectedAmount));
        });
    });

    customAmountInput.addEventListener('input', function() {
        const customAmount = parseInt(this.value);
        if (!isNaN(customAmount)) {
            donationTotal.innerText = customAmount;
            totalDonationDisplay.innerText = 'Rp' + customAmount;
            updatePaymentMethods(customAmount);
        }
    });

    // Handle close button (X) to go back to the donation list page
    window.goBackToDonations = function() {
        window.location.href = '../donasi.html'; // Redirect to donasi.html
    }

    // Handle donate button
    window.handleDonate = function() {
        const selectedAmount = donationTotal.innerText;
        alert('Terima kasih atas donasi sebesar Rp' + selectedAmount + '!');
        window.location.href = '../donasi.html'; // Redirect to donasi.html after the alert
    }
});
