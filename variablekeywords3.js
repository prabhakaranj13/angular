//global ,function scope and local scope 
//console.log(a)


a=20

function printer(){
   // var a=35//function scpoe
   a=35
    console.log("a:",a)
    var a=50
}
printer()
console.log("global a:",a)