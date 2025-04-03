document.querySelector('.feedback-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
  }
  
  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
  }
  
  // Get existing feedback or create new array
  let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
  
  // Add new feedback
  feedbacks.push({
      name: name,
      email: email,
      message: message,
      date: new Date().toISOString(),
      read: false
  });
  
  // Save to localStorage
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  
  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  
  alert('Thank you for your feedback! We appreciate your input.');
});