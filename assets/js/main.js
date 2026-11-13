const root = document.documentElement;
const themeButton = document.getElementById("themeButton");
const themeMenu = document.getElementById("themeMenu");
const themeOptions = document.querySelectorAll(".theme-option[data-theme-value]");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const faqItems = document.querySelectorAll(".faq-item");
const yearEl = document.getElementById("year");
const toast = document.getElementById("toast");
const messageButtons = document.querySelectorAll("[data-email]");
const exploreButton = document.getElementById("exploreButton");
let toastTimer = null;
function getPreferredTheme() {
  try {
    const saved = localStorage.getItem("branduzzo-theme");
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch (e) {
    return "system";
  }
  return "system";
}
function applyTheme(mode) {
  if (mode === "light") {
    root.setAttribute("data-theme", "light");
  } else if (mode === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }
}
function saveTheme(mode) {
  try {
    localStorage.setItem("branduzzo-theme", mode);
  } catch (e) {
    return;
  }
}
function showToast(text) {
  if (!toast) {
    return;
  }
  toast.textContent = text;
  toast.classList.add("show");
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}
applyTheme("dark");
if (themeButton && themeMenu) {
  themeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    themeMenu.classList.toggle("open");
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }
  });
}
if (themeOptions) {
  themeOptions.forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.stopPropagation();
      const mode = option.getAttribute("data-theme-value");
      applyTheme(mode);
      saveTheme(mode);
      if (themeMenu) {
        themeMenu.classList.remove("open");
      }
    });
  });
}
document.addEventListener("click", function () {
  if (themeMenu) {
    themeMenu.classList.remove("open");
  }
  if (mobileMenu && menuButton) {
    const target = document.activeElement;
    if (target !== menuButton) {
      mobileMenu.classList.remove("open");
    }
  }
});
if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    mobileMenu.classList.toggle("open");
    if (themeMenu) {
      themeMenu.classList.remove("open");
    }
  });
  mobileMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}
if (faqItems) {
  faqItems.forEach(function (item) {
    const button = item.querySelector(".faq-button");
    if (button) {
      button.addEventListener("click", function () {
        const isOpen = item.classList.contains("open");
        faqItems.forEach(function (other) {
          other.classList.remove("open");
        });
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    }
  });
}
if (messageButtons) {
  messageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const email = button.getAttribute("data-email");
      showToast("Opening email to " + email);
      window.location.href = "mailto:" + email;
    });
  });
}
if (exploreButton) {
  exploreButton.addEventListener("click", function () {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
const cookieDecline = document.getElementById("cookieDecline");
function bannerConsent() {
  try {
    return localStorage.getItem("branduzzo-consent");
  } catch (e) {
    return null;
  }
}
function hideBanner() {
  if (cookieBanner) {
    cookieBanner.classList.remove("show");
  }
}
if (cookieBanner && !bannerConsent()) {
  cookieBanner.classList.add("show");
}
if (cookieAccept) {
  cookieAccept.addEventListener("click", function () {
    try {
      localStorage.setItem("branduzzo-consent", "accepted");
      const lang = localStorage.getItem("branduzzo-lang");
      if (lang) {
        document.cookie = "branduzzo-lang=" + lang + "; max-age=31536000; path=/; SameSite=Lax";
      }
    } catch (e) {
      return;
    }
    hideBanner();
  });
}
if (cookieDecline) {
  cookieDecline.addEventListener("click", function () {
    try {
      localStorage.setItem("branduzzo-consent", "declined");
      document.cookie = "branduzzo-lang=; max-age=0; path=/; SameSite=Lax";
    } catch (e) {
      return;
    }
    hideBanner();
  });
}
try {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    applyTheme("dark");
  });
} catch (e) {
  showToast("Theme sync unavailable");
}
