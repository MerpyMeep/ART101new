$("#crAdd").click(function() {
    // variable for storing names

    // reach for this input field and grab the text from it
    let crName = $("#crName").val();
    $("#creature-list").append("<div>"+crName+","+"</div>");

    $("#crName").val("");
});
