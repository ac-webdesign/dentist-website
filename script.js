
// HERO SECTION CHANGING PHOTOS
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.hero-right .photo');
    let currentIndex = 0;
  
    setInterval(() => {
      photos[currentIndex].classList.remove('active'); // Remove active class from current
      currentIndex = (currentIndex + 1) % photos.length; // Move to the next photo
      photos[currentIndex].classList.add('active'); // Add active class to the next photo
    }, 3000); // Change every 3 seconds
  });
  

  // TABS EFFECT
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');
    const aboutRight = document.querySelectorAll('.about-right')

    const revealHero = () => {
        const hero = document.querySelector('.hero-left-container')
        
        hero.classList.add('show');
    }
    const revealTabs = () => {
        tabs.forEach((tab, index) => {
            const tabTop = tab.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (tabTop < windowHeight - 100) {
                setTimeout(() => {
                    tab.classList.add('show');
                }, index * 200); // Sequential delay for each tab
            }
        });
    };
    const revealAbout = () => {
      aboutRight.forEach((about, index) => {
          const tabTop = about.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (tabTop < windowHeight - 100) {
              setTimeout(() => {
                  about.classList.add('show');
              }, index * 200); // Sequential delay for each tab
          }
      });
  };
  
    // Run on scroll
    window.addEventListener('scroll', revealTabs);
    window.addEventListener('scroll', revealAbout);

    // Run on page load in case some tabs are already in view
    revealTabs();
    revealAbout();
    revealHero();
});