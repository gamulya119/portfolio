document.addEventListener('DOMContentLoaded', () => {
  // Select the back button and the links inside the right-side tabs
  const animatedLinks = document.querySelectorAll('.back-link, .nav-right-tabs a');

  animatedLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Stop immediate navigation
      
      const navTabs = document.querySelector('.nav-right-tabs');
      const backBtn = document.querySelector('.back-link');
      const targetUrl = this.href;

      // Trigger the exit animations for both elements
      if (navTabs) navTabs.style.animation = 'slideBackToCenter 0.4s ease-in forwards';
      if (backBtn) backBtn.style.animation = 'slideOutLeft 0.4s ease-in forwards';

      // Wait 350ms for the animation to finish, then go to the page
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 350);
    });
  });
});
