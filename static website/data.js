data = {
    services:[
    {
        id:1,
        name: "Application Services",
        image: "application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]
    },
    {
        id:2,
        name: "Testing Services",
        image: "testing.png",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        id:2,
        name: "Infrastructure Services",
        image: "infrastructure.png",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}

let code =""

for(let service of data.services){
    code+= "<div  class='service-box'>" 
    code+="<h3>"+service.name+"</h3>"
    code+="<img src='"+service.image+ "' >" 
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
        //code+="<li>"+feature+"</li>"
        code+="<li onclick=\"featureli('" + feature + "')\">" +feature+"</li>"
    }
    code+="</ul></div></div>"

   


}

document.getElementById("services-wrapper").innerHTML=code



function featureli(select){
    alert(select)
}
document.getElementsByClassName('features').innerHTML=code

