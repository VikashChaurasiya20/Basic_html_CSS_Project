
const letters = document.querySelectorAll('.letter span');
letters.forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.remove('active');
      // Force reflow to restart animation
      void el.offsetWidth;
      el.classList.add('active');
    });
  });