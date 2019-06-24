$(document).ready(function(){
    $('select').formSelect();
});

$('#randomSelect').change(function(){
    alert($("#randomSelect").val());
});