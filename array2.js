a=[12,43,56,78,34]
a[8]=5
//for(let x=0;x<a.length;x++)
//if (a[x]==8){
    //console .log(x in a)
//}
  //
  a[-300]="roger"
  b={sno:78,name:"roger"}
  a[JSON.stringify(b)]="javascript object"


  for(let x in a)//// the most appropriate for loop for processing  arrays with randomindex and array with properties
  {
    //console.log(x,a[x])
  } 
  for(let x of a){console.log(x)}
  
 