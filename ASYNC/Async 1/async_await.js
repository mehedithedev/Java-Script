const fetchNum= async ()=>{
    return 25;
}
// fetchNum()  // normal way to fetch using then and catch
//     .then((num)=> console.log(num))

const asyncAwait= async ()=>{
  console.log(await fetchNum())
}
asyncAwait()
