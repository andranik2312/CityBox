// Додаємо подію при завантаженні контенту сторінки
document.addEventListener("DOMContentLoaded", function() {
    // Знаходимо кнопку за її id
    const greetButton = document.getElementById('greetButton');
    
    // Додаємо обробник подій на натискання кнопки
    greetButton.addEventListener('click', function() {
        alert('Привіт, дякуємо за натискання кнопки!'); // Виводимо повідомлення при натисканні кнопки
    });
});
