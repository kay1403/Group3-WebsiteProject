// src/scripts/main.js

const loadComponents = async (components) => {
  for (const { id, url } of components) {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  }

  // Activate the hamburger menu once the header is loaded
  const btn = document.getElementById("menu-btn");
  const icon = document.getElementById("menu-icon");
  const menu = document.getElementById("mobile-menu");
  const Hero = document.getElementById("Hero");
  const Text = document.getElementById("text");

  // Detect the current page
  const currentPage = window.location.pathname;

  // Set base URLs for icons
  const defaultHamburger = "https://uploads.onecompiler.io/43kq4m26v/43yug79tx/Group%205%20(1).png";
  const specialHamburger = "https://uploads.onecompiler.io/43kq4m26v/43zmm4gv9/Group%204.png";
  const closeIcon = "https://uploads.onecompiler.io/43kq4m26v/43yug79tx/Group%205%20(2).png";

  // Choose the base icon depending on the page
  if (currentPage.includes("imprint.html") || currentPage.includes("privacypolicy.html")) {
    icon.src = specialHamburger;
  } else {
    icon.src = defaultHamburger;
  }

  if (btn) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");

      const isMenuOpen = !menu.classList.contains("hidden");

      
      // If menu is open → show X
      // otherwise → show the appropriate hamburger
      if (isMenuOpen) {
        icon.src = closeIcon;
        Hero?.classList.add("md:mt-36", "mt-48");
        Text?.classList.add("hidden");
      } else {
        if (currentPage.includes("Imprint.html") || currentPage.includes("PrivacyPolicy.html")) {
          icon.src = specialHamburger;
        } else {
          icon.src = defaultHamburger;
        }
        Hero?.classList.remove("md:mt-36", "mt-48");
        Text?.classList.remove("hidden");
      }
    });
  }
};
