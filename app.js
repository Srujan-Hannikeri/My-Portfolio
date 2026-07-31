function copyPhone() {
  navigator.clipboard
    .writeText("+91 9886217143")
    .then(() => alert("Phone Number Copied!"));
}

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
