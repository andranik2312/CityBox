// Додаємо подію при завантаженні контенту сторінки
document.addEventListener("DOMContentLoaded", function() {
    // Знаходимо кнопку за її id "greetButton"
    const greetButton = document.getElementById('greetButton');
    
    // Додаємо обробник подій на натискання кнопки "greetButton"
    greetButton.addEventListener('click', function() {
        alert('Привіт, дякуємо за натискання кнопки!'); // Виводимо повідомлення при натисканні кнопки
    });

    // Знаходимо кнопку за її id "moreInfoButton"
    const moreInfoButton = document.getElementById('moreInfoButton');
    
    // Додаємо обробник подій на натискання кнопки "moreInfoButton"
    moreInfoButton.addEventListener('click', function() {
        alert('Більше інформації про нас буде додано скоро!'); // Виводимо повідомлення при натисканні кнопки
    });
});
