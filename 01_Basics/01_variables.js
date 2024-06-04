const accountId=123456;
var email="priyanshu@gmail.com";
let accountCity="Kochin";
password="123456"; //We can define variable without keyword as well but it's not prefered

//accountId=19191919; can't change const variable not allowed in js
console.log(accountId);
email="pranjan@gmail.com";
accountCity="Darbhanga";
password="90909090";
console.table([email,accountCity,password]);
/*
1.Always prefer to use let instead of var when declaring variable which is going to change
 due to scope issue with var.
*/