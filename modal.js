document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const openButtons = document.querySelectorAll('.open-modal');
  const closeButtons = modal ? modal.querySelectorAll('.close-modal') : [];
  const form = modal ? modal.querySelector('.order-form') : null;
  const submitButton = form ? form.querySelector('[type="submit"]') : null;
  const nameField = form ? form.querySelector('[name="name"]') : null;
  const phoneField = form ? form.querySelector('[name="phone"]') : null;
  const checkbox = form ? form.querySelector('.agree-checkbox') : null;

  if (!modal || !form || !submitButton || !nameField || !phoneField || !checkbox) return;

  const isFormValid = () =>
    nameField.value.trim() !== '' &&
    phoneField.value.trim() !== '' &&
    checkbox.checked;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    form.reset();
    submitButton.disabled = true;
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  form.addEventListener('input', () => {
    submitButton.disabled = !isFormValid();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    closeModal();
  });
});