import RandomQuotesApp from "./src/classes/RandomQuotesApp.js";

new RandomQuotesApp()

const toggleThemeBtn = document.querySelector('.theme-toggle')
const body = document.body

if(localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme')
  toggleThemeBtn.textContent = '☀️'
}

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme')

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleThemeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleThemeBtn.textContent = "🌙";
  }
})