function sample(){
    return function(a,b){
        return a+b
    }
}//function returning function

console.log(sample()(125,890))

function sample1(option){
    console.log("sample logic")
    if (option==1)
    return function(a,b){
        return a-b}
        
    else 
    return function(a,b){
        return a+b
    }

}
console.log(sample1(1)(90,78))

function add(a,b){return a+b}
function sub(a,b){return a-b}

function sample2(send)
{if (send==1)
return add 
else 
return sub}

console.log(sample2(1)(1,2))