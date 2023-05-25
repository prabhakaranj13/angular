person={
    sNo:66,
    NAme:"prabhakran",
    City:"kumbakonam"
}
list=[34,76,89]
list["sno"]=35
person.skills=["java","css","HTML"]
list["name"]="Vijay"
for(let x in person)
console.log(x,"=>",person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))
for (let x in list)
    console.log(x,list[x])