document.addEventListener('DOMContentLoaded', function() {
  try {
    const emailLinks = document.querySelectorAll('.email-link');
    emailLinks.forEach(link => {
      try {
        const user = 'delstuff+web';
        const domain = 'gmail.com';
        if (user && domain) {
          link.setAttribute('href', 'mailto:' + user + '@' + domain);
          link.textContent = 'email';
        }
      } catch (error) {
        console.warn('Failed to process email link:', error.message);
      }
    });
  } catch (error) {
    console.warn('Email obfuscation failed:', error.message);
  }
});
