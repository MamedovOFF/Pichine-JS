// Вам надо набор функций который будет симулировать калькулятор.
// Для этого вам надо написать 9 функций, которые могут! принимать в кач - ве аргумента другую функцию, если функция передана, то надо вернуть вызов функции с числом n, иначе вернуть число n.
// Например, функция one может принять в кач - ве аргумента функцию sum, тогда в return будет sum(1).Если же в функцию не передали ничего, то она просто вернет 1.
// Также надо написать 4 функции основных арифмитических операторов, которые принимают в кач-ве аргумента первое число, а возвращают функцию, которая принмает в кач-ве аргумента второе число и возвращает их сумму/разность/частое/произведение

function one(callback) {
	if (callback) {
		return callback(1)
	}
	return 1
}
function two(callback) {
	if (callback) {
		return callback(2)
	}
	return 2
}
function three(callback) {
	if (callback) {
		return callback(3)
	}
	return 3
}
function four(callback) {
	if (callback) {
		return callback(4)
	}
	return 4
}
function five(callback) {
	if (callback) {
		return callback(5)
	}
	return 5
}
function six(callback) {
	if (callback) {
		return callback(6)
	}
	return 6
}
function seven(callback) {
	if (callback) {
		return callback(7)
	}
	return 7
}
function eight(callback) {
	if (callback) {
		return callback(8)
	}
	return 8
}
function nine(callback) {
	if (callback) {
		return callback(9)
	}
	return 1
}

function plus(a) {
	return (b) => {
		return a + b
	}
}

function minus(a) {
	return (b) => {
		return b - a
	}
}

function divide(a) {
	return (b) => {
		return b / a
	}
}

function mult(a) {
	return (b) => {
		return a * b
	}
}

one(mult(three(plus(four())))); // В итоге вернется 7


eight(minus(four()))
four(minus(four()))
four(divide(two()))