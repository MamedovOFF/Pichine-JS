// Напишите функицю, которая принимает индекс числа из ряда Фибоначчи и возвращает его значение
// Предположим, что ряд Фибоначчи начинается с 0 индекса


function fibo(index) {
	if (index === 0 || index === 1)
		return 1
	if (index <= 2)
		return index
	return  fibo(index - 1) + fibo(index - 2)
}

console.log(fibo(8)) // Вернет 8 
