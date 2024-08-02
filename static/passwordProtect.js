(function() {
  function checkPassword() {
    var password = sessionStorage.getItem('sitePassword');
    if (password !== '74177') {
      var userInput = prompt('Enter password:');
      if (userInput === '74177') {
        sessionStorage.setItem('sitePassword', userInput);
      } else {
        alert('Incorrect password.');
        window.location.href = '/'; // Redirect to home
      }
    }
  }

  // Run the password check when the page loads
  if (!sessionStorage.getItem('74177')) {
    checkPassword();
  }

  // Use Docusaurus lifecycle to handle route changes
  if (window.siteConfig && window.siteConfig.customFields) {
    window.siteConfig.customFields.onRouteUpdate = function() {
      if (!sessionStorage.getItem('sitePassword')) {
        checkPassword();
      }
    };
  }
})();