// Arrey Map has a return value
const inventory=[ 
    {price: 5, name: 'eggs', quantity: 1},
    {price: 4, name: 'ham', quantity: 2},
    {price: 3, name: 'mayo',quantity: 4},
    {price: 2, name: 'bread', quantity: 8}
]
const prices= inventory.map((item)=>item.price);
const items= inventory.map((item)=>item.name);

console.log(items)