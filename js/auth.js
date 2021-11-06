const userName = document.querySelector('.user-name');
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const buttonOut = document.querySelector('.button-out');

const loginForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login'); //inputLogin.setAttribute = ("required", "");
inputLogin.required = true;
const inputPassword = document.getElementById('password');

buttonAuth.addEventListener('click', () => { modalAuth.style.display = 'flex' });

closeAuth.addEventListener('click', () => {
	modalAuth.style.display = 'none'
});

buttonOut.addEventListener('click', () => {
	logout();
});

const login = (user) => {
	buttonAuth.style.display = 'none';
	buttonOut.style.display = 'flex';
	userName.style.display = 'flex';
	userName.textContent = user.login;
	modalAuth.style.display = 'none';
};

const logout = () => {
	buttonAuth.style.display = 'flex';
	buttonOut.style.display = 'none';
	userName.style.display = 'none';
	userName.textContent = '';
	localStorage.removeItem('user');
};

if (localStorage.getItem('user')) {
	login('localStorage', JSON.parse(localStorage.getItem('user')));
	// console.log('localStorage', JSON.parse(localStorage.getItem('user')));
};

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = {
		login: inputLogin.value,
		password: inputPassword.value
	};
	localStorage.setItem('user', JSON.stringify(user));
	login(user);
});



