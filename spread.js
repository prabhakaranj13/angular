/*c=[45,76,98,78]
a=[3435,34,34,356,35,c]
b=[...a]//copies the value of the array , not refrence  //introduce in ES2015 and later
b[5]=[...a[5]]
c[9]=890

console.log(a)
console.log(b)
b[8]=56765
console.log(a)
console.log(b)*/




c=[45,76,98,78]
a=[3435,34,34,356,35,[...c]]
b=[...a]//copies the value of the array , not refrence  //introduce in ES2015 and later
b[5]=[...a[5]]
c[9]=890
b[5][2]=987
//b[5]=[...a[5]]

console.log(a)
console.log(b)
b[8]=56765
console.log(a)
console.log(b)

