import axios from 'axios';

const url = "http://localhost:4000/user/users";

// export const getUsuarios = async () => {
//     const resp = await fetch(url)
//     const users = await resp.json();
//     return users;
// }


export const getUsuarios = async () => {
     const response = await axios.get(url)
     return response.data
}


