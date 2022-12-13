const KEY = "darkMode";

const btnDarkMode = document.querySelector(".dark-mode-btn");

// Перевірка нічного режиму
if (localStorage.getItem(KEY) === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// Включення нічного режиму
btnDarkMode.addEventListener("click", () => {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem(KEY, "dark");
  } else {
    localStorage.setItem(KEY, "light");
  }
});
