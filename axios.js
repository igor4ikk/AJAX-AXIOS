
// let bicks = 1; 
// const promise = new Promise((resolve, reject) =>{
   
//     setTimeout(() => {
//         bicks += 10;
//         if(bicks > 10){
//             resolve('vlad')
//         }else{
//             reject()
//         }
//     }, 10000);

// });

// promise.then((name) => {
//     console.log(`${name} ITS ALL GOOD`)
// }).catch(() => {
//     console.log('SAME ERROR')
// });


const placeholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-type": "aplication/json"
    }
});

const starWars = axios.create({
    baseURL: "https://swapi.co/api/",
    headers: { 
        "Content-type": "aplication/json"
    }
});

 (async () =>{
     try{
        const users = await placeholder.get('/users');
        console.log(users.data);
   
       const createUsers = await placeholder.post('/users', {
           name: 'igor',
           username: 'kiyun'
       });
       console.log(createUsers)
      
       const starPeople = await starWars.get("/people")
       console.log(starPeople.data)
     }catch(err){
        console.log(err)
     }
     
 
 })();