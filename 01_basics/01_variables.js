const account_id = 144553
let account_email = "asjid@gmail.com"
var account_password = "kaka"
account_city = "London"

let account_country

console.log(account_country)
// account_id = 2

/*
Don't use var because it has block scope(global) and functional scope(local) mixup problem.
*/

account_country = "Pakistan"

console.table([account_id,account_email,account_password,account_city,account_country])