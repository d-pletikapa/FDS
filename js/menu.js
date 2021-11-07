const restourant = 'food-band';

const renderitems = (data) => {
	console.log('data:', data)
	data.forEach((el) => {
		console.log(el);
	});
};

fetch(`./db/${restourant}.json`)
	.then((response) => response.json())
	.then((data) => { renderitems(data) }).catch((error) => { console.log('error:', error) });