// JSON объекты ////
const workerGen = {
    // Фамилии //
    surnames: `{  
        "count": 15,
        "list": {
            "el_1": "Иванов",
            "el_2": "Смирнов",
            "el_3": "Орлов",
            "el_4": "Васильев",
            "el_5": "Петров",
            "el_6": "Михайлов",
            "el_7": "Зайцев",
            "el_8": "Федоров",
            "el_9": "Кравцов",
            "el_10": "Яковлев",
            "el_11": "Николаев",
            "el_12": "Славин",
            "el_13": "Степанов",
            "el_14": "Павлов",
            "el_15": "Александров",
            "el_16": "Морозов"
        }
    }`,
    // Мужские имена //
    workerNamesMale: `{
        "count": 10,
        "list": {     
            "el_1": "Александр",
            "el_2": "Алексей",
            "el_3": "Иван",
            "el_4": "Артем",
            "el_5": "Дмитрий",
            "el_6": "Никита",
            "el_7": "Кирилл",
            "el_8": "Данила",
            "el_9": "Егор",
            "el_10": "Андрей"
        }
    }`,
    // Женские имена //
    workerNamesFemale: `{
        "count": 10,
        "list": {     
            "el_1": "Надежда",
            "el_2": "Ольга",
            "el_3": "Дарья",
            "el_4": "Евгения",
            "el_5": "Мария",
            "el_6": "Инна",
            "el_7": "Кира",
            "el_8": "Лана",
            "el_9": "Марина",
            "el_10": "Наталья"
        }
    }`,
    // Мужские\Женские отчества //
    fatherNames: `{  
        "count": 10,
        "list": {
            "el_1": "Иванов",
            "el_2": "Алексеев",
            "el_3": "Петров",
            "el_4": "Михайлов",
            "el_5": "Федоров",
            "el_6": "Николаев",
            "el_7": "Вячеславов",
            "el_8": "Данилов",
            "el_9": "Павлов",
            "el_10": "Александров"
        }
    }`,
    // Мужские профессии //
    professionsMale: `{
        "count": 10,
        "list": {     
            "el_1": "Програмист",
            "el_2": "Врач",
            "el_3": "Шафёр",
            "el_4": "Финансовый аналитик",
            "el_5": "Инженер",
            "el_6": "Физик",
            "el_7": "Электрик",
            "el_8": "Слесарь",
            "el_9": "Автомеханик",
            "el_10": "Менеджер"
        }
    }`,
    // Женские профессии //
    professionsFemale: `{
        "count": 10,
        "list": {     
            "el_1": "Директор",
            "el_2": "Учительница",
            "el_3": "Медсестра",
            "el_4": "Воспитатель",
            "el_5": "Кассир",
            "el_6": "Логопед",
            "el_7": "Секретарь",
            "el_8": "Певица",
            "el_9": "Швея",
            "el_10": "Лаборант"
        }
    }`,
   // Гендеры //
    genderMale: 'Мужчина',
    genderFemale: 'Женщина',

// Функция рандомной генерации //

    generNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

// Перевод объекта из JSON и случайная подборка елементов объекта //

    generValue: function (json) {
        const obj = JSON.parse(json);
        const elem = `el_${this.generNumber(obj.count, 1)}`; 
        
        return obj.list[elem];
    },

    //* Генерация пола*//

    generGender: function() {
    
        gender = (this.generNumber(1)) ? 'Мужчина' : 'Женщина';

        return gender;
    },

      //* Генерация имени *//

    generWorkerName: function() {

        let workerNameJson = (gender == 'Мужчина') ? this.workerNamesMale : this.workerNamesFemale;

        return this.generValue(workerNameJson);

    },

        //* Генерация фамилии  *//

    generSurname: function() {

        let surNameJson = (gender == 'Мужчина') ? this.generValue(this.surnames) : `${this.generValue(this.surnames)}a`;

        return surNameJson;
    },

        //* Генерация отчества  *//

    generFatherName: function(){

        let randomFatherName = (gender == 'Мужчина') ? `${this.generValue(this.fatherNames)}ич` : `${this.generValue(this.fatherNames)}на`;
        
        return randomFatherName;   
    },   
  
        //* Генерация Даты рождения  *//
    generDate: function() {
        let startDate = new Date(1970, 1, 1); // Верхняя граница
        let endDate = new Date(2000, 12, 31); // Нижняя граница
        let date = new Date( + startDate + Math.random() * (endDate - startDate)) // Генерация случайной даты
       
       return date.toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric'} ) // Перевод даты на русский язык и в формат число-слово-число(12 мая 2023)

    },

        //* Генерация професси  *//

    generProfession: function() {
        
        let profession = (gender == 'Мужчина') ? this.professionsMale : this.professionsFemale;

        return this.generValue(profession);

    },

  

    getWorker: function () {
        this.worker = {};
        this.worker.gender = this.generGender();
        this.worker.workerName = this.generWorkerName();
        this.worker.surName = this.generSurname();
        this.worker.fatherName = this.generFatherName();
        this.worker.birthYear = this.generDate();
        this.worker.profession = this.generProfession();
        return this.worker;
    }
};