console.log("Hello");

// Upon About Container click
$(".about-title").click(function() {
    console.log("about-title clicked");
    $(".about-container").text("Hello");
})

// Upon Project Container click
$(".project-title").click(function() {
    console.log("project-title clicked");
})

// Upon Conact Container click
$(".contact-title").click(function() {
    console.log("contact-title clicked");
})