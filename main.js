

const users = axios.create({
    baseURL: "https://test-users-api.herokuapp.com/",
    headers: {
        "Content-type": "aplication/json"
    }
});

const rezult =  async () =>{
 
    const getUser = await users.get('/users')
    console.log(getUser.data)
    
    renderUser(getUser.data.data)
    
}   

async function usersDelete(userid, showuser) {
    try{
        const closeUser = await axios.delete('https://test-users-api.herokuapp.com/users/' + `${userid}`);
        if(closeUser.status === 200){
            showuser.remove();
        }else{
            throw new Error();
        }
       }catch(err){
        err.innerHTML = 'Cannot delete user';
    }   
} 

// create user, delete adduser to server!!! --------------------------------------------------------

const addUser = async () =>{
    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;

    const nameAge = {name, age}
    const newPeople = await axios.post('https://test-users-api.herokuapp.com/users/' + nameAge);
    try{
        if(name !== '' && age > 0){
            renderUser([nameAge])
        }else{
            // throw new Error();
            alert('Enter name or age')
        }
        
    }catch(err){
        console.log('Error', err)
    };
    
   
}

const renderUser = (client) =>{
    const people = document.querySelector("#mainbox");

    renderUser.innerHTML = '';

    client.forEach(item => {
        
        const showuser = document.createElement("div");
        showuser.classList.add("listUser");
        showuser.innerHTML = `
        <h3>name: ${item.name}</h3>
        <h3>age: ${item.age}</h3>
        `;

    // delete a client from server!!!!
        const dlUser = document.createElement('button');
        dlUser.classList.add('deleteUser');
        dlUser.innerHTML = 'X';
        dlUser.addEventListener('click', () =>{
            usersDelete(item.userid, showuser)
          })

        showuser.append(dlUser)
         people.append(showuser) 
          
    })
}

// onclick button method ----------------------------------------------------------
const loadUser = document.querySelector('#showUser')
loadUser.addEventListener('click', rezult)
const createUser = document.querySelector('#btcreate');
createUser.addEventListener('click', addUser)