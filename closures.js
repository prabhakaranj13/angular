//javascript allows creating function within function 
//the function which is defined with in a function is genrally meant to be accessed only with in the outer function not globally
// if function needs need function b and it does want anything outer outside the function to use it we cabn declare b as inner function 

function outer(b){
    state=1
    function inner(){
        console.log(state,"it is accessble in inner ")
        console.log(b,"it is accessble in inner ")
        innerstate=1
        console.log(innerstate,"within inner function")
        state++
        innerstate++
        //outer()
    }
    console.log(state,"accessed within outer")
    //console.log(innerstate,"accessed within outer")//not possible
    return inner

}
result=outer("king")

console.log(result)
result()
result()
result()