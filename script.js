

/* Генерация карточки персонажа  */
document.querySelector('#restart').addEventListener('click',() => {
    const viewWorker = workerGen.getWorker();
    document.querySelector('#workerName').innerText = viewWorker.workerName ;
    document.querySelector('#surName').innerText = viewWorker.surName ;
    document.querySelector('#fatherName').innerText = viewWorker.fatherName ;
    document.querySelector('#gender').innerText = viewWorker.gender ;
    document.querySelector('#birthYear').innerText = viewWorker.birthYear ;
    document.querySelector('#profession').innerText = viewWorker.profession ;
}, 
);

/* Очистка карточки персонажа  */
document.querySelector('#clear').addEventListener('click', () => {
document.querySelector('#workerName').innerText = "Нет данных" ;
    document.querySelector('#surName').innerText = "" ;
    document.querySelector('#fatherName').innerText = "" ;
    document.querySelector('#gender').innerText = "Нет данных" ;
    document.querySelector('#birthYear').innerText = "Нет данных" ;
    document.querySelector('#profession').innerText = "Нет данных" ;
}, );