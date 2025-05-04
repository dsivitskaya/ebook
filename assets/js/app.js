// Загрузка последней прочитанной главы
function loadLastReadChapter() {
    const lastChapter = localStorage.getItem('lastChapter');
    if (lastChapter) window.location.href = lastChapter;
  }

  // Сохранение прогресса
  function saveProgress() {
    if (window.location.pathname.includes('/chapters/')) {
      localStorage.setItem('lastChapter', window.location.pathname);
    }
  }

  // Переключение темы
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  // Инициализация
  document.addEventListener('DOMContentLoaded', () => {
    // Применяем сохранённую тему
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }

    // Сохраняем прогресс при загрузке главы
    saveProgress();
  });