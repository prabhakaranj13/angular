//document.getElementById("user").style.display="none"
images=["first.jpg","second.jpg","third.jpg","fourth.jpg","fifth.jpg","sixth.jpg"]

setInterval(
    function() {
     currentIndex=Math.round(Math.random()*5)
     document.getElementById("img1").src = 
     images[ currentIndex ]
    },10000
)

function changeimage(arrowtype){
    if(arrowtype=="rightarr"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="leftarr"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    document.getElementById("img1").src=images[currentIndex]
}

function hiddenarrow(input){
    
    if(input=="up")
     {
        document.getElementById("down").style.display="block"
        document.getElementById("up").style.display="none"
        document.getElementById("slide-show").style.display="none"
       
     }
     if(input=="down")
     {
        document.getElementById("down").style.display="none"
        document.getElementById("up").style.display="block"
        document.getElementById("slide-show").style.display="Block"
     }

    
  
    

}





    