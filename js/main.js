$(document).ready(function() {

  const modal = document.querySelectorAll('.modal'),
        modalThank = document.querySelector('.modalThank');

  $('.form_lead').on('submit', function (e) {
    var formsend = this;
    $.ajax({
      url: "/form.php",
      type: "POST",
      dataType: 'html',
      data: $(formsend).serialize(),
      success: function (response) {
        modal.forEach((modal) => {
          modal.classList.remove("modal--active");
          modalThank.classList.add('modal--active');
        })
      },
      error: function(response) {
        console.log(response);
      }
    });
    return false;
  });
});