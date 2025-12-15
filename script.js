// Get necessary elements
const checkboxBox = document.getElementById('checkbox-box');
const challengeModal = document.getElementById('challenge-modal');
const verifyButton = document.getElementById('verify-button');
const submitButton = document.getElementById('submit-button');
const checkMark = checkboxBox.querySelector('.check-mark');

// State variable to track if the user is verified
let isVerified = false;

// --- Function to handle the initial checkbox click ---
checkboxBox.addEventListener('click', () => {
    if (isVerified) {
        // If already verified, clicking it should unverify (optional, but realistic)
        checkboxBox.classList.remove('checked');
        checkMark.innerHTML = ''; // Clear the checkmark content
        isVerified = false;
        submitButton.disabled = true;
        challengeModal.style.display = 'none';
        return;
    }

    // 1. Show the thinking animation (simulated)
    checkboxBox.classList.add('thinking');
    checkMark.innerHTML = '...'; 

    // 2. Simulate a delay before showing the challenge or success
    setTimeout(() => {
        // In a real scenario, this is where the logic determines if a challenge is needed.
        const needsChallenge = true; // For this mock, we'll always show the challenge first.

        if (needsChallenge) {
            // 3. If a challenge is needed, show the modal
            checkboxBox.classList.remove('thinking');
            checkMark.innerHTML = ''; 
            challengeModal.style.display = 'block';
        } else {
            // 3. If no challenge is needed (instant success)
            checkboxBox.classList.add('checked');
            checkMark.innerHTML = '&#x2713;'; // Check mark Unicode character
            isVerified = true;
            submitButton.disabled = false;
        }

    }, 500); // 0.5 second delay
});

// --- Function to handle clicks on the grid squares ---
function toggleSquare(square) {
    square.classList.toggle('selected');
}

// --- Function to handle the Verify button click ---
verifyButton.addEventListener('click', () => {
    // 1. Hide the modal
    challengeModal.style.display = 'none';

    // 2. Start "Verifying" thinking state
    checkboxBox.classList.add('thinking');
    checkMark.innerHTML = '...'; 

    // 3. Simulate another delay for verification
    setTimeout(() => {
        // Simulate a successful verification
        checkboxBox.classList.remove('thinking');
        
        // Final success state
        checkboxBox.classList.add('checked');
        checkMark.innerHTML = '&#x2713;'; // Check mark Unicode character
        isVerified = true;
        submitButton.disabled = false;
        
    }, 1000); // 1 second delay
});

// Optional: Submit button action
submitButton.addEventListener('click', () => {
    if (isVerified) {
        alert('Verification successful! Form submitted.');
    } else {
        alert('Please verify you are not a robot first.');
    }
});
