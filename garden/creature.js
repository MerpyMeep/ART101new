let crName = $("#crName").val();
let crColor = $("#crColor").val();
let crEyesNum = $("#crEyesNum").val();

$("#creature-list").append(`
    <div class="creatures">
        <div class="creature-body"></div>
        <div class="creature-info">${crName}</div>
    </div>
`);

<div class="creature-body" style="background-color: ${crColor}"></div>

let crEyesHTML = "";
for (let i = 0; i < crEyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
}

<div class="creature-body" style="background-color: ${crColor}">${crEyesHTML}</div>

$("#crAdd").click(function() {
    // variable for storing names

    // reach for this input field and grab the text from it
    let crName = $("#crName").val();
    $("#creature-list").append("<div>"+crName+"</div>");

    $("#crName").val("");
});

