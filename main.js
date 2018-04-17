$('#click').click(function () {
    $(this).toggleClass('active');
    $('.leftcol').toggleClass('toggle');
    $('.overlay').toggleClass('gray');
});

$('#toonVoertuigen').click(function () {
    $('#showZoekenVoertuigen').show('slow');
    $('#verbergVoertuigen').show('slow');
    $('#toonVoertuigen').hide('slow');
});

$('#verbergVoertuigen').click(function () {
    $('#showZoekenVoertuigen').hide('slow');
    $('#verbergVoertuigen').hide('slow');
    $('#toonVoertuigen').show('slow');
});

$('.wasbeurtZoeken').on('click', function () {
    $('.zoek2').show('slow');
});

$('.hideSearch').on('click', function () {
    $('.zoek2').hide('slow');
});
