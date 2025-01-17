import 'destyle.css';
import './styles/main.scss';
import './js/slider';
import './js/hamburger';

(function partners() {
	const companies = document.querySelector('.partners__companies');
	const employee = document.querySelector('.partners__employee');
	const employes = document.querySelectorAll('.partners__employee');

	if (!companies) return;

	companies.addEventListener('click', (e) => {
		if (e.target === e.currentTarget) return;

		let companyElem = e.target.closest('li[data-company]');
		let company = companyElem.dataset.company;

		let targetEmployee = document.querySelector(`[data-employee=${company}]`);
		targetEmployee.classList.add('is--active');

		for (let item of employes) {
			if (item.dataset.employee !== `${company}`) {
				item.classList.remove('is--active');
			}
		}
	});
})();

(function empPopup() {
	const empClose = document.querySelector('.employee__close');
	const popupEmp = document.querySelector('.popup--employee');
	const header = document.querySelector('.header');
	if (!empClose) return;
	empClose.addEventListener('click', (e) => {
		e.target.closest('.popup--employee').classList.toggle('is--active');
	});

	document.addEventListener('click', (e) => {
		if (e.target.closest('.team__button')) {
			popupEmp.classList.add('is--active');
		}
		popupEmp.addEventListener('click', (e) => {
			if (!e.target.closest('.employee')) popupEmp.classList.remove('is--active');
		});
		if (popupEmp.classList.contains('is--active')) {
			header.style.zIndex = -1
		}
		else {
			header.style.zIndex = 998;
		}
	});
})();

(function showHide() {
	const createList = document.querySelector('.create__list');
	const create = document.querySelector('.create');

	if (!create) return;
	create.addEventListener('click', (e) => {
		let showMore = e.target.closest('.create__more-mobile');
		if (showMore) {
			createList.classList.toggle('show--all');
			if (showMore.innerHTML == 'show more') {
				showMore.innerHTML = 'show less';
			} else if (showMore.innerHTML == 'show less') {
				showMore.innerHTML = 'show more';
			}
		}
	});
})();
