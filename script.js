// Smooth scrolling effect for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add a CSS class for animation when an element is in the viewport
function addAnimationOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animate");
    }
  });
}

// Add event listener for scrolling
window.addEventListener("scroll", addAnimationOnScroll);
