const logItems = function (array) {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = `${i + 1} - ${array[i]}`;
        console.log(array[i]);
    }
    return array;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.table(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.table(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));