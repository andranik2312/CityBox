// Додаємо подію при завантаженні контенту сторінки
document.addEventListener("DOMContentLoaded", function() {
    // Знаходимо всі елементи з класом "box-item"
    const boxItems = document.querySelectorAll('.box-item');

    // Додаємо обробник подій на клік по кожному елементу
    boxItems.forEach(function(box) {
        box.addEventListener('click', function() {
            const itemName = this.querySelector('p').textContent; // Отримуємо назву товару
            alert(`Ви натиснули на ${itemName}`); // Виводимо повідомлення з назвою товару
        });
    });
});
