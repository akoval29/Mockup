"use strict";

// smooth scroll
const divs = document.querySelectorAll("[id]");
const navEl = document.querySelector(".eCom__header__nav");

for (let i = 0; i < divs.length; i++) {
  const id = divs[i].getAttribute("id");
  const a = document.createElement("a");
  a.setAttribute("href", `#${id}`);
  a.textContent = `${id}`;
  navEl.appendChild(a);
  a.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
}
