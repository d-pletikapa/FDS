import cart from "./cart";

const menu = () => {
	const cardsMenu = document.querySelector('.cards-menu');
	//console.log('cardsMenu:', cardsMenu)

	const cartArray = localStorage.getItem('cart') ?
		JSON.parse(localStorage.getItem('cart')) :
		[];

	const changeTitle = (restaurant) => {
		console.log('restaurant:', restaurant)
		const restaurantTittle = document.querySelector('.restaurant-title');

		restaurantTittle.textContent = restaurant.name;
		const restaurantRating = document.querySelector('.rating');
		restaurantRating.textContent = restaurant.stars;
		const restaurantPrice = document.querySelector('.price');
		restaurantPrice.textContent = `От ${restaurant.price} ₽`;
		const restaurantCategory = document.querySelector('.category');
		restaurantCategory.textContent = restaurant.kitchen;
	};



	const addToCart = (cartItem) => {

		if (cartArray.some((item) => item.id === cartItem.id)) {
			cartArray.map((item => {
				if (item.id === cartItem.id) { item.count++ }

				return item;
			}))
		} else {
			cartArray.push(cartItem);
		}
		localStorage.setItem('cart', JSON.stringify(cartArray))
	}

	const renderitems = (data) => {
		//console.log('data:', data);
		data.forEach(({ description, id, image, name, price }) => {
			const card = document.createElement('div');
			card.classList.add('card');
			console.log('card:', card)
			card.innerHTML = `
			<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">
								${description}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
			`;
			card.querySelector('.button-card-text').addEventListener('click', () => {
				addToCart({ name, price, id, count: 1 });
			});
			cardsMenu.append(card);
		});
	};

	if (localStorage.getItem('restaurant')) {
		const restaurant = JSON.parse(localStorage.getItem('restaurant'))
		//console.log('restaurant:', restaurant)

		changeTitle(restaurant);

		fetch(`../../db/${restaurant.products}`)
			.then((response) => response.json())
			.then((data) => { renderitems(data); }).catch((error) => { console.log('error:', error); });
	} else {
		window.location.href = '/';
	};


}

export default menu
