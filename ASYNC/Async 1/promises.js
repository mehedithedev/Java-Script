// Promises are objects that either return a successfully fetched data, ora the error .
// const fetchUser = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('[Now we have the user data]')

//         // resolve({username: 'Micael'}) // Promise resolved
//         reject('User not fouund') // Promise rejected
//     }, 2000);
// })

// Here is the best weay to do it: 
const fetchUser= (userName)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Now we have the user Data.')
            resolve({userName})
        }, 2000)
    })
}

const fetchUserPhoto= (userName)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Now we have the photo  for ${userName}`)
            resolve(`Here is the photo for ${userName}:`[
                'Photo 1',
                'Photo 2'
            ])
        }, 2000)
    })
}

const fetchUserPhotoDetails = (photo)=>{
   return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            console.log('Now we have the photo details')
            resolve('Details ...')
        }, 2000);
   })
}

// fetchUser('Tommy')
//     .then((user)=> fetchUserPhoto(user.userName))
//     .then((photo)=> fetchUserPhotoDetails(photo[0]))
//     .then((details)=> console.log('Your photo details fetched successfully'))
 
const displayData = async (user) =>{
    const user = fetchUser
}