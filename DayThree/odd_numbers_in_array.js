var array_of_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Anonymous function
let odd_numbers_anonymous = function (numbers) {
    console.log('-Anonymous Function-')
    for (each_number of numbers){
        if (each_number % 2 !== 0) {
            console.log(each_number)
        }
    }
}

odd_numbers_anonymous(array_of_numbers);

// Immediately invoked function expression
(function odd_numbers_iife() {
    console.log('-IIFE Function-')
    for (each_number of array_of_numbers){
        if (each_number % 2 !== 0) {
            console.log(each_number)
        }
    }
})();

// Arrow function
let odd_numbers_arrow = (numbers) => {
    console.log('-Arrow Function-')
    for (each_number of numbers){
        if (each_number % 2 !== 0) {
            console.log(each_number)
        }
    }
}

odd_numbers_arrow(array_of_numbers);
