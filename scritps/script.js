// Создать html-страничку и осуществить в ней следующее:
// Cоздать функцию, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию, передав туда данное значение.

function getUserName() {
    let userName = prompt('Как вас зовут?', 'Имя');
    return userName;
}

function printGreetings(usName) {
    let greetings = `Привет, ${usName}!`;
    alert(greetings);
}

let userNameForGreeting = getUserName();
printGreetings(userNameForGreeting);