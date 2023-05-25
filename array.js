
a=[12,43,56,78,34]
console.log(a[5])//undefined
a[2]=90//legal it works
a[90]=890//legal it works
console.log(a)
console.log(a[87])
a[-23]=879//it will not goes in sequce of array index . it will cosider ass key value
a['place']='kumbakonam'//it will not goes in sequce of array index . it will cosider ass key value
b={sno:1,name:"prabha"}
a[b]="javascript object"
console.log(a)
