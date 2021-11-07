/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth.js */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\r\n\r\n(0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBcUM7QUFDQTtBQUNyQyw0REFBSTtBQUNKLDZEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmRzLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGguanNcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51LmpzXCI7XHJcbmF1dGgoKVxyXG5tZW51KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n\tconst userName = document.querySelector('.user-name');\r\n\tconst buttonAuth = document.querySelector('.button-auth');\r\n\tconst modalAuth = document.querySelector('.modal-auth');\r\n\tconst closeAuth = document.querySelector('.close-auth');\r\n\tconst buttonOut = document.querySelector('.button-out');\r\n\r\n\tconst loginForm = document.getElementById('logInForm');\r\n\tconst inputLogin = document.getElementById('login'); //inputLogin.setAttribute = (\"required\", \"\");\r\n\tinputLogin.required = true;\r\n\tconst inputPassword = document.getElementById('password');\r\n\r\n\tbuttonAuth.addEventListener('click', () => { modalAuth.style.display = 'flex'; });\r\n\r\n\tcloseAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'none';\r\n\t});\r\n\r\n\tbuttonOut.addEventListener('click', () => {\r\n\t\tlogout();\r\n\t});\r\n\r\n\tconst login = (user) => {\r\n\t\tbuttonAuth.style.display = 'none';\r\n\t\tbuttonOut.style.display = 'flex';\r\n\t\tuserName.style.display = 'flex';\r\n\t\tuserName.textContent = user.login;\r\n\t\tmodalAuth.style.display = 'none';\r\n\t};\r\n\r\n\tconst logout = () => {\r\n\t\tbuttonAuth.style.display = 'flex';\r\n\t\tbuttonOut.style.display = 'none';\r\n\t\tuserName.style.display = 'none';\r\n\t\tuserName.textContent = '';\r\n\t\tlocalStorage.removeItem('user');\r\n\t};\r\n\r\n\tif (localStorage.getItem('user')) {\r\n\t\tlogin('localStorage', JSON.parse(localStorage.getItem('user')));\r\n\t\t// console.log('localStorage', JSON.parse(localStorage.getItem('user')));\r\n\t};\r\n\r\n\tloginForm.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\r\n\t\tconst user = {\r\n\t\t\tlogin: inputLogin.value,\r\n\t\t\tpassword: inputPassword.value\r\n\t\t};\r\n\t\tlocalStorage.setItem('user', JSON.stringify(user));\r\n\t\tlogin(user);\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxtQ0FBbUM7QUFDakY7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsaUVBQWUsSUFBSTtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zkcy8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG5cdGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG5cdGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuXHRjb25zdCBtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG5cdGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJyk7XHJcblx0Y29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKTtcclxuXHJcblx0Y29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpO1xyXG5cdGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTsgLy9pbnB1dExvZ2luLnNldEF0dHJpYnV0ZSA9IChcInJlcXVpcmVkXCIsIFwiXCIpO1xyXG5cdGlucHV0TG9naW4ucmVxdWlyZWQgPSB0cnVlO1xyXG5cdGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcclxuXHJcblx0YnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IH0pO1xyXG5cclxuXHRjbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9KTtcclxuXHJcblx0YnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0bG9nb3V0KCk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuXHRcdGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdFx0dXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuXHRcdGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0dXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG5cdH07XHJcblxyXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcblx0XHRsb2dpbignbG9jYWxTdG9yYWdlJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnbG9jYWxTdG9yYWdlJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XHJcblx0fTtcclxuXHJcblx0bG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlciA9IHtcclxuXHRcdFx0bG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcblx0XHRcdHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblx0XHRsb2dpbih1c2VyKTtcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst cardsMenu = document.querySelector('.cards-menu');\r\n\t//console.log('cardsMenu:', cardsMenu)\r\n\r\n\tconst changeTitle = (restaurant) => {\r\n\t\tconsole.log('restaurant:', restaurant)\r\n\t\tconst restaurantTittle = document.querySelector('.restaurant-title');\r\n\r\n\t\trestaurantTittle.textContent = restaurant.name;\r\n\t\tconst restaurantRating = document.querySelector('.rating');\r\n\t\trestaurantRating.textContent = restaurant.stars;\r\n\t\tconst restaurantPrice = document.querySelector('.price');\r\n\t\trestaurantPrice.textContent = `От ${restaurant.price} ₽`;\r\n\t\tconst restaurantCategory = document.querySelector('.category');\r\n\t\trestaurantCategory.textContent = restaurant.kitchen;\r\n\t};\r\n\r\n\tconst renderitems = (data) => {\r\n\t\t//console.log('data:', data);\r\n\t\tdata.forEach(({ description, id, image, name, price }) => {\r\n\t\t\tconst card = document.createElement('div');\r\n\t\t\tcard.classList.add('card');\r\n\t\t\tconsole.log('card:', card)\r\n\t\t\tcard.innerHTML = `\r\n\t\t\t<img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n\t\t\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">${name}</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t\t\t<div class=\"ingredients\">\r\n\t\t\t\t\t\t\t\t${description}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"card-buttons\">\r\n\t\t\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<strong class=\"card-price-bold\">${price} ₽</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t`;\r\n\t\t\tcardsMenu.append(card);\r\n\t\t});\r\n\t};\r\n\r\n\tif (localStorage.getItem('restaurant')) {\r\n\t\tconst restaurant = JSON.parse(localStorage.getItem('restaurant'))\r\n\t\t//console.log('restaurant:', restaurant)\r\n\r\n\t\tchangeTitle(restaurant);\r\n\r\n\t\tfetch(`../../db/${restaurant.products}`)\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((data) => { renderitems(data); }).catch((error) => { console.log('error:', error); });\r\n\t} else {\r\n\t\twindow.location.href = '/';\r\n\t};\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU0sU0FBUyxLQUFLO0FBQ25DO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBLHFCQUFxQixvQkFBb0IscUJBQXFCLCtCQUErQjtBQUM3RixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zkcy8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNhcmRzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1tZW51Jyk7XHJcblx0Ly9jb25zb2xlLmxvZygnY2FyZHNNZW51OicsIGNhcmRzTWVudSlcclxuXHJcblx0Y29uc3QgY2hhbmdlVGl0bGUgPSAocmVzdGF1cmFudCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ3Jlc3RhdXJhbnQ6JywgcmVzdGF1cmFudClcclxuXHRcdGNvbnN0IHJlc3RhdXJhbnRUaXR0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudC10aXRsZScpO1xyXG5cclxuXHRcdHJlc3RhdXJhbnRUaXR0bGUudGV4dENvbnRlbnQgPSByZXN0YXVyYW50Lm5hbWU7XHJcblx0XHRjb25zdCByZXN0YXVyYW50UmF0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpO1xyXG5cdFx0cmVzdGF1cmFudFJhdGluZy50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQuc3RhcnM7XHJcblx0XHRjb25zdCByZXN0YXVyYW50UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKTtcclxuXHRcdHJlc3RhdXJhbnRQcmljZS50ZXh0Q29udGVudCA9IGDQntGCICR7cmVzdGF1cmFudC5wcmljZX0g4oK9YDtcclxuXHRcdGNvbnN0IHJlc3RhdXJhbnRDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeScpO1xyXG5cdFx0cmVzdGF1cmFudENhdGVnb3J5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5raXRjaGVuO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbmRlcml0ZW1zID0gKGRhdGEpID0+IHtcclxuXHRcdC8vY29uc29sZS5sb2coJ2RhdGE6JywgZGF0YSk7XHJcblx0XHRkYXRhLmZvckVhY2goKHsgZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2UgfSkgPT4ge1xyXG5cdFx0XHRjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2FyZDonLCBjYXJkKVxyXG5cdFx0XHRjYXJkLmlubmVySFRNTCA9IGBcclxuXHRcdFx0PGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIiR7bmFtZX1cIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0JHtkZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJ0LXN2Z1wiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzcz1cImNhcmQtcHJpY2UtYm9sZFwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0YDtcclxuXHRcdFx0Y2FyZHNNZW51LmFwcGVuZChjYXJkKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKSB7XHJcblx0XHRjb25zdCByZXN0YXVyYW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdGF1cmFudCcpKVxyXG5cdFx0Ly9jb25zb2xlLmxvZygncmVzdGF1cmFudDonLCByZXN0YXVyYW50KVxyXG5cclxuXHRcdGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xyXG5cclxuXHRcdGZldGNoKGAuLi8uLi9kYi8ke3Jlc3RhdXJhbnQucHJvZHVjdHN9YClcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7IHJlbmRlcml0ZW1zKGRhdGEpOyB9KS5jYXRjaCgoZXJyb3IpID0+IHsgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycm9yKTsgfSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG5cdH07XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;