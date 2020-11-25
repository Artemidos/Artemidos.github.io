/* Всплывающие пункты меню */
let nav = document.querySelectorAll('.navigation__item');

var isOpen = false;

const menuHandler = function () {
	if (this.classList.contains('active') === false) {
			for (let item of nav) {
    			item.classList.remove('active');
			}
    	    /*this.classList.add('active');*/
    	    isOpen = true;
    } else {
    	/*this.classList.remove('active');*/
    	isOpen = false;
    }
}

for (let navItem of nav) {
    	navItem.addEventListener('click', menuHandler);
    	navItem.addEventListener('mouseover', function () {
    		this.classList.add('active');
    	});
    	navItem.addEventListener('mouseout', function () {
    		this.classList.remove('active');
    	})
}

/* Обратный звонок */
let callOrder = document.querySelector('.callback__button-container');
let callBack = document.querySelector('.callback');
let callBackClose = document.querySelectorAll('.callback__close');
let callBackButton = document.querySelector('.callback__button');
let callBackOrdered = document.querySelector('.callback__ordered');
let callBackNameForm = document.getElementsByName('callback-name');
let callBackTelForm = document.getElementsByName('callback-tel');
let isFormFilled = false;

/* Проверка формы */
const formCheck = function () {
	if (callBackNameForm.value == 0 || callBackTelForm.value == 0) {
		isFormFilled = false;
	} else {
		isFormFilled = true;
	}
	return isFormFilled;
}

callOrder.onclick = function () {
	callBack.classList.add('opened');
}

callBackButton.onclick = function () {
	formCheck();
	if (isFormFilled == true) {
		callBack.classList.remove('opened');
		callBackOrdered.classList.add('opened');
	} else {
		alert('Заполните оба поля');
	}
}

for (let close of callBackClose) {
	close.onclick = function () {
		callBack.classList.remove('opened');
		callBackOrdered.classList.remove('opened');
	}
}

/* Карточки предложений */
let offersList = document.querySelector('.display__switch .list');
let offersMap = document.querySelector('.display__switch .map');
let listDisplay = document.querySelector('.offers');
let mapDisplay = document.querySelector('.offers-on__map');
let turnCard = document.querySelector('.offers__container .turn__card');

/* Переключение вида */
offersList.onclick = function() {
	turnCard.classList.remove('hidden');
	offersMap.classList.remove('selected');
	mapDisplay.classList.remove('selected');
	offersList.classList.add('selected');
	listDisplay.classList.add('selected');
}

offersMap.onclick = function() {
	turnCard.classList.add('hidden');
	offersMap.classList.add('selected');
	mapDisplay.classList.add('selected');
	offersList.classList.remove('selected');
	listDisplay.classList.remove('selected');
}

/* Купить участок просто: переключение */
let simpleBuySteps = document.querySelector('.steps');
let simpleBuyInstallment = document.querySelector('.installment');
let simpleBuyMortgage = document.querySelector('.mortgage');
let stepsContainer = document.querySelector('.steps-container');
let installmentContainer = document.querySelector('.installment-container');
let mortgageContainer = document.querySelector('.mortgage-container');

simpleBuySteps.onclick = function () {
	simpleBuySteps.classList.add('selected');
	stepsContainer.classList.add('selected');
	simpleBuyInstallment.classList.remove('selected');
	installmentContainer.classList.remove('selected');
	simpleBuyMortgage.classList.remove('selected');
	mortgageContainer.classList.remove('selected');
}

simpleBuyInstallment.onclick = function () {
	simpleBuySteps.classList.remove('selected');
	stepsContainer.classList.remove('selected');
	simpleBuyInstallment.classList.add('selected');
	installmentContainer.classList.add('selected');
	simpleBuyMortgage.classList.remove('selected');
	mortgageContainer.classList.remove('selected');
}

simpleBuyMortgage.onclick = function () {
	simpleBuySteps.classList.remove('selected');
	stepsContainer.classList.remove('selected');
	simpleBuyInstallment.classList.remove('selected');
	installmentContainer.classList.remove('selected');
	simpleBuyMortgage.classList.add('selected');
	mortgageContainer.classList.add('selected');
}

/* Запишитесь на просмотр */
