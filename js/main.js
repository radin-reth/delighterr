$('.select2-component').select2();
$('.select2-engagement').select2({
  placeholder: "Silver Package (default)",
});

$('.selectpicker').selectpicker({
  style: 'btn-default',
  size: false
});

$('.collapse').on('show.bs.collapse', function() {
  $(this).parent().find(".glyphicon-chevron-right").addClass("animate");
}).on('hide.bs.collapse', function(){
  $(this).parent().find(".glyphicon-chevron-right").removeClass("animate");
});


var addressPicker = new AddressPicker();

$('#home').typeahead(null, {
  displayKey: 'description',
  source: addressPicker.ttAdapter()
});

$(window).load(function()
{
   var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###)### - ####"}];
    $('#phone').inputmask({ 
        mask: phones, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} });
});

$('.date-picker').datepicker({
    format: "MM dd, yyyy"
});