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