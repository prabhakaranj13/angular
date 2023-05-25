a=[34,54,23]
console.log(a)
b=a//pass by reference 
console.log(b)
b[4]=900
console.log(a)//adding new value in array b it will impact in a also because its pass by refrence 
//copy the array
c=[]
for(let x in a )
c[x]=a[x]
console.log(a)
c[8]=789
console.log(c)

