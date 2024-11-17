// script.js

// Add spooky animation to header text
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.style.transition = 'text-shadow 0.5s, color 0.5s';
  
    // Add glowing red effect on hover
    header.addEventListener('mouseover', () => {
      header.style.textShadow = '0 0 10px #800000, 0 0 20px #ff0000';
      header.style.color = '#800000'; // Deep red
    });
  
    header.addEventListener('mouseout', () => {
      header.style.textShadow = 'none';
      header.style.color = '#fff'; // White
    });
  
    // Add click sound effect when clicking the header
    header.addEventListener('click', () => {
      const audio = new Audio('click-sound.mp3'); // Replace with your sound file
      audio.play();
    });
  });
  
  // Interactive gallery hover effect
  const galleryItems = document.querySelectorAll('.gallery .item');
  galleryItems.forEach((item) => {
    // Add eerie zoom-in effect
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.1) rotate(2deg)';
      item.style.boxShadow = '0 0 15px #800000';
    });
  
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1) rotate(0deg)';
      item.style.boxShadow = 'none';
    });
  
    // Add "ghostly" text effect on click
    item.addEventListener('click', () => {
      item.textContent = 'Boo! 👻';
      setTimeout(() => {
        item.textContent = 'Hovered Item';
      }, 1000);
    });
  });
      