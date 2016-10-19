$('.select2-component').select2();

$('.selectpicker').selectpicker({
  style: 'btn-default',
  size: false
});

// $('#accordion1').on('show.bs.collapse', function () {
//   debugger;
// })

$('.collapse').on('show.bs.collapse', function() {
  $(this).parent().find(".glyphicon-chevron-right").addClass("animate");
}).on('hide.bs.collapse', function(){
  $(this).parent().find(".glyphicon-chevron-right").removeClass("animate");
});