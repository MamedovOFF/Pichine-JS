// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
	for (let i = 0; i < array.length; i++)
		for (let j = i + 1; j < array.length; j++)
			if (array[i] === array[j])
			{
				array.splice(i,1)
				i--
			}
	return array
}

removeReps([1, 1, 1, 1, 2, 4, 5, 6, 6, 8, 9, 11, 11, 11]); // [1,2,4,5,6,8,9,11]

