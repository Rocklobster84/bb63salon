window.addEventListener('DOMContentLoaded', function() {
 var modal = document.getElementById('myModal');
 var closeButton = document.getElementsByClassName('close')[0];

 modal.style.display = 'block';

 closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
 });

 window.addEventListener('click', function(event) {
  if (event.target == modal) {
   modal.style.display = 'none';
  }
 });
});
