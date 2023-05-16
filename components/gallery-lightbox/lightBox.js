document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const $imagesContainer = document.getElementById('images-container');
    const $lightbox = document.getElementById('lightbox');
  
    // Get all the filter buttons
    const filterButtons = document.querySelectorAll('.button-container button');
    // Get all the images
    const images = document.querySelectorAll('.images-container img');
  
    // Lightbox
  
    // Event listeners and triggers
  
    // Show lightbox
    $imagesContainer.addEventListener('click', e => {
      const imageWrapper = e.target.closest('.image-wrapper');
      if (imageWrapper) {
        const image = imageWrapper.querySelector('img');
        if (image) {
          $lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML;
          $lightbox.classList.add('show');
        }
      }
    });
  
    // Hide Lightbox
    $lightbox.addEventListener('click', (e) => {
      if (!e.target.hasAttribute('src')) {
        $lightbox.classList.remove('show');
      }
    });
  
    // Loading...
    setTimeout(() => {
      $imagesContainer.classList.remove('loading');
    }, 1500);
  
    // Fade animation after images have finished loading
    window.onload = () => {
      // Add click event listeners to the filter buttons
      filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
          // Reset the active class on all filter buttons
          filterButtons.forEach((btn) => {
            btn.classList.remove('active');
          });
  
          // Add the active class to the clicked filter button
          button.classList.add('active');
  
          // Get the filter type from the clicked button
          const filterType = button.textContent.toLowerCase();
  
          // Apply fade animation to hide the images
          images.forEach((image) => {
            image.style.opacity = 0;
            image.style.transition = 'opacity 0.5s ease-in-out';
          });
  
          // Delay applying the filter to allow the fade animation to complete
          setTimeout(() => {
            // Loop through all the images and show/hide them based on the filter type
            images.forEach((image) => {
              if (filterType === 'all') {
                image.style.display = 'block';
                image.style.opacity = 1;
              } else if (filterType === 'alive') {
                image.style.display = image.classList.contains('alive') ? 'block' : 'none';
                if (image.style.display === 'block') {
                  image.style.opacity = 1;
                }
              } else if (filterType === 'not alive') {
                image.style.display = image.classList.contains('not-alive') ? 'block' : 'none';
                if (image.style.display === 'block') {
                  image.style.opacity = 1;
                }
              }
            });
          }, 500); // Adjust the delay time to match the animation duration
        });
      });
    };
  });
  