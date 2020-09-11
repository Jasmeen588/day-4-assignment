let intro = [{
    name: "Manraj",
    age: 15,
    country: "India",
    hobbies: ["Reading","Gaming"]
 },
  {
    name: "Manmeet",
    age: 27,
    country: "Canada",
    hobbies: ["Reading","drawing"],
 },
 {
    name: "Ashjot",
    age: 10,
    country: "India",
    hobbies: ["Dancing","painting"]
  },
{
    name: "parleen",
    age: 10,
    country: "India",
    hobbies: ["Running","swimming"]}];

for (let i = 0; i < intro.length; i++) {
    console.log(intro[i]);
}
//Write a function to display all the objects having country India
 for (let i = 0; i < intro.length; i++) {
    if(intro[i].country==="India"){
        console.log(intro[i]);
    }
    
}