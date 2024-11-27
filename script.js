document.getElementById('consultForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const successMessage = document.getElementById('successMessage');
  successMessage.classList.remove('hidden');

  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('date').value = '';
  document.getElementById('message').value = '';

  // Hide the success message after 5 seconds
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 5000);
});
