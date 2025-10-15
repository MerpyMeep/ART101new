let count = 0;
$("#needy-button") .click( function() {
    count = count + 1;

    let sentence = "I was clicked ";

    $("#needy-button").html("You clicked me " + count + " times");
});