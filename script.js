/* const users = {
    name: "Вася",
    surname: "Васильев",
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        let arr = value.split(" ");
        this.name = arr[0];
        this.surname = arr[1];
    }
}

console.log(users.fullName);
users.fullName = "Петя Петров"
console.log(users); */

// создаем объект с продукцией
const product = {
    plainBurger: {
        name: "Гамбургер простой",
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "Гамбургер FRESH",
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}
// создаем обьект ингридиентов
const extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        kcall: 10
    },
    cheese: {
        name: "Сыр",
        price: 400,
        kcall: 30
    }
}

// Подключаемся к кнопкам + и -
const btnPlusOrMinus = document.querySelectorAll('.main__product-btn');
// console.log(btnPlusOrMinus);
// перебираем кнопки и навешиваем событию функцию
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click',function () {  
        plusOrMinus(this)
    })
}

function plusOrMinus(element) {  
    // элемент.closest() - возвращает отдного родителя по указанному селектору
    const parent = element.closest(".main__product") // подключаемя к секции
    // element.hasAtribute("name") - возвращает true если есть атрибут
    // element.setAtribute("name, "value" ") - добавляет артрибут со значением
    // element.removeAtribute("name") - удаляет артрибут со значением
    // element.getAtribute("name") - возвращает значение атрибута
    const parentId = parent.getAttribute("id")
    // console.log(parentId);
    const elementData = element.getAttribute("data-symbol") // получаем знак кнопки + или -

    if (elementData == "+" && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (elementData == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    const out = parent.querySelector('.main__product-num');
    const price = parent.querySelector('.main__product-price span');
    const kcall = parent.querySelector('.main__product-kcall span');
    out.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kcall.innerHTML = product[parentId].Kcall
    console.log(product[parentId].amount);
    // console.log(parent);
}

// ------------------- подключаемся ингридиентов
const checkExtraProduct = document.querySelectorAll('.main__product-checkbox');

// перебираем массив чекбоксов 
for (let i = 0; i < checkExtraProduct.length; i++) {
    // для каждого чекбокса создаем событие
    checkExtraProduct[i].addEventListener('click',function () {  
        addExtraProduct(this)
    })    
}
// console.log(checkExtraProduct);
// функция работы чекбокса 
function addExtraProduct(element) {
    
}

let number = document.querySelector('.header__timer-extra');
// console.log(number);

function numberChange() {
    number.innerHTML++
    if (number.innerHTML > 0 && number.innerHTML < 100) {
        if (number.innerHTML < 50) {
            setTimeout(() => {
                numberChange()
            }, 50);
        } else if (number.innerHTML < 90) {
            setTimeout(() => {
                numberChange()
            }, 100);
        } else {
            setTimeout(() => {
                numberChange()
            }, 200);
        }
    }
}

numberChange()