const cakes = [
  { id: 1, name: 'Кремовый замок', desc: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, img: '/images/cake1.jpg' },
  { id: 2, name: 'Малиновый рай', desc: 'Воздушный крем, темная основа и ягода малины', price: 150, img: '/images/cake2.jpg' },
  { id: 3, name: 'Фейерверк', desc: 'Разноцветный крем, с бисквитной основой', price: 150, img: '/images/cake3.jpg' },
  { id: 4, name: 'Шоколадный мир', desc: 'Ореховая стружка, нежный крем и шоколадная основа', price: 150, img: '/images/cake4.jpg' },
  { id: 5, name: 'Слезы дракона', desc: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, img: '/images/cake5.jpg' },
  { id: 6, name: 'Летняя фантазия', desc: 'Украшения в форме сердец, для любимого человека', price: 150, img: '/images/cake6.jpg' },
  { id: 7, name: 'Мыс безумия', desc: 'Разноцветная основа, стружка и нежный крем', price: 150, img: '/images/cake7.jpg' },
  { id: 8, name: 'Облачная сказка', desc: 'Светлая основа, нежный крем со стружкой сверху', price: 150, img: '/images/cake8.jpg' },
  { id: 9, name: 'Темный рыцарь', desc: 'Тёмная основа, нежный крем и вкусные шарики', price: 150, img: '/images/cake9.jpg' },
];

function createCakeCard(cake) {
  const card = document.createElement('div');
  card.className = 'cake-card';
  
  let amount = 0;
  
  function updateCard() {
    card.innerHTML = `
      <img src="${cake.img}" alt="${cake.name}" class="cake-img">
      <h3>${cake.name}</h3>
      <p class="cake-desc">${cake.desc}</p>
      <div class="card-footer">
        <span class="price">${cake.price} ₽/шт.</span>
        ${amount === 0 ? 
          '<button class="order-btn">Заказать</button>' : 
          `<div class="counter-box">
            <button class="btn-minus" type="button">-</button>
            <span class="count">${amount}</span>
            <button class="btn-plus" type="button">+</button>
            <div class="total-badge">${amount * cake.price} ₽</div>
          </div>`
        }
      </div>
    `;
    
    const orderBtn = card.querySelector('.order-btn');
    const minusBtn = card.querySelector('.btn-minus');
    const plusBtn = card.querySelector('.btn-plus');
    
    if (amount === 0 && orderBtn) {
      orderBtn.onclick = () => {
        amount = 1;
        updateCard();
      };
    } else if (amount > 0) {
      if (minusBtn) minusBtn.onclick = () => { amount = Math.max(0, amount - 1); updateCard(); };
      if (plusBtn) plusBtn.onclick = () => { amount++; updateCard(); };
    }
  }
  
  updateCard();
  return card;
}

function initApp() {
  const root = document.getElementById('root');
  if (!root) return;
  
  root.innerHTML = `
    <div class="app-container">
      <header class="main-header">
        <div class="logo">Сладкий сундук</div>
        <div class="contacts">
          <div>📍 г. Санкт-Петербург, ул. Куйбышева 31</div>
          <div>📞 8 (812) 844-95-49</div>
        </div>
      </header>
      <section class="hero-section">
        <h1>Пирожные и капкейки от 150 ₽/шт.</h1>
        <p>Приготовим за 3 часа в день заказа.</p>
      </section>
      <main class="catalog">
        <h2>Наш выбор для вас</h2>
        <div class="cake-grid"></div>
      </main>
      <section class="gallery-section">
        <div class="gallery-header">
          <h2>Сделали более 3.000 заказов за 2 года</h2>
          <p>Посмотрите фото реальных заказов из нашего instagram</p>
        </div>
        <div class="gallery-grid">${
          [1,2,3,4,5,6,7,8,9].map(n => 
            `<img src="/images/big-photo${n}.jpg" alt="Заказ ${n}" class="gallery-img">`
          ).join('')
        }</div>
      </section>
      <footer class="footer">
        <p>© 2026 sladkiy-sunduk.ru | Учебный проект РУДН</p>
      </footer>
    </div>
  `;
  
  const cakeGrid = root.querySelector('.cake-grid');
  cakes.forEach(cake => cakeGrid.appendChild(createCakeCard(cake)));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}