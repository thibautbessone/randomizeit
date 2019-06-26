const animDelay = 100; // ms

const newOptionHtml =
    '<div class="row owPair">\n' +
    '  <div class="col s4">\n' +
    '    <input class="option" placeholder="Option" type="text" />\n' +
    '  </div>\n' +
    '  <div class="col s4">\n' +
    '    <input class="weight" placeholder="Weight" type="text" />\n' +
    '  </div>\n' +
    '  <div class="col s4">\n' +
    '  <a class="waves-effect waves-light btn red removeBtn">Remove</a>\n' +
    '  </div>\n' +
    '</div>';

const newEntryHtml =
    '<div class="row listEntry">\n' +
    '  <div class="col s8">\n' +
    '    <input class="option" placeholder="Option" type="text" />\n' +
    '  </div>\n' +
    '  <div class="col s4">\n' +
    '  <a class="waves-effect waves-light btn red removeBtn">Remove</a>\n' +
    '  </div>\n' +
    '</div>';

$(document).ready(function() { // Materialize.css select
    $('select').formSelect();
});

$('#randomSelect').change(function() { // I don't like callbacks
    if($("#randomSelect").val() === 'rw') { // Weighted random
        $('#listRandom').fadeOut(animDelay, function () {
            $('#weightedRandom').fadeIn(animDelay);
        });
    } else {
        $('#weightedRandom').fadeOut(animDelay, function () {
            $('#listRandom').fadeIn(animDelay);
        });
    }
});


$('.newOption').on('click', function () {
    $(this).closest('.row').after(newOptionHtml);
});

$('.newEntry').on('click', function () {
    $(this).closest('.row').after(newEntryHtml);
});

$('.row').on('click', '.removeBtn', function () {
    $(this).closest('.row').remove();
});

$('.submitOWBtn').click(function () {
    // Constructing JSON array dynamically yeet
    let optionsString = '[';
    $('.owPair').each(function () {
        optionsString += '{"option": "' + $(this).find('.option').val() + '", "weight": ' + $(this).find('.weight').val() + '},';
    });
    optionsString = optionsString.slice(0, -1) + ']';
    $.ajax({
        traditional: true,
        type: 'POST',
        url: window.location.pathname + 'random/weighted',
        data: {
            options: optionsString
        },
        success: function (msg) {
            alert(msg);
        }
    });
});

$('.submitListBtn').click(function () {
    alert('lol');
});