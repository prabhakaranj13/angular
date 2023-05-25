function demovariable(){
    const a=30
   console.log("within tha outer range a is",a)
   {
       //var a=90
       let a=90
       console.log("within tha block range a is",a)
       {
           a=900
          // console.log("within tha block inside block range a is",a)
       }

   }
   console.log("within tha outer range a is",a)
}
demovariable()
console.log(a)