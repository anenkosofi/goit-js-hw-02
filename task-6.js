let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Введите число, пожалуйста');
           
    if (input === null) {
        break;
    } else if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз')
        continue;
    } numbers.push(input);
}

for (const number of numbers) {
    if (numbers.length !== 0) {
        total += Number(number);
    }
}
console.log(`Общая сумма чисел равна ${total}`);