const employessData=[
    {
        Id: 1,
        Department: "Software",
        Salery: 1000,
        Overtime: 7,
        
    },
    {
        Id: 2,
        Department:"IT",
        Salery:2000,
        Overtime:5
    }
];

const filterData=employessData.filter((item)=>{
    return item.Overtime>=7;
});
console.log(filterData)
