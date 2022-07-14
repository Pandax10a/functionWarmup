// Create a function that accepts 1 string as an argument and console logs that string
function just_string (name_me){
    console.log(name_me);
    return name_me;
}

just_string(`alphabet`, `alphabet2`, `alphabet3`)

// Create a function that accepts 1 boolean as an argument and console logs `happy` if the boolean is true, and `sad` otherwise

function find_happy (boolean) {
    if(boolean === true) {
        console.log (`happy`);
    } else {
        console.log(`sad`);
    }
}

find_happy( 9 < 11);
find_happy(true);
find_happy(0 < 1);
find_happy(0> 1);

// Create a function that accepts 2 numbers as arguments and returns the larger of the 2 numbers

function find_larger(num1, num2) {
    if(num1 > num2) {
        console.log(`num1: ${num1} is the bigger number`);
        return num1;
    } else if (num2 > num1) {
        console.log(`num2: ${num2} is the bigger number`);
        return num2;
    }

}

find_larger( -1,1);
find_larger(1000, -1111);
find_larger(0, -1);
find_larger(0.1111, 0.11111);

// Create a function that accepts an array of numbers and returns the largest numner in the array

function find_biggest (array_numbers){
    for(let counter = 0; counter < array_numbers.length; counter++) {
        let biggest = array_numbers[counter];
        if (biggest > array_numbers[counter+1]) {
            biggest = array_numbers[counter];
            
        } else if (array_numbers[counter+1]>biggest) {
            biggest = array_numbers[counter+1];
            
        }
        return biggest;
    }
          
}


find_biggest([2,5,333,3, -1,999]);