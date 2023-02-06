const mapArray=[
    {
        name:'Mehedi Hasan',
        age:22,
        city:'Dhaka',
        country:'Bangladesh'
    },
    {
        name: 'Fahad',
        age:21,
        city:"New York",
        country: "USA"
    }
]
// Now we need to use map to get the name of the person.
// So we need to use map function to get the name of the person.
// How to use the map function?
// First we need to create a variable called mapName.
const mapName=mapArray.map((person)=>{
    return person.name;
})
// Now we need to print the mapName. 
console.log(mapName)
// Now we need to use map to get the age of the person.
const mapAge=mapArray.map((person)=>{
    return person.age;
})
console.log(mapAge)