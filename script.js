// Находим элементы DOM
const modal = document.getElementById('orderModal');
const orderBtn = document.getElementById('orderBtn');
const closeModal = document.querySelector('.close-modal');
const orderForm = document.getElementById('orderForm');

// Открытие модального окна по кнопке "Заказать кофе"
orderBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрытие окна по крестику
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие окна при клике на темную область вокруг формы
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка отправки формы
orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    
    alert('Спасибо за заказ! Наш бариста уже начал готовить ваш кофе.');
    
    orderForm.reset(); // Сбрасываем поля формы
    modal.style.display = 'none'; // Закрываем окно
});