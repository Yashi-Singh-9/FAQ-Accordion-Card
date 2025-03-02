document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    // Function to close all accordion items
    function closeAllAccordions() {
        accordionHeaders.forEach((header) => {
            header.classList.remove("selected");
            header.querySelector(".accordion-body").style.display = "none";
            header.querySelector("img").style.transform = "rotate(0deg)";
            header.querySelector(".accordion-button").style.color = "hsl(240, 6%, 50%)"; // Default color
            header.querySelector(".accordion-button").style.fontWeight = "400"; // Default weight
        });
    }

    // Open the second question by default
    const defaultOpen = accordionHeaders[1]; // Second question
    if (defaultOpen) {
        defaultOpen.classList.add("selected");
        defaultOpen.querySelector(".accordion-body").style.display = "block";
        defaultOpen.querySelector("img").style.transform = "rotate(180deg)";
        defaultOpen.querySelector(".accordion-button").style.color = "hsl(238, 29%, 16%)"; // Active color
        defaultOpen.querySelector(".accordion-button").style.fontWeight = "700"; // Bold text
    }

    // Add event listener to each header
    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            // If clicking the already open one, close it
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
                this.querySelector(".accordion-body").style.display = "none";
                this.querySelector("img").style.transform = "rotate(0deg)";
                this.querySelector(".accordion-button").style.color = "hsl(240, 6%, 50%)"; // Default color
                this.querySelector(".accordion-button").style.fontWeight = "400"; // Default weight
            } else {
                // Close all and open the clicked one
                closeAllAccordions();
                this.classList.add("selected");
                this.querySelector(".accordion-body").style.display = "block";
                this.querySelector("img").style.transform = "rotate(180deg)";
                this.querySelector(".accordion-button").style.color = "hsl(238, 29%, 16%)"; // Active color
                this.querySelector(".accordion-button").style.fontWeight = "700"; // Bold text
            }
        });
    });
});