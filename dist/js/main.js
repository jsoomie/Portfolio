console.log("Hello");

// Toggle displays of the containers
const toggleDisplay = (target, otherContainer01, otherContainer02) => {
    $(otherContainer01).hide(1000);
    $(otherContainer02).hide(1000);
    $(target).toggle("slow");
}

// Upon About Container click
$(".about-title").click(function() {
    console.log("about-title clicked");
    const about = $(".about-container");
    toggleDisplay(".about-container", ".project-container", ".contact-container");
})

// Upon Project Container click
$(".project-title").click(function() {
    console.log("project-title clicked");
    const project = $(".project-container");
    toggleDisplay(".project-container", ".about-container", ".contact-container");
})

// Upon Conact Container click
$(".contact-title").click(function() {
    console.log("contact-title clicked");
    const contact = $(".contact-container");
    toggleDisplay(".contact-container", ".about-container", ".project-container");
})