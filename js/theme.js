function updateTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.innerHTML = theme === "light" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  updateTheme(savedTheme);
  document.querySelector(".theme-btn").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    updateTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  });
});
