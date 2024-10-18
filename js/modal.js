window.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const closeButton = document.getElementsByClassName('close')[0];

  if (modal && closeButton) {
    modal.style.display = 'block';

    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  } else {
    console.error('Modal or close button not found');
  }
});
