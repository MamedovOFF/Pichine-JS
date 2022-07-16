// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения

function removeString(message, symbol) {
	const res = message.split('')
	for (let i = 0; i < res.length; i++) {
		if (res[i] === symbol) {
			res.splice(i, 1)
			i = 0
		}
	}
	return res.join('')
}

removeString("Большое и интересное сообщение", "о"); // Бльше и интересне сбщение



