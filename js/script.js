let name = "";
//поиск рандомного числа между 0 и 1 и округление до ближайшего меньшего целого числа
let number = Math.floor(Math.random() * 50);
let guesses = 0;
const output = document.querySelector('.output');
const prompt = document.querySelector('.prompt');
const input = document.querySelector('.prompt input');

console.log(number);

prompt.addEventListener('submit', submitInformation);

input.focus(); //устанавливаем фокус в инпут

// Отправляем введённые данные в консоль
function submitInformation(event) {
    event.preventDefault(); //останавливаем отправление данных формы до ввода

    console.log(input.value);

    processInput(input.value);

    input.value = "";
}

//Создаем элемент li со значением "Введите имя игрока:" и добавляем в output
function printMessage(message) {
    let li = document.createElement('li');
    li.textContent = message;
    // console.log(li.textContent);

    output.appendChild(li);
}

printMessage("Введите имя участника:");

//Очистка потомков родителя при выполнении функции processInput
function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

//
function processInput(input) {
    if (!input) return; //если инпут пустой, то происходит выход из функции
    if (!name) { //если инпут пустой, то присваивается введённое значение
        name = input;
        clearOutput();

        printMessage(`${name}. Попробуйте отгадать мой возраст от 0 до 50 с наименьшим количеством попыток.
        После каждой попытки я скажу "мало", "много" или "верно."`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return;

    guesses += 1;

    if (guess > number) {
        printMessage("Много. Попробуй ещё раз.");
    } else if (guess < number) {
        printMessage("Мало. Попробуй ещё раз.")
    } else {
        printMessage(`Верно. Это число ${guess}.`);
        printMessage(`Количество попыток: ${guesses}.`);
        printMessage("GAME OVER");

        prompt.remove();
    }
}