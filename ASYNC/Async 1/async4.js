const newFunction = async () => {
    console.log("Hello world!");
}
newFunction()
 
const sing= async () => {
    
    return 'Here is the return'
    throw ("We got an error");
}
sing().then((resolvedData)=>{
    console.log('Promise resolved with : ', resolvedData)
})

const login= async (username, password)=>{
    if(!username || !password) throw 'Invalid username or password'
    if(password==='1234') return 'Welcome'
    throw 'Invalid password'
}
login('adfa', "1234")
    .then(msg=>{
        console.log('Loggedin successfully')
        console.log(msg)
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })