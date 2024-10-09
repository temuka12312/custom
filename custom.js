const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const page2 = document.getElementById("page-2");
const page1 = document.getElementById("page-1");

// Move "No" button when hovered
noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});

// Show popup and page 2 when "Yes" button is clicked
yesButton.addEventListener("click", () => {
    popup.style.display = "block"; // Show popup
    page1.style.display = "none";  // Hide the first page
    page2.style.display = "block"; // Show the second page
});

// Hide popup when clicked
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup and page 2 initially
popup.style.display = "none";
page2.style.display = "none";
