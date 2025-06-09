const accountId = 1234
let accountEmail = "ishika@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState
accountEmail = "i123@gmail.com"
accountPassword = "456"
accountCity = "Bengaluru"

// use let and const and
// prefer not to use
// var because of issue in block scope and functional scope
console.log(accountEmail)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])