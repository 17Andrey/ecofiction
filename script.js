// Получаем элементы
const textElement = document.getElementById('text');
const hoverSound = document.getElementById('hover-sound');

// Добавляем событие для изменения текста и воспроизведения звука при наведении
textElement.addEventListener('mouseenter', () => {
  textElement.textContent = 'мор'; // Изменяем текст
  hoverSound.currentTime = 0; // Перемотка звука на начало
  hoverSound.play().catch((error) => {
    console.warn('Не удалось воспроизвести звук:', error);
  });
});

// Добавляем событие для возврата текста при уходе курсора
textElement.addEventListener('mouseleave', () => {
  textElement.textContent = 'ecofiction'; // Возвращаем исходный текст
});

hoverSound.volume = 0.1; // Громкость от 0.0 до 1.0

// Настройка таймера
const releaseDate = new Date('2024-12-13T00:00:00'); // Дата релиза
const countdown = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const diff = releaseDate - now;

    if (diff <= 0) {
        countdown.textContent = 'Релиз уже доступен!';
        clearInterval(timerInterval); // Остановить таймер после релиза
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Обновляем текст таймера
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Обновляем каждую секунду
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
