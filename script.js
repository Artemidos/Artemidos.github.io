

document.addEventListener('DOMContentLoaded', function(){
	/* Всплывающие пункты меню */
let nav = document.querySelectorAll('.navigation-desktop .navigation__item');

let isOpen = false;

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
};

for (let navItem of nav) {
	navItem.addEventListener('click', menuHandler);
	navItem.addEventListener('mouseover', function () {
		this.classList.add('active');
	});
	navItem.addEventListener('mouseout', function () {
		this.classList.remove('active');
	});
};

/* Обратный звонок */
let callOrder = document.querySelector('.callback__button-container');
/*let callOrder = $('.callback__button-container');*/
let callBack = document.querySelector('.callback');
/*let callBack = $('.callback');*/
let callBackClose = document.querySelectorAll('.callback__close');
let callBackButton = document.querySelector('.callback__button');
let callBackOrdered = document.querySelector('.callback__ordered');
let callBackNameForm = document.getElementsByName('callback-name');
let callBackTelForm = document.getElementsByName('callback-tel');
let callBackCheckbox = document.querySelector('.callback__checkbox');
let isFormFilled = false;

/* Проверка формы */
const formCheck = function () {
	if (callBackNameForm.value === 0 || callBackTelForm.value === 0 || callBackCheckbox.checked === false) {
		isFormFilled = false;
	} else {
		isFormFilled = true;
	}
	return isFormFilled;
};

/*$(callOrder).click(function() {
	$(callBack).addClass('opened');
});*/


callOrder.onclick = function () {
	callBack.classList.add('opened');
};

callBackButton.onclick = function () {
	formCheck();
	if (isFormFilled === true) {
		callBack.classList.remove('opened');
		callBackOrdered.classList.add('opened');
	} else {
		alert('Заполните оба поля и подтвердите согласие с обработкой данных');
	}
};

for (let close of callBackClose) {
	close.onclick = function () {
		callBack.classList.remove('opened');
		callBackOrdered.classList.remove('opened');
	};
}

/* Карточки предложений */
let offersList = document.querySelector('.display__switch .list');
let offersMap = document.querySelector('.display__switch .map');
let listDisplay = document.querySelector('.offers');
let mapDisplay = document.querySelector('.offers-on__map');

/* Переключение вида */
offersList.onclick = function() {
	offersMap.classList.remove('selected');
	mapDisplay.classList.remove('selected');
	offersList.classList.add('selected');
	listDisplay.classList.add('selected');
};

offersMap.onclick = function() {
	offersMap.classList.add('selected');
	mapDisplay.classList.add('selected');
	offersList.classList.remove('selected');
	listDisplay.classList.remove('selected');

};

/* Перключение стрелочками */
let offersCardsArrows = document.querySelectorAll('.offers__container .arrow');
let offersCards = document.querySelectorAll('.offer__card');

// offersCardsArrows[1].onclick = function() {
	
// };

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
};

simpleBuyInstallment.onclick = function () {
	simpleBuySteps.classList.remove('selected');
	stepsContainer.classList.remove('selected');
	simpleBuyInstallment.classList.add('selected');
	installmentContainer.classList.add('selected');
	simpleBuyMortgage.classList.remove('selected');
	mortgageContainer.classList.remove('selected');
};

simpleBuyMortgage.onclick = function () {
	simpleBuySteps.classList.remove('selected');
	stepsContainer.classList.remove('selected');
	simpleBuyInstallment.classList.remove('selected');
	installmentContainer.classList.remove('selected');
	simpleBuyMortgage.classList.add('selected');
	mortgageContainer.classList.add('selected');
};

/* Запишитесь на просмотр */
let viewSignup = document.querySelector('.view__signup-inner');
let viewOrdered = document.querySelector('.view__signup-completed');
let viewSignupButton = document.querySelector('.signup__button');
let viewSignupName = document.querySelector('.signup__panel .name__form');
let viewSignupTel = document.querySelector('.signup__panel .phone__form');
let viewSignupCheckbox = document.querySelector('.checkbox .signup__agree');
let isSignupFormFilled = false;

const signupFormCheck = function () {
	if (viewSignupName.value === 0 || viewSignupTel.value === 0 || viewSignupCheckbox.checked === false) {
		isSignupFormFilled = false;
	} else {
		isSignupFormFilled = true;
	}
	return isSignupFormFilled;
};

viewSignupButton.onclick = function () {
	signupFormCheck();
	if (isSignupFormFilled === true) {
		viewOrdered.classList.add('selected');
		viewSignup.classList.remove('selected');
	} else {
		alert('Заполните оба поля и подтвердите согласие с обработкой данных');
	}
};

/* Лояльный покупатель переключение слайдов */
/*let loyalBuyerDots = document.querySelectorAll('.why__us-desktop .panel .turn__slide .dot');
let loyalBuyerArrows = document.querySelectorAll('.why__us-desktop .panel .turn__slide .arrow');
let loyalBuyerSlides = document.querySelectorAll('.why__us-desktop .loyal__buyer > div');

const loyalBuyerHandler = function () {
	if (this == loyalBuyerDots[0]) {
		for (let dot of loyalBuyerDots) {
			dot.classList.remove('active');
		}
		for (let slide of loyalBuyerSlides) {
			slide.classList.remove('selected');
		}
		this.classList.add('active');
		loyalBuyerSlides[0].classList.add('selected');
	}

	if (this == loyalBuyerDots[1]) {
		for (let dot of loyalBuyerDots) {
			dot.classList.remove('active');
		}
		for (let slide of loyalBuyerSlides) {
			slide.classList.remove('selected');
		}
		this.classList.add('active');
		loyalBuyerSlides[1].classList.add('selected');
	}

	if (this == loyalBuyerDots[2]) {
		for (let dot of loyalBuyerDots) {
			dot.classList.remove('active');
		}
		for (let slide of loyalBuyerSlides) {
			slide.classList.remove('selected');
		}
		this.classList.add('active');
		loyalBuyerSlides[2].classList.add('selected');
	}

	if (this == loyalBuyerDots[3]) {
		for (let dot of loyalBuyerDots) {
			dot.classList.remove('active');
		}
		for (let slide of loyalBuyerSlides) {
			slide.classList.remove('selected');
		}
		this.classList.add('active');
		loyalBuyerSlides[3].classList.add('selected');
	}
}

for (dot of loyalBuyerDots) {
	dot.addEventListener('click', loyalBuyerHandler);
}

const loyalBuyerArrowsHandler = function () {
	for (arrow of loyalBuyerArrows) {
	if (this.classList.contains('unactive') === false && this == loyalBuyerArrows[1]) {

			if (loyalBuyerDots[0].classList.contains('active')) {
				loyalBuyerDots[0].classList.remove('active');
				loyalBuyerDots[1].classList.add('active');
				loyalBuyerSlides[1].classList.add('selected');
				loyalBuyerSlides[0].classList.remove('selected');
				loyalBuyerArrows[0].classList.remove('unactive');
			} 
			else if (loyalBuyerDots[1].classList.contains('active')) {
				loyalBuyerDots[1].classList.remove('active');
				loyalBuyerDots[2].classList.add('active');
				loyalBuyerSlides[2].classList.add('selected');
				loyalBuyerSlides[1].classList.remove('selected');
			} 
			else if (loyalBuyerDots[2].classList.contains('active')) {
				loyalBuyerDots[2].classList.remove('active');
				loyalBuyerDots[3].classList.add('active');
				loyalBuyerSlides[3].classList.add('selected');
				loyalBuyerSlides[2].classList.remove('selected');
				this.classList.add('unactive');
			} 
			else return;
		}
	}

	if (this.classList.contains('unactive') === false && this == loyalBuyerArrows[0]) {
			if (loyalBuyerDots[3].classList.contains('active')) {
				loyalBuyerDots[3].classList.remove('active');
				loyalBuyerDots[2].classList.add('active');
				loyalBuyerSlides[2].classList.add('selected');
				loyalBuyerSlides[3].classList.remove('selected');
				this.classList.remove('unactive');
				loyalBuyerArrows[1].classList.remove('unactive');
			} 
			else if (loyalBuyerDots[2].classList.contains('active')) {
				loyalBuyerDots[2].classList.remove('active');
				loyalBuyerDots[1].classList.add('active');
				loyalBuyerSlides[1].classList.add('selected');
				loyalBuyerSlides[2].classList.remove('selected');
			} 
			else if (loyalBuyerDots[1].classList.contains('active')) {
				loyalBuyerDots[1].classList.remove('active');
				loyalBuyerDots[0].classList.add('active');
				loyalBuyerSlides[0].classList.add('selected');
				loyalBuyerSlides[1].classList.remove('selected');
				this.classList.add('unactive');
			} 
			else return;
		}
	}

for (arrow of loyalBuyerArrows) {
	arrow.addEventListener('click', loyalBuyerArrowsHandler);
}*/

/* Вопросы */
let questions = document.querySelector('.questions-inner');
let questionsOrdered = document.querySelector('.questions__ordered');
let questionsNameForm = document.querySelector('.questions-inner .name__form');
let questionsTelForm = document.querySelector('.questions-inner .phone__form');
let questionsCheckbox = document.querySelector('.questions-inner .questions__checkbox');
let questionsButton = document.querySelector('.questions__button');
let isQuestionsFormFilled = false;

const questionsFormCheck = function () {
	if (questionsNameForm.value === 0 || questionsTelForm.value === 0 || questionsCheckbox.checked === false) {
		isQuestionsFormFilled = false;
	} else {
		isQuestionsFormFilled = true;
	}
	return isQuestionsFormFilled;
};

questionsButton.onclick = function () {
	questionsFormCheck();
	if (isQuestionsFormFilled === true) {
		questionsOrdered.classList.add('selected');
		questions.classList.remove('selected');
	} else {
		alert('Заполните оба поля и подтвердите согласие с обработкой данных');
	}
}

/* Картчки новостей и пр. */
let news = document.querySelector('.news');
let stories = document.querySelector('.stories');
let useful = document.querySelector('.useful');
let toNews = document.querySelector('.to__news');
let toStories = document.querySelector('.to__stories');
let toUseful = document.querySelector('.to__useful');

toNews.onclick = function () {
	toNews.classList.add('selected');
	news.classList.add('selected');
	news.classList.remove('owl-hidden');
	toStories.classList.remove('selected');
	stories.classList.remove('selected'/*, 'owl-carousel', 'owl-theme'*/);
	stories.classList.add('owl-hidden');
	toUseful.classList.remove('selected');
	useful.classList.remove('selected'/*, 'owl-carousel', 'owl-theme'*/);
	useful.classList.add('owl-hidden');
};

toStories.onclick = function () {
	toNews.classList.remove('selected');
	news.classList.remove('selected'/*, 'owl-carousel', 'owl-theme'*/);
	news.classList.add('owl-hidden');
	toStories.classList.add('selected');
	stories.classList.add('selected'/*, 'owl-carousel', 'owl-theme'*/);
	stories.classList.remove('owl-hidden');
	toUseful.classList.remove('selected');
	useful.classList.remove('selected'/*, 'owl-carousel', 'owl-theme'*/);
	useful.classList.add('owl-hidden');
};

toUseful.onclick = function () {
	toNews.classList.remove('selected');
	news.classList.remove('selected'/*, 'owl-carousel', 'owl-theme'*/);
	news.classList.add('owl-hidden');
	toStories.classList.remove('selected');
	stories.classList.remove('selected'/*, 'owl-carousel', 'owl-theme'*/);
	stories.classList.add('owl-hidden');
	toUseful.classList.add('selected');
	useful.classList.add('selected'/*, 'owl-carousel', 'owl-theme'*/);
	useful.classList.remove('owl-hidden');
};

/* Подписаться на новости и акции */
let mailingPanel = document.querySelector('.mailing .panel');
let subscribeCompleted = document.querySelector('.mailing .subscribe__completed');
let mailingEmail = document.querySelector('.mailing .forms .email__form');
let mailingCheckbox = document.querySelector('.mailing__checkbox');
let subscribeButton = document.querySelector('.panel .subscribe__button');
let isMailingFormFilled = false;

const mailingFormCheck = function () {
	if (mailingEmail.value == 0 || mailingCheckbox.checked == false) {
		isMailingFormFilled = false;
	} else {
		isMailingFormFilled = true;
	}
	return isMailingFormFilled;
};

subscribeButton.onclick = function () {
	mailingFormCheck();
	if (isMailingFormFilled == true) {
		mailingPanel.classList.remove('selected');
		subscribeCompleted.classList.add('selected');
	} else {
		alert('Заполните поле и подтвердите согласие с политикой обработки персональных данных');
	}
};

/* Меню на мобилке */
let burger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger__menu');
let burgerClose = document.querySelector('.burger__menu .close');
let burgerNav = document.querySelectorAll('.burger__menu .navigation__item');

burger.onclick = function () {
	burgerMenu.classList.add('opened');
};

burgerClose.onclick = function () {
	burgerMenu.classList.remove('opened');
};

const burgerMenuHandler = function () {
	if (this.classList.contains('.navigation__item') === false) {
		for (let burgerNavItem of burgerNav) {
			burgerNavItem.classList.remove('.active');
		}
	}
	if (this.classList.contains('active') === false) {
		for (let burgerNavItem of burgerNav) {
			burgerNavItem.classList.remove('active');
		}
		this.classList.add('active');
		isOpen = true;
	} else {
		this.classList.remove('active');
		isOpen = false;
	}
};

for (let burgerNavItem of burgerNav) {
	burgerNavItem.addEventListener('click', burgerMenuHandler);
};

/* Обратный звонок на мобилке */
let burgerCallOrder = document.querySelector('.burger__menu .callback__button-container');

burgerCallOrder.onclick = function () {
	callBack.classList.add('opened');
	burgerMenu.classList.remove('opened');

};
})