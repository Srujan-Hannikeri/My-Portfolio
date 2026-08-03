// ======= Hamburger Menu =======
function initHamburger() {
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when a nav link is clicked
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
    }
  });
}

document.addEventListener("DOMContentLoaded", initHamburger);

// ======= Copy Phone =======
function copyPhone() {
  navigator.clipboard
    .writeText("+91 9886217143")
    .then(() => alert("Phone Number Copied!"));
}

// ======= Toggle Project Content =======
function toggleContent(event, button) {
  event.preventDefault();
  event.stopPropagation();

  const more = button.parentElement.querySelector(".more-content");

  if (more.style.display === "none" || more.style.display === "") {
    more.style.display = "inline";
    button.textContent = "Show Less";
  } else {
    more.style.display = "none";
    button.textContent = "Show More";
  }
}
