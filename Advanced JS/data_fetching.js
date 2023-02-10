// Data fetching 
// API : Application Programming Interface
// Something from which data can be fetched
const fetchData = (userName, callBack)=>{
    console.log('Fetching data ...')
    setTimeout(()=>{
        console.log('Now we have the user name')
        callBack({userName})
    }, 2000)
}
const user=fetchData('Jackson', (user)=>{
    console.log(`The user name is: ${user.userName}`)
})

