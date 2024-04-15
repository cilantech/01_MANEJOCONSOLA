
let nickName = prompt("Enter your usarname")
let nickLast = prompt("Enter your Last name")
let nickAge = prompt("Enter your Age")
let nickAddress = prompt("Enter your Address")
let nickEmail = prompt("Enter your Email")
let nickCallNumber = prompt("Enter your CallNumber")
var userName = "Herbin Esteban"
var lastN = "Restrepo isaza"
var age = "23"
var name2 = "Herbin esteban restrepo isaza 23"
const email = "herbin3522@gmail.com"
let address = "la floresta pa calle siempre viva"
let callNumber = "2241646584"
//let
//const
//var se usaba mucho antes ahora lo abandonamos,siempre usar: let si se puede alterar pero const no
console.log(userName, age, lastN)
console.error(lastN)
console.warn(age)
console.debug(address)
console.info(address)
console.log(name2)
console.log(email, address, callNumber)
console.log("Name = " + userName)
console.log("Age = " + age)
console.log("Last name  = " + lastN)
console.log("Address = " + address)

console.warn("Info = ",nickName,nickLast,nickAge,nickAddress,nickCallNumber,nickEmail)

//con esto se le aplican estilos para personalizar el error ---
console.log(`%c${age}`), ("background-color: #D9CEFF; border-radius: 50px; font-weight: bold; padding-top: 5px; padding-right: 8px; padding-bottom: 5px; padding-left: 8px;");

console.log("Info = " + userName + "" + lastN + "Age = " + age + "" + +"email=" + email + "" + +"address=" + address + "" + callNumber)
console.warn("Info = ", userName, lastN, "Age = ", age, email, address, callNumber)
console.error(`Info: ${userName} ${lastN} ${age} ${email}${address} ${callNumber}`)

console.group("basic information")//para agrupar distintas consolas en un item 
console.log("Name = " + userName)
console.log("Age = " + age)
console.log("Last name  = " + lastN)
console.groupEnd()


console.group("contact information")
console.log("Address = " + address)
console.log("Email=" + email)
console.log("CallNumber=" + callNumber)
console.groupEnd()

listCodersGates=["lorenzo perex", "carlos slim", "pedro pascal"]

console.table(listCodersGates)
console.list(listCodersGates)




