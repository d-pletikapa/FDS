const cart = () => {
  const buttonCart = document.getElementById('cart-button');
  const modalCart = document.querySelector('.modal-cart');
  const close = modalCart.querySelector('.close');
  const body = modalCart.querySelector('.modal-body');
  const buttonSend = modalCart.querySelector('.btn-send');
  const buttonClear = modalCart.querySelector('.clear-cart');
  const modalPricetag = modalCart.querySelector('.modal-pricetag');

  const resetCart = () => {
    body.innerHTML = '';
    modalPricetag.textContent = 0 + ' ₽';
    localStorage.removeItem('cart');
    modalCart.classList.remove('is-open');
  }

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));

    cartArray.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));

    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count > 0 ? item.count - 1 : 0
        /* below will be the same result as above, but in more code
        if (item.count > 0) {
          item.count--;
        } else {
          item.count = 0;
        } 
        */
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const renderItems = (data) => {
    const priceArray = [];
    body.innerHTML = '';
    modalPricetag.textContent = 0 + ' ₽';

    data.forEach(({ name, price, id, count }) => {
      const itemAmount = price * count;
      const cartElem = document.createElement('div');
      cartElem.classList.add('food-row');
      cartElem.innerHTML = `
        <span class="food-name">${name}</span>
				<strong class="food-price">${price} ₽</strong>
				<div class="food-counter">
					<button class="counter-button btn-dec" data-index="${id}">-</button>
					<span class="counter">${count}</span>
					<button class="counter-button btn-inc" data-index="${id}">+</button>
				</div>
      `

      priceArray.push(itemAmount);
      body.append(cartElem);

      /* another way to make counting buttons, but there are way more listeners
      cartElem.querySelector('.btn-dec').addEventListener('click', () => {
        decrementCount(id);
      })
      cartElem.querySelector('.btn-inc').addEventListener('click', () => {
        incrementCount(id);
      })
      */
    });

    const totalPrice = priceArray.reduce(function(sum, current) {
      return sum + current;
    });
    modalPricetag.textContent = totalPrice + ' ₽';
  }

  body.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('btn-inc')) {
      incrementCount(e.target.dataset.index);
    } else if (e.target.classList.contains('btn-dec')) {
      decrementCount(e.target.dataset.index);
    }
  })

  buttonSend.addEventListener('click', () => {
    const cartArray = localStorage.getItem('cart');
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: cartArray
    })
    .then(response => {
      if (response.ok) {
        resetCart();
      }
    })
    .catch(e => {
      console.error(e);
    })
  })

  buttonClear.addEventListener('click', resetCart);

  buttonCart.addEventListener('click', () => {
    if (localStorage.getItem('cart')) {
      renderItems(JSON.parse(localStorage.getItem('cart')));
    }
    modalCart.classList.add('is-open');
  })
  close.addEventListener('click', () => {
    modalCart.classList.remove('is-open');
  })
}

export default cart;