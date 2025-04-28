// You can add your JavaScript code here for any dynamic behavior
// For example, handling the form submission.
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Enrollment submitted!'); // Example action
    // You would typically send the form data to a server here.
});