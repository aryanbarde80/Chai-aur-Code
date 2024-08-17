const accountId = 144553
let accountEmail = "aryan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 <--(not allowed)
// value of const can't be changed

// " This is how we write single line comments"

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); // Single Print

// To print multiple value in one go see below

console.table([accountId,accountEmail,accountPassword,accountCity])

// We prefer let as compared to var.
// Initially there wasn't scope in js so same named variables in different scopes creates problem while changing values of those variables.

/*
    Prefer not to use var
    because of the issue in block scope and
    functional scope
*/

let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

