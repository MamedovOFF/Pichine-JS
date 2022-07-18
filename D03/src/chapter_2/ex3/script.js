const clear = document.getElementById('clear')
const input = document.getElementById('input')
const btns = document.getElementsByClassName('btn-custom')
const value = []
let value_input = ''
let operator = null

clear.addEventListener('click', () => {
	value_input = ''
	operator = null
	input.value = null
	value.length = 0
})

for (let i = 0; i < btns.length; i++) {
	if (btns[i].children[0].outerText != 'C' && 
		btns[i].children[0].outerText != '+' && 
		btns[i].children[0].outerText != '-' &&
		btns[i].children[0].outerText != 'x' &&
		btns[i].children[0].outerText != '/' &&
		btns[i].children[0].outerText != '=')  {
			btns[i].addEventListener('click', () => {
				value_input += btns[i].children[0].outerText
				input.value = value_input
			})
		} else if (btns[i].children[0].outerText != 'C' && btns[i].children[0].outerText != '.' && btns[i].children[0].outerText != '=') {
			btns[i].addEventListener('click', () => {
				operator = btns[i].children[0].outerText
				value.push(Number(input.value))
				value_input = ''
				if (value.length === 2)
					calc()
			})
		} else if (btns[i].children[0].outerText === '=') {
			btns[i].addEventListener('click', () => {
				value.push(Number(value_input))
				calc()
			})
		}
}


function calc() {
	switch (operator) {
		case '+': 
			input.value = value[0] + value[1]
			break;
		case '-': 
			input.value = value[0] - value[1]
			break;
		case 'x': 
			input.value = value[0] * value[1]
			break;
		case '/': 
			input.value = value[0] / value[1]
			break;
	}
	operator = null
	value_input = ''
	value.length = 0
}