// Asynchronousl JS is one in which some lines of code take time to run. These tasks are run in the background while the JS engine keeps executing other lines of code. When the result of the asyncronus tasks gets available, is then used in the program.
const fetchUserData = (userName, callback)=>{
    console.log('Fetching...')
    setTimeout(()=>{
        console.log(`We've got the user name...`)
        callback({userName})
    },2000)
}
const userData= fetchUserData('John Doe', (userData)=>{
    console.log(`The user name is : ${userData.userName}`)
})

