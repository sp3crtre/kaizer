// Get the navigation bar links
const navLinks = document.querySelectorAll(".nav-link");

// When a navigation bar link is clicked, scroll to the corresponding page
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Get the id of the page that the link is linked to
    const pageId = link.href.split("#")[1];

    // Scroll to the page
    document.body.scrollTop = document.getElementById(pageId).offsetTop;
  });
});
