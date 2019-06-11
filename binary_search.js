//Массив для ручных тестов
// let array = [3,5,1,23,345,64374,347,412,956,46532,14,242,23,43,54,65,75,67,87,97];

function binary_search(array, value) {

    //Проводим сортировку массива
    const sorting = array.sort((a,b)=>{return a-b});

    //Создадим нужные нам для поиска переменные
     let high = array.length - 1;
     let low = 0;
     let mid = 0;



     while( low <= high){
         //ВЫчисляем середину массива
         mid = Math.floor( (high+low)/2 );

         //Условия поиска
         if (array[mid] == value) {
             return array[mid];
         }else if( value > array[mid]){
             low = mid + 1;
         }else{
             high = mid - 1;
         }
     };

     //Значение не найдено
     return -1;
};


// Для проведения ручных тестов
// let completeSearch = binary_search(array, 333);
// console.log(completeSearch)
