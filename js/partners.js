const renderitems = (data) => {
	console.log('data:', data);
	data.forEach((el) => {
		console.log(el);

	});
};

fetch('https://test01-2f26b-default-rtdb.firebaseio.com/db/partners.json')
	.then((response) => response.json())
	.then((data) => { renderitems(data) }).catch((error) => { console.log('error:', error) }).finally(console.log('finally:'));


// const array = [11, 34, 67, 798, 45];
// console.log('array:', array[1])

// for (let i = 0; i < array.length; i++) {
// 	console.log(i);
// 	console.log('array:', array[i]);
// };

// array.forEach((elem, index, array) => {


// 	if (index === 3) { console.log('elem:', elem) };

// });