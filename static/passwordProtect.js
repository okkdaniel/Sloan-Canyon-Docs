// Create a file named passwordProtect.js in your Docusaurus static directory

(function() {
    function checkPassword() {
      var password = localStorage.getItem('sitePassword');
      if (password !== '74177') {
        var userInput = prompt('Please enter the password to access this site:');
        if (userInput === '74177') {
          localStorage.setItem('sitePassword', userInput);
        } else {
          alert('Incorrect password. Access denied.');
          window.location.href = '/'; // Redirect to home or login page
        }
      }
    }
  
    // Run the password check when the page loads
    checkPassword();
  
    // Intercept navigation events
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' && e.target.href.startsWith(window.location.origin)) {
        e.preventDefault();
        checkPassword();
        if (localStorage.getItem('sitePassword') === '74177') {
          window.location.href = e.target.href;
        }
      }
    });
  })();