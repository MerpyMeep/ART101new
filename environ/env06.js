// --- Main Content ---
let title = "Field of Flowers";
let description = "Under the sky there appears to be an endless field of flowers. The petals shimmer in the sunlight, and the air hums with life. Step carefully, for every bloom has its own secrets to share.";
let elements = ["Fire", "Water", "Wind", "Earth"];
let butterfly = { name: "Wanderer", description: "A wandering butterfly messenger of blooms", image: "https://www.freeiconspng.com/uploads/transparent-butterflies-png-19.png" };

// Save original content
let originalContent = `
<h2>${title}</h2>
<p>${description}</p>
<h3>A Special Bloom: Golden Sunflower</h3>
<img src="https://www.freeiconspng.com/uploads/sunflower-png-13.png" alt="Golden Sunflower" class="random-flower">
<p>A large sunflower with vibrant yellow petals. It blooms only in the presence of sunlight.</p>
`;

// --- Functions ---
function restoreMainPage() {
    $("#output").html(originalContent);
    renderElements();
    $("#characters").html(`<h3>Character: Butterfly</h3><img src="${butterfly.image}" alt="${butterfly.name}"><p>${butterfly.description}</p>`);
    $("body").css("background-image", "url(https://www.goodfreephotos.com/albums/united-states/texas/austin/blue-flower-field-in-austin-texas.jpg)");
}

// Element pages
function changeEnvironmentByElement(elementType) {
    $("#output, #characters, #elements").empty();

    let imgUrl, descriptionText, gradient;

    switch(elementType) {
        case "Fire":
            imgUrl = "https://media.istockphoto.com/id/183862714/photo/red-hot-flames-of-fire-isolated-on-black.jpg";
            descriptionText = "Sparks and flames dance across the petals, warming the field.";
            gradient = "linear-gradient(to bottom, #ff9a9e, #fecfef)";
            break;
        case "Water":
            imgUrl = "https://plus.unsplash.com/premium_photo-1669863914833-85bbca9d730e";
            descriptionText = "Gentle waves ripple through the flowers.";
            gradient = "linear-gradient(to bottom, #a1c4fd, #c2e9fb)";
            break;
        case "Wind":
            imgUrl = "https://media.istockphoto.com/id/499376168/photo/stormy-clouds-dramatic-sky.jpg";
            descriptionText = "The breeze carries petals in a delicate dance.";
            gradient = "linear-gradient(to bottom, #d4fc79, #96e6a1)";
            break;
        case "Earth":
            imgUrl = "https://www.greenpeace.org.au/static/planet4-australiapacific-stateless/2024/02/2ddc4190-gp0strvj1_web_size.jpg";
            descriptionText = "The soil is rich and fertile beneath your feet.";
            gradient = "linear-gradient(to bottom, #fdfbfb, #ebedee)";
            break;
        default:
            imgUrl = "https://via.placeholder.com/600x400";
            descriptionText = "";
            gradient = "url('https://www.goodfreephotos.com/albums/united-states/texas/austin/blue-flower-field-in-austin-texas.jpg')";
    }

    $("body").css("background-image", gradient);

    $("#output").html(`<h2>${elementType}</h2><img src="${imgUrl}" alt="${elementType}" style="max-width:100%; border-radius:12px;"><p>${descriptionText}</p>`);

    let backBtn = $('<button id="back-button" class="element-button">Back to Main Page</button>');
    backBtn.on("click", restoreMainPage);
    $("#elements").append(backBtn);
}

// Render element buttons
function renderElements() {
    let $elementsDiv = $("#elements");
    $elementsDiv.empty();
    $elementsDiv.append("<h3>Elements of Nature:</h3>");
    elements.forEach(element => {
        let button = $(`<button class="element-button">${element}</button>`);
        button.on("click", () => changeEnvironmentByElement(element));
        $elementsDiv.append(button);
    });
}

// --- Initialize page ---
$(document).ready(function () {
    $("#output").html(originalContent);
    renderElements();
    $("#characters").html(`<h3>Character: Butterfly</h3><img src="${butterfly.image}" alt="${butterfly.name}"><p>${butterfly.description}</p>`);

    // Side butterflies
    $(".decor-butterfly").on("click", function() {
        $(this).animate({ top: "-=500px", left: "+=" + (Math.random() * 300 - 150) + "px", opacity: 0 }, 1000, function(){ $(this).remove(); });
    }).hover(
        function() { $(this).css("transform","scale(1.5)"); },
        function() { $(this).css("transform","scale(1)"); }
    );

    // Wisteria animation
    function animateWisteria() {
        $("#wisteria-border").animate({ top: "-40px" }, 3000).animate({ top: "-60px" }, 3000, animateWisteria);
    }
    animateWisteria();
});

// Sunflower hover
$(document).on("mouseenter", ".random-flower", function() {
    $(this).stop().animate({ width: "450px", top: "-=10px" }, 300).css("transform", "rotate(-5deg)").css("filter", "drop-shadow(0 0 15px gold)");
});
$(document).on("mouseleave", ".random-flower", function() {
    $(this).stop().animate({ width: "400px", top: "+=10px" }, 300).css("transform", "rotate(0deg)").css("filter", "none");
});

// --- Arrow keys: seasons + petals ---
$(document).on("keydown", function(e) {
    $("body").css("transition","background 0.6s ease");

    // Petals only on arrow press
    createPetalsBurst();

    if(e.key==="ArrowLeft") $("body").css("background-image","url('https://www.goodfreephotos.com/albums/united-states/texas/austin/blue-flower-field-in-austin-texas.jpg')");
    if(e.key==="ArrowRight") $("body").css("background-image","url('https://images.unsplash.com/photo-1577862236121-c237c73ef4ed?fm=jpg&q=60&w=3000')");
    if(e.key==="ArrowUp") $("body").css("background-image","url('https://www.marthastewart.com/thmb/EEaDEMfBcuwsSS1D9kq8_gTm2F4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-fall-flowers-garden-lead-getty-0823-7eedbcc7ada245c4a1156c838a173c08.jpg')");
    if(e.key==="ArrowDown") $("body").css("background-image","url('https://images.unsplash.com/photo-1454923077067-323a62ed11e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')");
});

// --- Petals function ---
function createPetalsBurst() {
    for(let i=0;i<20;i++){
        let petal = $("<img>");
        petal.attr("src","./petals.png").addClass("falling-petal");
        let startX = Math.random() * window.innerWidth;
        let finalX = startX + (Math.random()*300-150);
        petal.css({position:"fixed", top:"-50px", left:startX+"px", width:"40px", opacity:Math.random()+0.5, zIndex:9999, pointerEvents:"none"});
        $("body").append(petal);
        petal.animate({top:window.innerHeight+"px", left:finalX+"px", opacity:0}, 2000+Math.random()*1000, function(){ petal.remove(); });
    }
}
