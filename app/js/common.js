$(function() {

	$("#search").click(function() {
    $("#navMenu").toggle(400, 'linear');
    $("#searchinput").toggle(400, 'linear');
});

$("#menue").mouseover(function() {
    $("#hidenContent").toggle(400, 'swing');
});

$("#hidenContent").mouseleave(function() {
    $("#hidenContent").toggle(400, 'swing');
});

});
