document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.numbers span');
    const submitButton = document.getElementById('my-button');
    let selectedRating = 0;

    // Add click event listeners to numbers
    numbers.forEach(number => {
        number.addEventListener('click', function() {
            // Update selected rating
            selectedRating = number.innerText;
        });
    });

  submitButton.addEventListener('click', function() {
        // Hide the rating state
        document.querySelector('.rating-state').style.display = 'none';

        // Show the thank you state
        document.querySelector('.thankyou-state').style.display = 'block';

        // Display the selected rating
        const resultMessage = document.querySelector('.result-message');
        resultMessage.textContent = `You selected ${selectedRating} out of 5`;
    });
});
