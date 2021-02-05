console.log("Hello");

// Toggle displays of the containers
const toggleDisplay = (target, otherContainer01, otherContainer02) => {
    $(otherContainer01).hide(1000);
    $(otherContainer02).hide(1000);
    $(target).toggle("slow");
}

const classChange = (target, other01, other02) => {
    $(other01).removeClass("active").addClass("inactive");
    $(other02).removeClass("active").addClass("inactive");
    if($(target).hasClass("active")) {
        $(target).addClass("inactive").removeClass("active");
    } else {
        $(target).addClass("active").removeClass("inactive");
    }
}

// Upon About Container click
$(".about-title").click(function() {
    console.log("about-title clicked");
    const about = $(".about-container");
    toggleDisplay(".about-container", ".project-container", ".contact-container");
    classChange(".about-title h1", ".project-title h1", ".contact-title h1");
})

// Upon Project Container click
$(".project-title").click(function() {
    console.log("project-title clicked");
    const project = $(".project-container");
    toggleDisplay(".project-container", ".about-container", ".contact-container");
    classChange(".project-title h1", ".about-title h1", ".contact-title h1");
})

// Upon Conact Container click
$(".contact-title").click(function() {
    console.log("contact-title clicked");
    const contact = $(".contact-container");
    toggleDisplay(".contact-container", ".about-container", ".project-container");
    classChange(".contact-title h1", ".project-title h1", ".about-title h1");
})