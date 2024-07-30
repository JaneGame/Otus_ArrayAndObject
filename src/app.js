const scores = {
    Anna: 10,
    Olga: 6,
    Ivan: 5,
    }

    let summ = 0


    /** Метод считает сумму всех баллов
    * @param {Array} scores
    * @return {Number|SyntaxError} Сумма всех значений или ошибка
    */

// eslint-disable-next-line no-unreachable-loop
function getScore(scores){for ( const name in scores){ 
    if (Number.isInteger(scores[name])) {
        summ = scores[name] + summ;
      }else{
        throw new SyntaxError(`Поле ${name} не является числом`);
      }  
    
};
    return summ;
};

 
console.log(getScore(scores));