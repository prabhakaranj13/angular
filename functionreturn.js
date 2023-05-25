function a(){

}
function b(){
    return "hello"
}
console.log(a())
console.log(b())
//note:function return undefined if it doesnot rncounter return statement

console.log(typeof(a))

c=function(){
    return "true"
}
console.log(typeof(c))
console.log(c())
b.store={x:234,y:345,z:689}
console.log(b.store)
console.log(b)
console.log(b,b())