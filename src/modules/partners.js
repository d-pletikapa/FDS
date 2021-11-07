const partners = () => {

	const cardsRestaurants = document.querySelector('.cards-restaurants');

	const renderitems = (data) => {
		console.log('data:', data);
		data.forEach((item) => {
			//console.log('item:', item)
			const { image, kitchen, name, price, products, stars, time_of_delivery } = item;
			const a = document.createElement('a');
			a.setAttribute('href', '/restaurant.html')
			a.classList.add('card', 'cards-restaurant')
			a.dataset.products = products;
			a.innerHTML = `
			<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${name}</h3>
								<span class="card-tag tag">${time_of_delivery} мин</span>
							</div>
							<div class="card-info">
								<div class="rating">
									${stars}
								</div>
								<div class="price">От ${price} ₽</div>
								<div class="category">${kitchen}</div>
							</div>
						</div>
			`;

			a.addEventListener('click', (e) => {
				e.preventDefault()
				//const link = a.dataset.products
				localStorage.setItem('restaurant', JSON.stringify(item))
				window.location.href = '/restaurant.html'
				console.log('a:', a)
			});

			cardsRestaurants.append(a);
		});
	};

	fetch('https://test01-2f26b-default-rtdb.firebaseio.com/db/partners.json')
		.then((response) => response.json())
		.then((data) => { renderitems(data); }).catch((error) => { console.log('error:', error); }).finally(console.log('finally:'));
}
// const array = [11, 34, 67, 798, 45];
// console.log('array:', array[1])

// for (let i = 0; i < array.length; i++) {
// 	console.log(i);
// 	console.log('array:', array[i]);
// };

// array.forEach((elem, index, array) => {


// 	if (index === 3) { console.log('elem:', elem) };

// });
export default partners