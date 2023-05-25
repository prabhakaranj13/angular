person={sno:1,name:"Rahul",city:"kumbakonam"}
candidate=person//pass by reference
candidate.skills=["java","css","HTML"]
console.log(person)
console.log(candidate)

member={...person,intrests:["singing","cricket","gaming"]}
console.log(person)
console.log(candidate)
console.log(member)