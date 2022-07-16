// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  const banknots = [5000, 2000, 1000, 500, 200, 100, 50];
  let amount = 0
  const cash = {}
  while (sum !== 0) {
    let valut = 0
    for (let i = 0; i < banknots.length; i++) {
      valut = ~~(sum / banknots[i])
      sum %= banknots[i]
      if (valut) cash[banknots[i]] = valut
      amount += valut
    }
    if (sum > 0) return 'Incorrect value'
    if (amount > 20) return 'limit exceeded'
  }
  return cash
}

atm(10000); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
atm(2570); // Incorrect value
atm(100050); // limit exceeded


