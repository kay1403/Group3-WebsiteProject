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
  const Data = document.getElementById("data");
  const Contact = document.getElementById("contact");

  // Detect the current page (always lowercase for reliability)
  const currentPage = window.location.pathname.toLowerCase();

  // Set base URLs for icons
  const defaultHamburger = "https://uploads.onecompiler.io/43kq4m26v/43yug79tx/Group%205%20(1).png";
  const specialHamburger = "https://uploads.onecompiler.io/43kq4m26v/43zmm4gv9/Group%204.png";
  const closeIcon = "https://uploads.onecompiler.io/43kq4m26v/43yug79tx/Group%205%20(2).png";

  // Detect if the page is special (imprint or privacy policy)
  const isSpecialPage = currentPage.includes("imprint.html") || currentPage.includes("privacypolicy.html");

  // Set the correct base icon before anything renders
  icon.src = isSpecialPage ? specialHamburger : defaultHamburger;

  if (btn) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      const isMenuOpen = !menu.classList.contains("hidden");

      if (isMenuOpen) {
        // When menu is open → show the X icon
        icon.src = closeIcon;
        Hero?.classList.add("md:mt-[350px]", "mt-[450px]");
        Text?.classList.add("hidden");
        menu.classList.add("flex");
        Data?.classList.add("md:mt-36", "mt-48");
        Contact?.classList.add("md:mt-36", "mt-48");
        //opacity
        Data && (Data.style.opacity = "0.2");
        Contact && (Contact.style.opacity = "0.2");
      } else {
        // When closed → restore the correct hamburger (depending on page)
        icon.src = isSpecialPage ? specialHamburger : defaultHamburger;
        Hero?.classList.remove("md:mt-[350px]", "mt-[450px]");
        Text?.classList.remove("hidden");
        menu.classList.remove("flex");
        Data?.classList.remove("md:mt-36", "mt-48");
        Contact?.classList.remove("md:mt-36", "mt-48");
        //opacity
        Data && (Data.style.opacity = "O.2");
        Contact && (Contact.style.opacity = "0.2"); 
      }
    });
  }
};
