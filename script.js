  // Получаем текстовый элемент
  const textElement = document.getElementById('text');

  // Устанавливаем события для изменения текста при наведении
  textElement.addEventListener('mouseenter', () => {
    textElement.textContent = 'мор 13.12.24';
  });
  
  textElement.addEventListener('mouseleave', () => {
    textElement.textContent = 'ecofiction';
  });
  