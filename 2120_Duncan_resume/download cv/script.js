
// Function to enable the Download button once reCAPTCHA is verified
function enableDownloadButton(response) {
    const downloadBtn = document.getElementById("downloadBtn");
    const downloadLink = document.getElementById("downloadLink");

    if (response) {
        downloadBtn.disabled = false;
        downloadLink.style.display = 'block'; // Show the download link and button
    } else {
        downloadBtn.disabled = true;
        downloadLink.style.display = 'none'; // Hide the download link if reCAPTCHA is not verified
    }
}

// Handling form submission
document.getElementById("cvForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    alert("Your CV is now ready to download!");
    // Form data can be processed here if needed
});