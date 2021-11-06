
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

loginForm.addEventListener('.submit', (event) => {
	event.preventDefault();

	const user = {
		login: inputLogin.value,
		password: inputPassword.value
	};

	localStorage.setItem('user', JSON.stringify(user));
	login(user);
});

if (localStorage.getItem('user')) {
	login('localStorage', JSON.parse(localStorage.getItem('user')));

	// console.log('localStorage', JSON.parse(localStorage.getItem('user')));

};

const logout = () => {
	buttonAuth.style.dsiplay = 'flex';
	buttonOut.style.dsiplay = 'none';
	userName.style.dsiplay = 'none';
	userName.textContent = '';
	localStorage.removeItem('user');
};

const login = (user) => {
	buttonAuth.style.dsiplay = 'none';
	buttonOut.style.dsiplay = 'flex';
	userName.style.dsiplay = 'flex';
	userName.textContent = user.login;
	modalAuth.style.display = 'none';
};
