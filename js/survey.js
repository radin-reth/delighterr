$( "#survey" ).submit(function( event ) {
  toastr.success('Your survey has been sent!', 'Thanks you');
  event.preventDefault();
});
