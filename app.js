

const navButtons = document.querySelectorAll(".nav-button");
const navigation = document.querySelector(".navigation");
const dropdownButtons = document.querySelectorAll(".dropdown-button");
const darkenBackground = document.querySelector(".darken");

/* For opening and closing the navigation */

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(navigation.classList.contains("active")) {
            navigation.classList.toggle("active");
            darkenBackground.classList.toggle("active");
        }
        else {
            navigation.classList.add("active");
            darkenBackground.classList.add("active");
        }
    });
});

/* For displaying and hiding the dropdown menu content */

dropdownButtons.forEach((button) => {
    button.addEventListener("click", () => {
        var dropdownArrow = button.firstElementChild.firstElementChild;
        if(button.parentNode.classList.contains("active")) {
            button.parentNode.classList.toggle("active");
            if(dropdownArrow.getAttribute("src") === "images/icon-arrow-up.svg") {
                dropdownArrow.src = "images/icon-arrow-down.svg";
            }
        }
        else {
            button.parentNode.classList.add("active");
            if(dropdownArrow.getAttribute("src") === "images/icon-arrow-down.svg") {
                dropdownArrow.src = "images/icon-arrow-up.svg";
            }
        }
    });
});
