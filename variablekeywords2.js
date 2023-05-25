//global ,function scope and local scope 


a=20

function printer(){
    var a=35//function scpoe
    console.log("a:",a)
    a=50
}
printer()
console.log("global a:",a)