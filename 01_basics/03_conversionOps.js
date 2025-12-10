let score = "33";            // for numerics             => 33       type(string)
// let score = "3a";            // for alphanumerics        => NaN      type(string)
// let score = null;            // for null                 => 0        type(object)
// let score = undefined;       // for undefined            => NaN      type(undefined)
// let score = true;            // for boolean true/false   => 1/0      type(boolean)

// console.log(typeof score);
// console.log(typeof (score));

let valNum = Number(score);
// console.log(typeof valNum);
// console.log(valNum);

//--------------------------------------------------------------------------------------//

let tval = 1             // => true
// let tval = 0             // => false
// let tval = 2             // => true
// let tval = undefined     // => false
// let tval = null          // => false
// let tval = ""            // => false
// let tval = "Asjid123"    // => true

let convert_bool = Boolean(tval)
// console.log(convert_bool)


//--------------------------------------------------------------------------------------//

let tval1 = 1             // => String
// let tval1 = undefined     // => String
// let tval1 = null          // => String

let convertStr = String(tval1)
// console.log(convertStr + "-STR")
// console.log(typeof convertStr)

//------------------------------------ Operations -------------------------------------//

let value = 3
let negVal = -value
// console.log(negVal);


// console.log(2+2);        // Add
// console.log(2-2);        // Subtract
// console.log(2*2);        // Multiply
// console.log(2**3);       // Power
// console.log(2/3);        // Divide
// console.log(2%3);        // Modulus

let str1 = "Hi"
let str2 = " "
let str3 = "Asjid"

let fullStr = str1+str2+str3
// console.log(fullStr)

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");


let counter = 10
// counter++;   // postfix increment
// ++counter;   // prefix increment
// console.log(counter)

/*
    prefix and postfix working and checks
*/

// let postCheck = counter++;
// console.log(counter , postCheck)

// let preCheck = ++counter;
// console.log(counter , preCheck)