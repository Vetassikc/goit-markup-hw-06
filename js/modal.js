(() => {
  // Створюємо об'єкт з посиланнями на елементи DOM
  const refs = {
    // Знаходимо кнопку, яка відкриває модальне вікно
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Знаходимо кнопку, яка закриває модальне вікно
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Знаходимо сам елемент модального вікна (бекдроп)
    modal: document.querySelector('[data-modal]'),
  };

  // Додаємо слухачів подій на кнопки
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  /**
   * Функція, яка додає або прибирає клас "is-hidden" на модальному вікні,
   * тим самим показуючи або ховаючи його.
   */
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();