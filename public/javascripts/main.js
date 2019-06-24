$(document).ready(function(){
    $('select').formSelect();
});

$('#randomSelect').change(function(){
    if($("#randomSelect").val() === 'rw') { // Weighted random
        alert('its weighted random');
    } else {
        alert('its list random');
    }
});

// Will have to add :
/*
<div class="row owPair">
  <div class="col s4">
    <input class="option" placeholder="Option" type="text" />
  </div>
  <div class="col s4">
    <input class="weight" placeholder="Weight" type="text" />
  </div>
  <a class="waves-effect waves-light btn red">Remove</a>
</div>
 */
// to add options