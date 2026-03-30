const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur";
let accountStats

//  accountId = 2 //not allowed

accountEmail = "bac@gmail.com"
accountPassword = "55555"
accountCity = "mubai"

console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountStats])
